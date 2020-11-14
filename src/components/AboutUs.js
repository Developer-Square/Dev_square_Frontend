import React, {Fragment} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './About.scss'

function AboutUs() {

    function handleChange(e) {
        const target = e.currentTarget
        const children = e.currentTarget.children
        const icons = children[0].children
        icons[0].classList.toggle('hidden')
        children[1].classList.toggle('hidden')
        target.classList.toggle('show')
        icons[1].classList.toggle('hidden')
    }
    return (
        <Fragment>
            <Container id="aboutus-section">
                <Row>
                    <div className="d-flex flex-column mx-auto">
                    <div className="aboutus-header mx-auto">Lotus</div>
                    <p className="text-center">Lorem ipsum dolor sit amet, consectetur <span>adipiscing elit.</span> Integer sed magna vel velit dignissim luctus eu in urna. Dapibus egestas turpis. </p>
                    </div>
                    <Col xs={12} lg={6}>
                        <div className="aboutus-left-section">
                            <div className="mb-2 pl-1 pr-1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eteu ligula ac nisl volutpat tincidunt. Vestibulum vitae rhoncus odio Fusce sed enim erat. Mauris dictum lorem eu tortor porta placerat. Suspendisse ac vestibulum eros. Nulla mi ipsum, consequat commodo condimentum vitae
                            </div>
                        
                        <div className="desc definition mb-2 show" onClick={handleChange}>
                            <div className="d-flex">
                                <i className="fa fa-plus-circle hidden" aria-hidden="true"></i>
                                <i className="fa fa-minus-circle" aria-hidden="true"></i>
                                <div className="mb-0 text">What is Lotus</div>
                            </div>
                            <p className="answer">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et dolor justo. Phasellus eu ligula ac nisl volutpat tincidunt. Vestibulum vitae rhoncus odio Fusce sed enim erat. Mauris dictum lorem eu tortor porta placerat. Suspendisse ac vestibulum eros.
                            </p>
                        </div>
                        <div className="desc experiences mb-2" onClick={handleChange}>
                            <div className="d-flex">
                                    <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                    <i className="fa fa-minus-circle hidden" aria-hidden="true"></i>
                                    <div className="mb-0 text">Experiences</div>
                            </div>
                            <p className="answer hidden">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et dolor justo. Phasellus eu ligula ac nisl volutpat tincidunt. Vestibulum vitae rhoncus odio Fusce sed enim erat. Mauris dictum lorem eu tortor porta placerat. Suspendisse ac vestibulum eros.
                            </p>
                        </div>
                        <div className="desc learn-more" onClick={handleChange}>
                            <div className="d-flex">
                                        <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                        <i className="fa fa-minus-circle hidden" aria-hidden="true"></i>
                                        <div className="mb-0 text">Learn more</div>
                            </div>
                            <p className="answer hidden">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et dolor justo. Phasellus eu ligula ac nisl volutpat tincidunt. Vestibulum vitae rhoncus odio Fusce sed enim erat. Mauris dictum lorem eu tortor porta placerat. Suspendisse ac vestibulum eros.
                            </p>
                        </div>
                        </div>
                    </Col>
                    <Col xs={12} lg={6}>
                        <div className="aboutus-right-section">
                            <div className="image-container">
                                <img src="images/rsz_left-pic.png" className="medium-sm-screens left img-fluid" alt="left"/>
                                <img src="images/rsz_left-pic_992px.png" className="medium-lg-screens left img-fluid" alt="left"/>
                                {/* <img src="images/left-pic.png" className="medium-lg-screens left img-fluid" alt="left"/> */}
                                <img src="images/rsz_hexagonal-shape.png" className="medium-sm-screens hex img-fluid"alt="hex"/>
                                <img src="images/rsz_hexagonal-shape_992px.png" className="medium-lg-screens hex img-fluid"alt="hex"/>
                                {/* <img src="images/hexagonal-shape.png" className="medium-lg-screens hex img-fluid"alt="hex"/> */}
                                <img src="images/rsz_middle-pic.png" className="medium-sm-screens middle img-fluid"alt="middle"/>
                                <img src="images/rsz_middle-pic_992px.png" className="medium-lg-screens middle img-fluid"alt="middle"/>
                                {/* <img src="images/middle-pic.png" className="medium-lg-screens middle img-fluid"alt="middle"/> */}
                                <img src="images/rsz_hexagonal-shape.png" className="medium-sm-screens hex-2 img-fluid"alt="hex"/>
                                <img src="images/rsz_hexagonal-shape_992px.png" className="medium-lg-screens hex-2 img-fluid"alt="hex"/>
                                {/* <img src="images/hexagonal-shape.png" className="medium-lg-screens hex-2 img-fluid"alt="hex"/> */}
                                <img src="images/rsz_right-pic.png" className="medium-sm-screens right img-fluid" alt="right"/>
                                <img src="images/rsz_right-pic_992px.png" className="medium-lg-screens right img-fluid" alt="right"/>
                                {/* <img src="images/right-pic.png" className="medium-lg-screens right img-fluid" alt="right"/> */}
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="scroll-bar mx-auto">
                            <img src="images/rsz_scroll-dot.png" className="scroll-dot img-fluid" alt="scroll" />
                        </div>
                        <div className="aboutus-logos">
                            <Row>
                                <Col xs={12} sm={6} lg={3} className="mb-2 mb-sm-3">
                                    <div className="flat-design">
                                        <div className="flat-design-image d-flex justify-content-center">
                                            <img src="images/Flat-design-image.png" alt="Icon" className=" img-fluid"/>
                                            <img src="images/love.png" alt="Icon" className="love-image
                                            img-fluid"/>
                                        </div>
                                        <div className="inner-text">FLAT DESIGN</div>
                                        <p>
                                            Lorem ipsum dolor sit amet cras vitae sodales ac nec prellentesque vivamus eget mauris fusce sit amet
                                        </p>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} lg={3} className="mb-2 mb-sm-3">
                                    <div className="retina">
                                        <div className="retina-image d-flex justify-content-center">
                                            <img src="images/Retina.png" alt="Icon" className="img-fluid"/>
                                            <img src="images/Retina-icon.png" alt="Icon" className="retina-icon img-fluid"/>
                                        </div>
                                        <div className="inner-text">RETINA READY</div>
                                        <p>
                                            Lorem ipsum dolor sit amet cras vitae sodales ac nec prellentesque vivamus eget mauris fusce sit amet
                                        </p>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} lg={3} className="mb-2 mb-sm-3">
                                    <div className="responsive">
                                        <div className="responsive-image d-flex justify-content-center">
                                            <img src="images/Retina.png" alt="Icon" className="img-fluid"/>
                                            <img src="images/Responsive.png" alt="Icon" className="Responsive img-fluid"/>
                                        </div>
                                        <div className="inner-text">RESPONSIVE</div>
                                        <p>
                                            Lorem ipsum dolor sit amet cras vitae sodales ac nec prellentesque vivamus eget mauris fusce sit amet
                                        </p>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} lg={3} className="mb-2 mb-sm-3">
                                    <div className="clean">
                                        <div className="clean-image d-flex justify-content-center">
                                            <img src="images/Retina.png" alt="Icon" className="img-fluid"/>
                                            <img src="images/clean&useful.png" alt="Icon" className="clean img-fluid"/>
                                        </div>
                                        <div className="inner-text">CLEAN & USEFUL</div>
                                        <p>
                                            Lorem ipsum dolor sit amet cras vitae sodales ac nec prellentesque vivamus eget mauris fusce sit amet
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default AboutUs;