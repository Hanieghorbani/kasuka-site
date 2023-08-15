import "./bootstrap.min.css"
import './App.css'
import Header from './Header/Header';
import About from './About/About';
import Client from "./Client/Client";
import Features from "./Features/Features";
import Service from "./services/Service";
import Cta from "./Cta/Cta";
import Portfolio from "./Portfolio/Portfolio";
import Count from "./Count/Count";
import Testimonials from "./Testimonials/Testimonials";
import Team from "./Team/Team";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
     <Header />
     <About />
     <Client />
     <Features />
     <Service />
     <Cta/>
     <Portfolio/>
     <Count/>
     <Testimonials/>
     <Team/>
     <Contact/>
     <Footer/>

    </div>
  );
}

export default App;
