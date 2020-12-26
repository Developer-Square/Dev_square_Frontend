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
                    <div>
                        <div className="image-cover"></div>
                        {/* <img src="images/bg-images/main-bg-1.jpg" className="smaller-screens img-fluid" alt="Landing"/>
                        <img src="images/main-bg-1.jpg" className="larger-screens img-fluid" alt="Landing"/> */}
                        <CarouselComponent />
                        <div className="landing-inner-text">
                            <div className="d-flex justify-content-center pb-2 pb-xl-4">why <span className="uncover">tecHive ?</span></div>
                            <div className="d-flex text-container">
                            {/* <i className="fa fa-angle-left pl-1 my-auto" aria-hidden="true"></i> */}
                            <p className="pl-1 pr-1 text">We're are complete professionals at what we do making sure that our clients are well informed about every new step we take in their projects. We also deliver quality, well written and maintainable software.</p>
                            {/* <i className="fa fa-angle-right pr-1 my-auto" aria-hidden="true"></i> */}
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