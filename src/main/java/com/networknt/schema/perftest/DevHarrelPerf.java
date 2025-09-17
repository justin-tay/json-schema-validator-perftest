package com.networknt.schema.perftest;

import java.io.IOException;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;

import org.everit.json.schema.Schema;
import org.everit.json.schema.loader.SchemaLoader;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectReader;

import dev.harrel.jsonschema.Dialects;
import dev.harrel.jsonschema.JsonNode;
import dev.harrel.jsonschema.Validator;
import dev.harrel.jsonschema.ValidatorFactory;
import dev.harrel.jsonschema.providers.JacksonNode;

public class DevHarrelPerf {

	public static void main(final String[] args) throws IOException {
		URI schema;
		Validator jsonSchema;
		List<JsonNode> instances;
		JacksonNode.Factory nodeFactory = new JacksonNode.Factory();

		ObjectMapper objectMapper = new ObjectMapper();
		ClassLoader classLoader = Thread.currentThread().getContextClassLoader();

		ObjectReader reader = objectMapper.reader();
		com.fasterxml.jackson.databind.JsonNode schemaNode = reader
				.readTree(classLoader.getResourceAsStream("schema-draft4.json"));

		com.fasterxml.jackson.databind.JsonNode root = reader
				.readTree(classLoader.getResourceAsStream("perftest.json"));
		com.fasterxml.jackson.databind.JsonNode schemas = root.get("schemas");
		System.out.println(schemas.asText());
		instances = new ArrayList<>();
		schemas.fields().forEachRemaining(entry -> instances.add(nodeFactory.wrap(entry.getValue())));

		ValidatorFactory validatorFactory = new ValidatorFactory().withDefaultDialect(new Dialects.Draft7Dialect())
				.withJsonNodeFactory(nodeFactory);
		jsonSchema = validatorFactory.createValidator();
		schema = jsonSchema.registerSchema(nodeFactory.wrap(schemaNode));
		for (JsonNode instance : instances) {
			jsonSchema.validate(schema, instance);
		}
	}

}
