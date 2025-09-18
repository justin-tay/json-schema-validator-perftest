package com.networknt.schema.perftest;

import java.util.Map;
import java.util.concurrent.Callable;

import org.openjdk.jmh.annotations.Benchmark;
import org.openjdk.jmh.annotations.BenchmarkMode;
import org.openjdk.jmh.annotations.Fork;
import org.openjdk.jmh.annotations.Measurement;
import org.openjdk.jmh.annotations.Mode;
import org.openjdk.jmh.annotations.Param;
import org.openjdk.jmh.annotations.Scope;
import org.openjdk.jmh.annotations.State;
import org.openjdk.jmh.annotations.Warmup;
import org.openjdk.jmh.infra.Blackhole;
import org.openjdk.jmh.profile.GCProfiler;
import org.openjdk.jmh.runner.Runner;
import org.openjdk.jmh.runner.RunnerException;
import org.openjdk.jmh.runner.options.Options;
import org.openjdk.jmh.runner.options.OptionsBuilder;

public class CompareBasicBenchmark {
	public static final String NETWORKNT = "networknt";
	public static final String DEV_HARREL = "devHarrel";
	public static final String EVERIT = "everit";

	@State(Scope.Thread)
	public static class BenchmarkState {
		@Param({ NETWORKNT, EVERIT, DEV_HARREL })
		public String implementation;

		private Map<String, Callable<Object>> basic = Map.of(NETWORKNT, new NetworkntBasicRunner(), DEV_HARREL,
				new DevHarrelBasicRunner(), EVERIT, new EveritBasicRunner());
	}

	@BenchmarkMode(Mode.Throughput)
	@Fork(2)
	@Warmup(iterations = 5, time = 5)
	@Measurement(iterations = 5, time = 5)
	@Benchmark
	public void basic(BenchmarkState state, Blackhole blackhole) throws Exception {
		blackhole.consume(state.basic.get(state.implementation).call());
	}

	public static void main(String[] args) throws RunnerException {
		Options opt = new OptionsBuilder()
				.include(CompareBasicBenchmark.class.getSimpleName())
				.addProfiler(GCProfiler.class)
				.build();

		new Runner(opt).run();
	}

}
