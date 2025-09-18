package com.networknt.schema.perftest;

import java.io.IOException;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Callable;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectReader;

import dev.harrel.jsonschema.Dialects;
import dev.harrel.jsonschema.JsonNode;
import dev.harrel.jsonschema.Validator;
import dev.harrel.jsonschema.ValidatorFactory;
import dev.harrel.jsonschema.providers.JacksonNode;

public class DevHarrelBasicRunner implements Callable<Object> {
	private URI schema;
	private Validator validator;
	private List<JsonNode> instances;

	public DevHarrelBasicRunner() {
		try {
			JacksonNode.Factory nodeFactory = new JacksonNode.Factory();

			ObjectMapper objectMapper = new ObjectMapper();
			ClassLoader classLoader = Thread.currentThread().getContextClassLoader();

			ObjectReader reader = objectMapper.reader();
			com.fasterxml.jackson.databind.JsonNode schemaNode = reader
					.readTree(classLoader.getResourceAsStream("schema-draft4.json"));

			com.fasterxml.jackson.databind.JsonNode root = reader
					.readTree(classLoader.getResourceAsStream("perftest.json"));
			com.fasterxml.jackson.databind.JsonNode schemas = root.get("schemas");
			instances = new ArrayList<>();
			schemas.fields().forEachRemaining(entry -> instances.add(nodeFactory.wrap(entry.getValue())));

			ValidatorFactory validatorFactory = new ValidatorFactory().withDefaultDialect(new Dialects.Draft7Dialect())
					.withJsonNodeFactory(nodeFactory);
			validator = validatorFactory.createValidator();
			schema = validator.registerSchema(nodeFactory.wrap(schemaNode));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@Override
	public Object call() {
		List<Object> results = new ArrayList<>();
		for (JsonNode instance : instances) {
			results.add(validator.validate(schema, instance));
		}
		return results;
	}
}
