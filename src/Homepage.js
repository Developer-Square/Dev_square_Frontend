import React, {Fragment} from 'react'

//Own Components
import Header from './components/Header'
import LandingArea from './components/LandingArea'
import AboutUs from './components/AboutUs'
import Portfolio from './components/Portfolio'
import ProductFeatures from './components/ProductFeatures'
import Client from './components/Client'
import Team from './components/Team'
import ServicesAndBlog from './components/ServicesAndBlog'
import ContactAndFooter from './components/ContactAndFooter'

function Homepage() {
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