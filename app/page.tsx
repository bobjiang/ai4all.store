import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProblemOutcome from '@/components/ProblemOutcome'
import CourseSnapshot from '@/components/CourseSnapshot'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ProblemOutcome />
      <CourseSnapshot />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
