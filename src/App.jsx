import About from "./Components/About";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import { ThemeProvider } from "./Context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <header className="bg-linear-to-br dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 from-blue-50 via-white to-green-50 min-h-screen flex items-center justify-center">
        <Navbar />
        <Hero />
      </header>
      <About />
      <Skills />
    </ThemeProvider>
  );
}

export default App;
