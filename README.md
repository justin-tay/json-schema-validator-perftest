# json-schema-validator-perftest
A performance test project that compares networknt, fge and everit json-schema-validator

This library provides a skeletal performance test suite for this JSON Schema Validator library:

https://github.com/networknt/json-schema-validator

It contains the same test suite for the other two Java schema validators:

https://github.com/fge/json-schema-validator/wiki/Performance

https://github.com/everit-org/json-schema


# Test results comparison

For testing the performance of the `fge/json-schema-validator` library I've used [this main class](https://github.com/fge/json-schema-validator/blob/master/src/test/java/com/github/fge/jsonschema/NewAPIPerfTest.java) .

## results 2017-07-09
fge: 7130 ms
everit-org: 1168 ms
networknt: 223 ms

I ran the testsuite of both libraries 10 times (each execution performing 500 validations).
Tests results on my local computer:
Running the tests on other workstations gave a bit different numbers but similar ratios.

## results 2021-02-18
fge: 4741 ms
everit-org: 564 ms
networknt: 543 ms


## results 2022-05-02
The fge validator is removed and the runner is removed as well. Both libraries are upgraded to the latest version.

To run it from the IDE, the result: 
```
everit-org(1.14.1): 260 ms
networknt(1.0.69): 196 ms
```

To run it from the jar file. 

```
java -cp target/perftest.jar com.networknt.schema.perftest.EveritPerf
java -cp target/perftest.jar com.networknt.schema.perftest.NetworkntPerf
```
The result: 

```
everit-org(1.14.1): 281 ms
networknt(1.0.69): 448 ms
```

Single run

# Running the tests

Clone this repository:

`git clone https://github.com/networknt/json-schema-validator-perftest.git`

Build the project with Maven:

```
cd json-schema-perftest/
mvn clean install -Pdist
```

Run the test:

`java -jar target/perftest.jar`

# Test results

Check [test results](test_results)
