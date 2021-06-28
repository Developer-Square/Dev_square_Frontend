import React, {Fragment, useEffect} from 'react'

//Own Components
import Header from './components/Header/Header'
import LandingArea from './components/LandingArea'
import AboutUs from './components/About/AboutUs'
import Portfolio from './components/Portfolio'
import ProductFeatures from './components/ProductFeatures'
import Client from './components/Client'
import Team from './components/Team'
import ServicesAndBlog from './components/ServicesAndBlog'
import ContactAndFooter from './components/ContactAndFooter'

function Homepage() {
    // <script defer data-key="" src=""></script>
    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "https://widget.tochat.be/bundle.js";
        script.defer = true;
        script.setAttribute("data-key", "395517fa-9491-40ad-a63a-636f293f0f3e");
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
      }, []);

    return (
        <Fragment>
            <Header />
            <LandingArea />
            <AboutUs />
            <Portfolio />
            <ProductFeatures />
            <ServicesAndBlog />
            <Team />
            <Client />
            <ContactAndFooter />
        </Fragment>
    )
}

export default Homepage;