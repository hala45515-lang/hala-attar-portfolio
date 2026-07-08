import { Preloader } from './components/layout/Preloader'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Process } from './components/sections/Process'
import { Projects } from './components/sections/Projects'
import { Testimonials } from './components/sections/Testimonials'
import { Contact } from './components/sections/Contact'
import { useLenis } from './hooks/useLenis'

function App() {
  useLenis()

  return (
    <>
      <Preloader />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Process />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
