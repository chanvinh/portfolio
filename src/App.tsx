import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Home } from "@/components/sections/home";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

const sectionIds = ["home", "about", "experience", "contact"];

export default function App() {
  const activeSection = useScrollSpy(sectionIds);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header activeSection={activeSection} />

      <main>
        <Home />
        <About />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
