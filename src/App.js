import { useState, useEffect } from 'react';
import About from './sections/about';
import Highlights from './sections/highlights';
import Education from './sections/education';
import Teaching from './sections/teaching';
import Publications from './sections/publications';
import Skills from './sections/skills';
import Experiences from './sections/experiences';

const navItems = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "teaching", label: "Teaching" },
  { id: "publications", label: "Publications" },
  { id: "skills", label: "Skills" },
  { id: "experiences", label: "Experience" },
  { id: "highlights", label: "Recent" },
];

const App = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observers = [];

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          },
          { root: null, rootMargin: "-20% 0px -60% 0px", threshold: 0 }
        );
        observer.observe(el);
        observers.push(observer);
      }
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App min-h-screen bg-background text-textPrimary">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
          <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="text-lg font-bold text-textPrimary hover:text-accentTeal transition">
            an
          </a>
          <div className="flex flex-wrap justify-end gap-1">
            {navItems.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleScroll(e, id)}
                className={`px-3 py-1.5 rounded-full text-sm transition-all duration-200
                  ${activeSection === id
                    ? "bg-accentTeal text-white font-semibold"
                    : "text-textSecondary hover:text-textPrimary hover:bg-gray-100"
                  }`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <About />
        <Education />
        <Teaching />
        <Publications />
        <Skills />
        <Experiences />
        <Highlights />
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-6 text-center text-sm text-textSecondary">
        Avina Nakarmi &middot; {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;
