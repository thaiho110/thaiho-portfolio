
import { About } from "../components/about";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import { HeroSection } from "../components/hero-section";
import { NavBar } from "../components/navbar";
import { Project } from "../components/project";
import { Skill } from "../components/skill";
import { StarBackground } from "../components/star-background";
import { ThemeToggle } from "../components/theme-toggle";

export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
    {/* Theme Toggle */}
    <ThemeToggle />

    {/* Background Animation */}
    <StarBackground />

    {/* Navigation */}
    <NavBar/>
    {/* Main Content */}
    <main className="pt-2">
    <HeroSection />
    <About/>
    <Skill/>
    <Project/>
    <Contact/>
    </main>
    {/* Footer */}
    <Footer/>
    </div>
  );
}