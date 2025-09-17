package com.networknt.schema.perftest;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Callable;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectReader;
import com.networknt.schema.JsonSchema;
import com.networknt.schema.JsonSchemaFactory;
import com.networknt.schema.SpecVersion.VersionFlag;

/**
 * Basic.
 */
public class NetworkntBasicRunner implements Callable<Object> {
    private JsonSchema jsonSchema;
    private JsonNode schemas;
    private List<String> schemaNames;

    public NetworkntBasicRunner() {
        ObjectMapper objectMapper = new ObjectMapper();
        JsonSchemaFactory factory = JsonSchemaFactory.getInstance(VersionFlag.V4);
        try {
            ClassLoader classLoader = Thread.currentThread().getContextClassLoader();
            ObjectReader reader = objectMapper.reader();
            JsonNode schemaNode = reader.readTree(classLoader.getResourceAsStream("schema-draft4.json"));
            jsonSchema = factory.getSchema(schemaNode);

            JsonNode root = reader.readTree(classLoader.getResourceAsStream("perftest.json"));
            schemas = root.get("schemas");

            List<String> names = new ArrayList<>();
            schemas.fieldNames().forEachRemaining(names::add);
            schemaNames = names;
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public Object call() {
        List<Object> results = new ArrayList<>();
        for (String name : schemaNames) {
            JsonNode json = schemas.get(name);
            results.add(jsonSchema.validate(json));
        }
        return results;
    }

}
