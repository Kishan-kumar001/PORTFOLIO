import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Publication from "./components/Publication";
// import Education from "./components/Education";

const App = () => {
  return (
    <>
      <div className="fixed min-h-screen w-full -z-10 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Navbar />
        <Hero />
        {/* <Education /> */}
        <Tech />
        <Projects />
        <Publication />
        <Contact />
      </main>
    </>
  );
};

export default App;
