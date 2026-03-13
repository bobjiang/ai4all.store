import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ValueProposition from '@/components/ValueProposition'
import CourseTiers from '@/components/CourseTiers'
import SyllabusComparison from '@/components/SyllabusComparison'
import WhoIsThisFor from '@/components/WhoIsThisFor'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ValueProposition />
      <CourseTiers />
      <SyllabusComparison />
      <WhoIsThisFor />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
