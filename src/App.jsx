import Navbar from "@/layout/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Experiences from "@/sections/Experiences";
// import  Testimoinals  from "@/sections/Testimonials";
// import  Contact  from "@/sections/Contact";
const App = () => {
  return (
    <div className=" min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        {/* <Experiences />  */}
        {/* <Testimoinals /> */}
        {/* <Contact /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
