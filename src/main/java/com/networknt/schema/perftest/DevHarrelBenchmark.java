package com.networknt.schema.perftest;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectReader;
import dev.harrel.jsonschema.Dialects;
import dev.harrel.jsonschema.JsonNode;
import dev.harrel.jsonschema.Validator;
import dev.harrel.jsonschema.ValidatorFactory;
import dev.harrel.jsonschema.providers.JacksonNode;
import org.openjdk.jmh.annotations.Benchmark;
import org.openjdk.jmh.annotations.BenchmarkMode;
import org.openjdk.jmh.annotations.Fork;
import org.openjdk.jmh.annotations.Measurement;
import org.openjdk.jmh.annotations.Mode;
import org.openjdk.jmh.annotations.Scope;
import org.openjdk.jmh.annotations.State;
import org.openjdk.jmh.annotations.Warmup;
import org.openjdk.jmh.profile.GCProfiler;
import org.openjdk.jmh.runner.Runner;
import org.openjdk.jmh.runner.RunnerException;
import org.openjdk.jmh.runner.options.Options;
import org.openjdk.jmh.runner.options.OptionsBuilder;

import java.io.IOException;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;

public class DevHarrelBenchmark {

	@State(Scope.Thread)
	public static class BenchmarkState {
		private URI schema;
		private Validator jsonSchema;
		private List<JsonNode> instances;

		public BenchmarkState() {
			try {
				JacksonNode.Factory nodeFactory = new JacksonNode.Factory();

				ObjectMapper objectMapper = new ObjectMapper();
				ClassLoader classLoader = Thread.currentThread().getContextClassLoader();

				ObjectReader reader = objectMapper.reader();
				com.fasterxml.jackson.databind.JsonNode schemaNode = reader.readTree(classLoader.getResourceAsStream("schema-draft4.json"));

				com.fasterxml.jackson.databind.JsonNode root = reader.readTree(classLoader.getResourceAsStream("perftest.json"));
				com.fasterxml.jackson.databind.JsonNode schemas = root.get("schemas");
				System.out.println(schemas.asText());
				instances = new ArrayList<>();
				schemas.fields().forEachRemaining(entry -> instances.add(nodeFactory.wrap(entry.getValue())));

		        ValidatorFactory validatorFactory =
		                new ValidatorFactory()
		                        .withDefaultDialect(new Dialects.Draft7Dialect())
		                        .withJsonNodeFactory(nodeFactory);
		        jsonSchema = validatorFactory.createValidator();
		        schema = jsonSchema.registerSchema(nodeFactory.wrap(schemaNode));
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

	@BenchmarkMode(Mode.Throughput)
	@Fork(2)
	@Warmup(iterations = 5, time = 5)
	@Measurement(iterations = 5, time = 5)
	@Benchmark
	public void basic(BenchmarkState state) {
		for (JsonNode instance : state.instances) {
			state.jsonSchema.validate(state.schema, instance);
		}
	}

	public static void main(String[] args) throws RunnerException {
		Options opt = new OptionsBuilder()
				.include(DevHarrelBenchmark.class.getSimpleName())
				.addProfiler(GCProfiler.class)
				.build();

		new Runner(opt).run();
	}

}
