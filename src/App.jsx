import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <header className="bg-slate-900 min-h-screen flex items-center justify-center">
        <Navbar />
        <Hero />
      </header>
    </>
  );
}

export default App;
