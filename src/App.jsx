import Navbar from './components/Navbar';
import Experience from './sections/Experience';
import Home from './sections/Home';
import  {Projects}  from './sections/Projects';
import Work from './sections/Works';

function App() {
  return (
    <>
      {/* Fixed Navbar */}
      <Navbar />
      
        <section id="home">
          <Home />
        </section>
        <section id="work">
          <Work />
        </section>
        <section id="skills">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
     
    </>
  );
}

export default App;
