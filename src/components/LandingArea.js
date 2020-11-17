import React, {Fragment} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import './LandingArea.scss'

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
                        <img src="images/rsz_landing-image.webp" className="smaller-screens img-fluid" alt="Landing"/>
                        <img src="images/Landing-image.webp" className="larger-screens img-fluid" alt="Landing"/>
                        <div className="landing-inner-text">
                            <div className="d-flex justify-content-center pb-2 pb-xl-4">why <span className="uncover">Lotus ?</span></div>
                            <div className="d-flex text-container">
                            <i className="fa fa-angle-left pl-1 my-auto" aria-hidden="true"></i>
                            <p className="pl-1 pr-1 text">odio Fusce sed enim erat. Mauris dictum lorem eu tortor porta placerat. Suspendisse ac vestibulum eros. Nulla mi ipsum, consequat commodo condimentum vitae,</p>
                            <i className="fa fa-angle-right pr-1 my-auto" aria-hidden="true"></i>
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