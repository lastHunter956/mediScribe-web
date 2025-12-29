import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesGrid } from "@/components/features-grid"
import { AppShowcase } from "@/components/app-showcase"
import { WaitlistSection } from "@/components/waitlist-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Navbar />
      <HeroSection />
      <FeaturesGrid />
      <section id="app-showcase">
        <AppShowcase />
      </section>
      <WaitlistSection />
      <Footer />
    </main>
  )
}
