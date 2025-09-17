package com.networknt.schema.perftest;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Callable;

import io.github.optimumcode.json.schema.JsonSchema;
import io.github.optimumcode.json.schema.ValidationError;
import kotlinx.serialization.json.Json;
import kotlinx.serialization.json.JsonElement;
import kotlinx.serialization.json.JsonObject;

public class OptimumCodeBasicRunner implements Callable<Object> {
    private JsonSchema schema;
    private List<JsonElement> instances;

    public OptimumCodeBasicRunner() {
        try {
            ClassLoader classLoader = Thread.currentThread().getContextClassLoader();
            String schemaData = new String((classLoader.getResourceAsStream("schema-draft4.json").readAllBytes()));
            this.schema = JsonSchema.fromDefinition(schemaData);

            String inputData = new String((classLoader.getResourceAsStream("perftest.json").readAllBytes()));
            JsonObject root = (JsonObject) Json.Default.parseToJsonElement(inputData);

            JsonObject schemas = (JsonObject) root.get("schemas");
            instances = new ArrayList<>();
            schemas.entrySet().forEach(entry -> instances.add(entry.getValue()));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public Object call() {
        List<Object> results = new ArrayList<>();
        for (JsonElement instance : instances) {
            List<ValidationError> errors = new ArrayList<>();
            schema.validate(instance, errors::add);
            results.add(errors);
        }
        return results;
    }
}
