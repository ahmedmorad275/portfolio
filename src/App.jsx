import { lazy, Suspense } from "react";
import Navbar from "./Components/Navbar";
import { ThemeProvider } from "./Context/ThemeContext";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

// Lazy load components
const Hero = lazy(() => import("./Components/Hero"));
const About = lazy(() => import("./Components/About"));
const Skills = lazy(() => import("./Components/Skills"));
const Projects = lazy(() => import("./Components/Projects"));
const Contact = lazy(() => import("./Components/Contact"));

function App() {
  return (
    <ThemeProvider>
      <header className="flex min-h-screen items-center justify-center bg-linear-to-br from-blue-50 via-white to-green-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
        <Navbar />
        <Suspense
          fallback={
            <div className="flex min-h-screen items-center justify-center">
              <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-blue-600"></div>
            </div>
          }
        >
          <Hero />
        </Suspense>
      </header>
      <Suspense
        fallback={
          <div className="flex items-center justify-center py-20">
            <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-blue-600"></div>
          </div>
        }
      >
        <About />
      </Suspense>
      <Suspense
        fallback={
          <div className="flex items-center justify-center py-20">
            <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-blue-600"></div>
          </div>
        }
      >
        <Skills />
      </Suspense>
      <Suspense
        fallback={
          <div className="flex items-center justify-center py-20">
            <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-blue-600"></div>
          </div>
        }
      >
        <Projects />
      </Suspense>
      <Suspense
        fallback={
          <div className="flex items-center justify-center py-20">
            <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-blue-600"></div>
          </div>
        }
      >
        <Contact />
      </Suspense>
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  );
}

export default App;
