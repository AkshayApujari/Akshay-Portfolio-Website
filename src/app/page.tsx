import Hero from '@/components/Hero'
import Resume from '@/components/Resume'
import ProjectsFixed from '@/components/ProjectsFixed'
import Skills from '@/components/Skills'
import ContactFixed from '@/components/ContactFixed'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Resume />
      <ProjectsFixed />
      <Skills />
      <ContactFixed />
    </main>
  )
}