// app/page.tsx
"use client";

import Image from "next/image";
import { motion, type Variants, type Transition } from "framer-motion";
import { Mail, Github, ArrowRight, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/**
 * Modern hero section for a young, talented dev.
 * Tech: Next.js (App Router), TypeScript, Tailwind, shadcn/ui, Framer Motion
 * Replace /mohamed.jpg with an actual image in your public/ folder
 */

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const item: Variants = {
  hidden: { y: 14, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 240, damping: 22 },
  },
};

const cardTransition: Transition = {
  type: "spring",
  stiffness: 160,
  damping: 20,
  delay: 0.15,
};

export default function Home() {
  return (
    <main className="min-h-[100dvh] bg-gradient-to-b from-background to-muted/30">
      <section className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-6 py-20 md:grid-cols-2 md:gap-12 lg:py-28">
        {/* Left: Copy */}
        <motion.div
          className="flex flex-col justify-center"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground">
              <BadgeCheck className="h-3.5 w-3.5" />
              Junior Developer • Next.js & TS
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl"
          >
            Eng Mohamed Osman
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 max-w-xl text-base leading-7 text-muted-foreground md:text-lg"
          >
            Young, talented developer crafting clean interfaces and reliable web apps.
            Focused on Next.js, TypeScript, and modern UI with shadcn and Tailwind.
          </motion.p>

          <motion.div variants={item} className="mt-7 flex flex-wrap items-center gap-3">
            <Button size="lg" className="group">
              Hire Me <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button size="lg" variant="outline">
              Download CV
            </Button>
            <a
              href="mailto:eng.mohamed@example.com"
              className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm hover:bg-muted"
            >
              <Mail className="h-4 w-4" /> Contact
            </a>
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm hover:bg-muted"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex max-w-xl flex-wrap gap-2 text-xs text-muted-foreground">
            <span className="rounded-full bg-primary/10 px-3 py-1">Next.js</span>
            <span className="rounded-full bg-primary/10 px-3 py-1">TypeScript</span>
            <span className="rounded-full bg-primary/10 px-3 py-1">Tailwind CSS</span>
            <span className="rounded-full bg-primary/10 px-3 py-1">shadcn/ui</span>
            <span className="rounded-full bg-primary/10 px-3 py-1">Framer Motion</span>
          </motion.div>
        </motion.div>

        {/* Right: Portrait card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={cardTransition}
          className="relative"
        >
          <Card className="border-none bg-gradient-to-br from-muted to-background/60 shadow-xl">
            <CardContent className="p-4 sm:p-6">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/mo.jpg" // Put an actual image into public/mo.jpg
                  alt="Eng Mohamed Osman portrait"
                  fill
                  priority
                  className="object-cover"
                />
                {/* Decorative blobs */}
                <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-2xl" />
                <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-primary/20 blur-2xl" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </main>
  );
}
