import Footer from "./components/footer";
import Clients from "./components/Clients";
import { useState } from "react";
import ProjectForm from "./components/ProjectForm";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Manifesto from "./components/Manifesto";
import Packages from "./components/Packages";

function App() {
  const [selectedVideos, setSelectedVideos] = useState(10);
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Manifesto />
        <Packages onRequest={setSelectedVideos} />
        <Clients />
        <ProjectForm videoCount={selectedVideos} />
        <Footer />
      </main>
    </>
  );
}

export default App;
