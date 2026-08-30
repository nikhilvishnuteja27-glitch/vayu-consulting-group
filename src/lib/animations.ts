import type { Variants } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: EASE },
  }),
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, delay: i * 0.08, ease: 'easeOut' },
  }),
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

export const lineReveal: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.2, ease: EASE },
  },
}

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: EASE },
  }),
}

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: EASE },
  }),
}

// ─── Diagram motion primitives ────────────────────────────────────────────────
// Semantic variants for NODE and PATH elements in VCG execution diagrams.
// These are deliberately distinct from fadeUp — diagram motion is architectural,
// not editorial. Individual diagrams own inView triggering and narrative timing.

export const nodeReveal: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.45, ease: EASE },
  },
}

export const pathDraw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: EASE },
  },
}
