import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import GitHubActivity from './components/GitHubActivity';
import ResumeView from './components/ResumeView';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChatBot from './components/AIChatBot';
import FloatingHireMe from './components/FloatingHireMe';

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col">
      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <GitHubActivity />
      <ResumeView />
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Floating Recruiter Widgets */}
      <AIChatBot />
      <FloatingHireMe />
    </main>
  );
}
