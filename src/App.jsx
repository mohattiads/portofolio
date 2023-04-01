import Sidenav from "./compo/Sidenav";
import Main from "./compo/Main";
import Header from "./Header";
import Work from "./compo/Work";
import Projects from "./compo/Projects";
import { useState } from "react";
import Contact from "./compo/Contact";
import Footer from "./compo/Footer";
function App() {


  return (
    <div     >
      <Sidenav />
      <Main />
      <Work />
      <Projects />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
