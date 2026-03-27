"use client"

import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react"

import { BeamDiagram } from "@/components/beam-diagram"
import { MorphingText } from "@/components/ui/morphing-text"
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity"

const texts = ["Get", "Your", "Personal", "Portfolio", "Website", "In", "Days"]

export function PageContent() {
  const workSectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: workSectionRef,
    offset: ["start end", "end start"],
  })
  const prefersReducedMotion = useReducedMotion()

  const rawScale = useTransform(
    scrollYProgress,
    [0, 0.18, 0.35, 0.8, 1],
    [1, 1, 1.06, 1.06, 1]
  )
  const animatedScale = useSpring(rawScale, {
    damping: 22,
    stiffness: 180,
  })

  return (
    <motion.main
      className="origin-top transform-gpu"
      style={{ scale: prefersReducedMotion ? 1 : animatedScale }}
    >
      <section id="home" className="scroll-mt-24">
        <div className="flex min-h-screen items-center justify-center p-6">
          <div className="mx-auto flex h-fit w-full max-w-md min-w-0 flex-col gap-4 text-center text-sm leading-loose">
            <MorphingText texts={texts} />
            <div>No coding. No stress. Just results.</div>
          </div>
        </div>
      </section>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <ScrollVelocityContainer className="text-4xl font-bold tracking-[-0.02em] md:text-7xl md:leading-20">
          <ScrollVelocityRow baseVelocity={20} direction={1}>
            Get your portfolio website now,
          </ScrollVelocityRow>
          <ScrollVelocityRow baseVelocity={20} direction={-1}>
            Get your portfolio website now,
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
      <section
        id="work"
        ref={workSectionRef}
        className="flex min-h-screen items-center px-6 py-24"
      >
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
          <div className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
            Our Work
          </div>
          <BeamDiagram />
        </div>
      </section>
    </motion.main>
  )
}
