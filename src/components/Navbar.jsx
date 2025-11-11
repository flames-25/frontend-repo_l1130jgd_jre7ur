import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function Navbar() {
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 200], [0.0, 0.9])
  const scaleLogo = useTransform(scrollY, [0, 200], [1, 0.9])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const menuItems = ['Features', 'Showcase', 'Statistics', 'Pricing', 'Testimonials']

  return (
    <motion.nav
      style={{ backgroundColor: `rgba(10,14,39,${bgOpacity.get?.() ?? 0})` }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-2xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.a
            href="#top"
            style={{ scale: scaleLogo }}
            className="flex items-center gap-2"
          >
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg" />
            <span className="text-white/90 font-semibold tracking-wide">Luxora</span>
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="relative group text-sm text-white/80 hover:text-white transition">
                <span className="pb-1">
                  {item}
                </span>
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a href="#cta" className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-900 font-semibold shadow-lg hover:shadow-cyan-500/30 transition-transform hover:scale-[1.02]">
              Get Started
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white/90" aria-label="Menu">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur-2xl">
          <div className="px-6 py-4 space-y-3">
            {menuItems.map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
                className="block text-white/90"
              >
                {item}
              </motion.a>
            ))}
            <a href="#cta" onClick={() => setOpen(false)} className="inline-flex px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-900 font-semibold shadow-lg">
              Get Started
            </a>
          </div>
        </div>
      )}
    </motion.nav>
  )
}

export default Navbar
