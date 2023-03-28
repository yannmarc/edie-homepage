import Designs from "./components/Designs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Quotes from "./components/Quotes";
import Section from "./components/Section";
import Team from "./components/Team";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Section />
      <Designs />
      <Team />
      <Quotes />
      <Footer />
    </>
  );
}

export default App;
