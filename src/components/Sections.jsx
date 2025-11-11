import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function Section({ id, title, children, bg = 'transparent' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-20% 0px -20% 0px', once: true })

  return (
    <section id={id} ref={ref} className={`relative py-24 sm:py-32 ${bg}`}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl font-bold text-white mb-10"
        >
          {title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}

function FeaturesGrid() {
  const items = [
    { title: 'Glassmorphism', desc: 'Refined translucent surfaces with depth and elegance.' },
    { title: '3D Interactions', desc: 'Immersive hero powered by Spline for tactile presence.' },
    { title: 'Motion Design', desc: 'Framer Motion sequences at 60fps for fluidity.' },
    { title: 'Premium Typography', desc: 'Fluid type scales and luxury-focused hierarchy.' },
    { title: 'Accessibility', desc: 'WCAG-compliant patterns and keyboard-first navigation.' },
    { title: 'Performance', desc: 'Lazy loading, code splitting, and GPU-accelerated transforms.' }
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20, rotateX: -6 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.7, delay: i * 0.05 }}
          className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-xl"
          style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
        >
          <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-br from-cyan-400/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition" />
          <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
          <p className="text-white/70">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  )
}

function Stats() {
  const stats = [
    { label: 'Projects', value: 128 },
    { label: 'Uptime', value: 99.99, suffix: '%' },
    { label: 'Performance', value: 100, suffix: '/100' },
    { label: 'Clients', value: 47 }
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl text-center"
        >
          <motion.div
            initial={{
              '--n': 0
            }}
            whileInView={{
              '--n': s.value
            }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-white"
            style={{
              fontVariantNumeric: 'tabular-nums',
              counterSet: 'num var(--n)'
            }}
          >
            {typeof s.value === 'number' ? s.value : s.value}
            {s.suffix || ''}
          </motion.div>
          <div className="mt-2 text-white/70">{s.label}</div>
        </motion.div>
      ))}
    </div>
  )
}

function CTA() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-500/20 to-blue-700/20 p-10">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_60%_at_80%_10%,rgba(255,255,255,0.1),transparent_70%)]" />
      <div className="relative">
        <h3 className="text-2xl sm:text-4xl font-bold text-white">Ready to launch a premium experience?</h3>
        <p className="mt-3 text-white/80 max-w-2xl">Partner with us to craft an ultra-luxury interface that captivates, converts, and endures.</p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href="#" className="px-6 py-3 rounded-full text-slate-900 font-semibold bg-gradient-to-r from-cyan-400 to-blue-600 shadow-xl hover:shadow-cyan-500/40 transition-transform hover:scale-[1.02]">Start Your Project</a>
          <a href="#" className="px-6 py-3 rounded-full border border-white/20 text-white/90 hover:bg-white/10">View Showcase</a>
        </div>
      </div>
    </div>
  )
}

export { Section, FeaturesGrid, Stats, CTA }
