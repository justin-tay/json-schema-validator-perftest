package com.networknt.schema.perftest;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Callable;

import com.github.madhavdhatrak.blaze4j.BlazeValidator;
import com.github.madhavdhatrak.blaze4j.CompiledSchema;
import com.github.madhavdhatrak.blaze4j.SchemaCompiler;
import com.github.madhavdhatrak.blaze4j.ValidationResult;

import kotlinx.serialization.json.Json;
import kotlinx.serialization.json.JsonObject;

public class Blaze4jBasicRunner implements Callable<Object> {
    private CompiledSchema schema;
    private List<String> instances;
    private BlazeValidator validator = new BlazeValidator();

    public Blaze4jBasicRunner() {
        try {
            ClassLoader classLoader = Thread.currentThread().getContextClassLoader();
            String schemaData = new String((classLoader.getResourceAsStream("schema-draft4.json").readAllBytes()));
            SchemaCompiler compiler = new SchemaCompiler();
            this.schema = compiler.compile(schemaData);

            String inputData = new String((classLoader.getResourceAsStream("perftest.json").readAllBytes()));
            JsonObject root = (JsonObject) Json.Default.parseToJsonElement(inputData);

            JsonObject schemas = (JsonObject) root.get("schemas");
            instances = new ArrayList<>();
            schemas.entrySet().forEach(entry -> instances.add(entry.getValue().toString()));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public Object call() {
        List<Object> results = new ArrayList<>();
        for (String instance : instances) {
            ValidationResult result = validator.validateWithDetails(schema, instance);
            results.add(result);
        }
        return results;
    }
}
