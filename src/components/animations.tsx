'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

const ease = [0.22, 1, 0.36, 1] as const

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
  className?: string
}

export function FadeIn({ children, delay = 0, direction = 'up', className }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })
  const offset =
    direction === 'up' ? { y: 28 }
    : direction === 'left' ? { x: -28 }
    : direction === 'right' ? { x: 28 }
    : {}

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offset }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

// Stagger is now a plain layout wrapper — each StaggerItem manages its own scroll trigger
export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>
}

// Subtle atmospheric particles for section backgrounds — reuses hero-drift-* keyframes
export function SectionParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden>
      <div
        className="absolute w-80 h-80 rounded-full blur-3xl bg-sky-800/10"
        style={{ top: '-8%', left: '-6%', animation: 'hero-drift-a 16s ease-in-out infinite' }}
      />
      <div
        className="absolute w-60 h-60 rounded-full blur-3xl bg-cyan-800/8"
        style={{ bottom: '5%', right: '-4%', animation: 'hero-drift-b 20s ease-in-out infinite 3s' }}
      />
      <div
        className="absolute w-44 h-44 rounded-full blur-2xl bg-sky-700/6"
        style={{ top: '45%', right: '18%', animation: 'hero-drift-c 24s ease-in-out infinite 1.5s' }}
      />
    </div>
  )
}

export function StaggerItem({
  children,
  className,
  index = 0,
}: {
  children: ReactNode
  className?: string
  index?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px 0px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease, delay: index * 0.08 }}
    >
      {children}
    </motion.div>
  )
}
