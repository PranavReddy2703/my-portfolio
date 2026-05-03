import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";

// Font Imports
import '@fontsource/plus-jakarta-sans/500.css';
import '@fontsource/plus-jakarta-sans/700.css';
import '@fontsource/plus-jakarta-sans/800.css';
import Skills from "./components/sections/Skills";

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden scroll-smooth bg-[#05060A] font-jakarta text-white">
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
      </main>
    </div>
  );
}

export default App;