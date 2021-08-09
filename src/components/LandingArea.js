import React, {Fragment} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

//Own Components
import './LandingArea.scss'
import CarouselComponent from './Reusable Components/CarouselComponent'

function LandingArea() {

    function scrollFunction(id, top) {
        let offsetTop = document.getElementById(`${id}`).offsetTop
        console.log(offsetTop)
        window.scrollTo({
            top: offsetTop - top,
            behavior: 'smooth'
        })
    }
    return (
        <Fragment>
            <Container id="landing-section">
                <Row>
                    <div className="landing-container">
                        <div className="image-cover"></div>
                        <CarouselComponent placed="landingArea" />
                        <div className="landing-inner-text">
                            <div className="d-flex justify-content-center pb-2 pb-xl-4">why <span className="uncover">tecHive ?</span></div>
                            <div className="d-flex text-container">
                            <p className="pl-1 pr-1 text">We're are a team of professionals dedicated in delivering quality and providing desirable web and app development services.</p>
                        </div>
                        </div>
                    </div>
                    <div className="landing-inner d-flex flex-column mx-auto">
                        <button className="btn feature" onClick={() => scrollFunction('product-section', 65)}>FEATURES</button>
                        <button className="btn portfolio-btn" onClick={() => scrollFunction('portfolio-section', 75)}>PORTFOLIO</button>
                    </div>
                </Row>
            </Container>
        </Fragment>
    )
}

export default LandingArea;