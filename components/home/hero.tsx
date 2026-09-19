"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-20">
      <div className="mx-auto max-w-4xl text-center">
        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mb-4 text-sm uppercase tracking-[0.2em] text-cyan-500">
          CodeVerse
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="text-balance text-4xl font-bold tracking-tight sm:text-6xl"
        >
          Learn Programming the Modern Way
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
        >
          Master programming with interactive documentation, real-world projects, coding examples, quizzes, and interview preparation.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/docs/python/introduction">Start Learning <ArrowRight /></Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/languages">Explore Languages</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
