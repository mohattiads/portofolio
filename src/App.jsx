import Sidenav from "./compo/Sidenav";
import Main from "./compo/Main";
import Header from "./Header";
import Work from "./compo/Work";
import Projects from "./compo/Projects";
import Contact from "./compo/Contact";
import Footer from "./compo/Footer";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {

  return (
     <HelmetProvider>
     <Helmet>
        <title>Mohamed Attia</title>
        <link rel="description" href="Welcome to my Portofolio" />
      </Helmet>
    <div     >

      <Sidenav />
      <Main />
      <Work />
      <Projects />
      <Contact/>
      <Footer/>
    </div>
    </HelmetProvider>
  );
}

export default App;
