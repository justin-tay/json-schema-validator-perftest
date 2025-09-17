package com.networknt.schema.perftest;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.Callable;

import org.everit.json.schema.Schema;
import org.everit.json.schema.ValidationException;
import org.everit.json.schema.loader.SchemaLoader;
import org.json.JSONObject;
import org.json.JSONTokener;

public class EveritBasicRunner implements Callable<Object> {
    private Schema jsonSchema;
    private JSONObject schemas;
    private List<String> schemaNames;

    public EveritBasicRunner() {
        ClassLoader classLoader = Thread.currentThread().getContextClassLoader();
        JSONObject root = new JSONObject(new JSONTokener(classLoader.getResourceAsStream("perftest.json")));
        JSONObject schemaObject = new JSONObject(
                new JSONTokener(classLoader.getResourceAsStream("schema-draft4.json")));
        jsonSchema = SchemaLoader.load(schemaObject);
        schemas = root.getJSONObject("schemas");
        schemaNames = Arrays.asList(JSONObject.getNames(schemas));
    }

    @Override
    public Object call() {
        List<Object> results = new ArrayList<>();
        for (String name : schemaNames) {
            JSONObject json = (JSONObject) schemas.get(name);
            ValidationException result = null;
            try {
                jsonSchema.validate(json);
            } catch (ValidationException e) {
                result = e;
            }
            results.add(result);
        }
        return results;
    }

}
