import "./App.css"
import Nav from "./Nav"
import Hero from "./Hero";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import About from "./About";
import Highlights from "./Highlights";
function App() {
  return (
    <div className="container">
    {/* <main class="grid grid-rows-6 "  > */}
     <Nav />
     <Hero />
     <Highlights />
     <Testimonials/>
     <About/>
     <Footer />
     {/* </main> */}
     </div>
  );

}


export default App;
