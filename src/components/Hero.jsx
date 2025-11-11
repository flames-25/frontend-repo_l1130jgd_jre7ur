import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const gradientOverlay = (
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_20%,rgba(0,240,255,0.25),transparent_60%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_80%_10%,rgba(77,116,255,0.2),transparent_60%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(30%_30%_at_10%_80%,rgba(212,175,55,0.15),transparent_60%)]" />
    <div className="absolute inset-0 mix-blend-overlay opacity-30" style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }} />
  </div>
)

function Hero() {
  useEffect(() => {
    const handleWheel = (e) => {
      if (window.scrollY < window.innerHeight * 0.8 && Math.abs(e.deltaY) > 2) {
        e.preventDefault()
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
      }
    }
    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [])

  return (
    <section id="top" className="relative h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0" style={{ width: '100%', height: '100%' }}>
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {gradientOverlay}

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white"
          >
            Elevate Your Presence
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="mt-6 max-w-2xl text-lg sm:text-xl text-white/80"
          >
            A luxury-grade digital experience blending futuristic minimalism, interactive 3D, and premium micro‑interactions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: 'easeOut' }}
            className="mt-10 flex items-center gap-4"
          >
            <a href="#cta" className="relative inline-flex items-center justify-center px-6 py-3 rounded-full text-slate-900 font-semibold bg-gradient-to-r from-cyan-400 to-blue-600 shadow-xl hover:shadow-cyan-500/40 transition-transform hover:scale-[1.02]">
              Get Started
              <span className="absolute inset-0 rounded-full ring-2 ring-white/20" />
            </a>
            <a href="#features" className="text-white/80 hover:text-white">Explore Features</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="text-xs uppercase tracking-widest">Scroll</div>
              <div className="h-8 w-4 rounded-full border border-white/30 flex items-start justify-center p-1">
                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-white"
                  animate={{ y: [0, 16, 0], opacity: [1, 0.5, 1] }}
                  transition={{ repeat: Infinity, duration: 1.8 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
