package com.networknt.schema.perftest;

import java.util.concurrent.Callable;

public class Blaze4jPerf {
    public static void main(final String[] args) throws Exception {
        Callable<Object> basic = new Blaze4jBasicRunner();
        Perf.run(basic);
    }
}
