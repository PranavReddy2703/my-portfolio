import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";

// Font Imports
import '@fontsource/plus-jakarta-sans/500.css';
import '@fontsource/plus-jakarta-sans/700.css';
import '@fontsource/plus-jakarta-sans/800.css';

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden scroll-smooth bg-[#05060A] font-jakarta text-white">
      {/* 
        REMOVED THE GLOBAL BUBBLES entirely so they don't 
        interfere with your perfectly tuned section bubbles.
      */}
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;