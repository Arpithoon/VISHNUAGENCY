import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/hero";
import { Services } from "./components/sections/services";
import Process from "./components/sections/process/Process";
import Contact from "./components/sections/contact/Contact";
import Footer from "./components/layout/Footer/Footer";
import About from "./components/sections/about/About";
import FAQ from "./components/sections/faq/FAQ";

function App() {
  return (
    <div className="app">

      {/* =====================================================
          NAVBAR
          ===================================================== */}
      <Navbar />

      {/* =====================================================
          HERO
          ===================================================== */}
      <main>

        <Hero />

        {/* ===================================================
            SERVICES
            =================================================== */}
        <Services />

        {/* ===================================================
            PROCESS
            =================================================== */}
        <Process />

        {/* ===================================================
            ABOUT
            =================================================== */}
        <About />

        {/* ===================================================
            FAQ
            =================================================== */}
        <FAQ />

        {/* ===================================================
            START A CASE / CONTACT
            Navbar -> <div id="contact"></div>
            =================================================== */}
        <Contact />

      </main>

      {/* =====================================================
          FOOTER
          ===================================================== */}
      <Footer />

    </div>
  );
}

export default App;