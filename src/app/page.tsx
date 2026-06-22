import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { LanguageProvider } from "@/components/language-provider";
import { Notes } from "@/components/notes";
import { Projects } from "@/components/projects";
import { ScrollExperience } from "@/components/scroll-experience";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <LanguageProvider>
      <ScrollExperience />
      <Header />
      <main id="content" className="page-shell">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Notes />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
