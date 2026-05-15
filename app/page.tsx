import Navigation from "@/components/sections/Navigation"
import Hero from "@/components/sections/Hero"
import Services from "@/components/sections/Services"
import HowIWork from "@/components/sections/HowIWork"
import CaseStudies from "@/components/sections/CaseStudies"
import About from "@/components/sections/About"
import TechBadges from "@/components/sections/TechBadges"
import ContactForm from "@/components/sections/ContactForm"
import Footer from "@/components/sections/Footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <HowIWork />
        <CaseStudies />
        <About />
        <TechBadges />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
