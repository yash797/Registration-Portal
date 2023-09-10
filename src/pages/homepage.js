import './styles/homepage.css';
import Hero from '../components/hero'
// import WhyPCSB from "../components/whyPCSB";
import WhyPCSB from "../components/whyPCSBnew";

import Testim from "../components/testimonials";
import Footer from '../components/footer';

function Homepage() {
    return (
      <div className="homepage">
        {/* <title>PCSB FE REGISTRATION</title> */}

        <Hero />

        <WhyPCSB />


        <Testim/>
        <Footer/>
      </div>
    );
}

export default Homepage;