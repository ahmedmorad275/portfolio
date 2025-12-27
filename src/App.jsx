import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import { ThemeProvider } from "./Context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <header className="dark:bg-slate-900 bg-slate-50 min-h-screen flex items-center justify-center">
        <Navbar />
        <Hero />
      </header>
    </ThemeProvider>
  );
}

export default App;
