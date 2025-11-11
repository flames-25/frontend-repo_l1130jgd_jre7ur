import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Section, FeaturesGrid, Stats, CTA } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-[#0A0E27] text-white relative">
      <Navbar />
      <Hero />

      <Section id="features" title="Features" bg="">
        <FeaturesGrid />
      </Section>

      <Section id="statistics" title="Statistics">
        <Stats />
      </Section>

      <Section id="cta" title="Experience Excellence">
        <CTA />
      </Section>

      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6 text-white/70">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 mb-3" />
              <p className="max-w-sm">Ultra-premium digital craftsmanship. Minimal, futuristic, and obsessively refined.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Company</h4>
              <ul className="space-y-1 text-sm">
                <li><a className="hover:text-white" href="#">About</a></li>
                <li><a className="hover:text-white" href="#">Careers</a></li>
                <li><a className="hover:text-white" href="#">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Resources</h4>
              <ul className="space-y-1 text-sm">
                <li><a className="hover:text-white" href="#">Docs</a></li>
                <li><a className="hover:text-white" href="#">Support</a></li>
                <li><a className="hover:text-white" href="#">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} Luxora. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
