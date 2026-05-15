import Navigation from "@/components/sections/Navigation"
import Hero from "@/components/sections/Hero"
import Services from "@/components/sections/Services"
import HowIWork from "@/components/sections/HowIWork"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <HowIWork />
      </main>
    </>
  )
}
