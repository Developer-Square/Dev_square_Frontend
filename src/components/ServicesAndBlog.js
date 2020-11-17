import React, {Fragment} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './ServicesAndBlog.scss'

function ServicesAndBlog() {
    return (
        <Fragment>
            <Container id="services-section">
                <Row>
                    <Col xs={12} className="services">
                        <div className="heading text-center">our <span>services</span></div>
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur <span>adipiscing elit.</span> Integer sed magna vel velit dignissim luctus eu in urna. Dapibus egestas turpis. 
                        </p>
                        <Row className="limit mx-auto">
                            <Col xs={12} sm={6} className="service-container">
                                <div className="service-title d-flex justify-content-center">
                                    <img src="images/services-shape-1.webp" alt="services" className="img-fluid"/>
                                    <img src="images/services-icon-1.webp" alt="services" className="service-icon img-fluid"/>
                                    <p className="title my-auto">dEVELOPMENT</p>
                                </div>
                                <div className="inner-content-dev p-3">
                                    Lorem ipsum dolor sit amet cras vitae sodales ac nec prellentesque vivamus eget mauris fusce sit amet Lorem ipsum dolor sit amet cras vitae sodales ac nec prellentesque vivamus eget mauris fusce sit amet
                                </div>
                            </Col>
                            <Col xs={12} sm={6} className="service-container">
                                <div className="service-title d-flex justify-content-center">
                                    <img src="images/services-shape-2.webp" alt="services" className="img-fluid"/>
                                    <img src="images/services-icon-2.webp" alt="services" className="service-icon-html img-fluid"/>
                                    <p className="title my-auto">HTML/CSS</p>
                                </div>
                                <div className="inner-content p-3">
                                    Lorem ipsum dolor sit amet cras vitae sodales ac nec prellentesque vivamus eget mauris fusce sit amet Lorem ipsum dolor sit amet cras vitae sodales ac nec prellentesque vivamus eget mauris fusce sit amet
                                </div>
                            </Col>
                            <Col xs={12} sm={6} className="service-container">
                                <div className="service-title d-flex justify-content-center">
                                    <img src="images/services-shape-2.webp" alt="services" className="img-fluid"/>
                                    <img src="images/services-icon-3.webp" alt="services" className="service-icon-word img-fluid"/>
                                    <p className="title my-auto">WORDPRESS</p>
                                </div>
                                <div className="inner-content p-3">
                                    Lorem ipsum dolor sit amet cras vitae sodales ac nec prellentesque vivamus eget mauris fusce sit amet Lorem ipsum dolor sit amet cras vitae sodales ac nec prellentesque vivamus eget mauris fusce sit amet
                                </div>
                            </Col>
                            <Col xs={12} sm={6} className="service-container">
                                <div className="service-title d-flex justify-content-center">
                                    <img src="images/services-shape-2.webp" alt="services" className="img-fluid"/>
                                    <img src="images/services-icon-4.webp" alt="services" className="service-icon-app img-fluid"/>
                                    <p className="title my-auto">APPLICATIONS</p>
                                </div>
                                <div className="inner-content p-3">
                                    Lorem ipsum dolor sit amet cras vitae sodales ac nec prellentesque vivamus eget mauris fusce sit amet Lorem ipsum dolor sit amet cras vitae sodales ac nec prellentesque vivamus eget mauris fusce sit amet
                                </div>
                            </Col>
                            <Col xs={12} sm={6} className="service-container">
                                <div className="service-title d-flex justify-content-center">
                                    <img src="images/services-shape-2.webp" alt="services" className="img-fluid"/>
                                    <img src="images/services-icon-5.webp" alt="services" className="service-icon-ui img-fluid"/>
                                    <p className="title my-auto">UI/UX DESIGN</p>
                                </div>
                                <div className="inner-content p-3">
                                    Lorem ipsum dolor sit amet cras vitae sodales ac nec prellentesque vivamus eget mauris fusce sit amet Lorem ipsum dolor sit amet cras vitae sodales ac nec prellentesque vivamus eget mauris fusce sit amet
                                </div>
                            </Col>
                            <Col xs={12} sm={6} className="service-container">
                                <div className="service-title d-flex justify-content-center">
                                    <img src="images/services-shape-2.webp" alt="services" className="img-fluid"/>
                                    <img src="images/services-icon-6.webp" alt="services" className="service-icon-responsive img-fluid"/>
                                    <p className="title my-auto">RESPONSIVE LAYOUT</p>
                                </div>
                                <div className="inner-content p-3">
                                    Lorem ipsum dolor sit amet cras vitae sodales ac nec prellentesque vivamus eget mauris fusce sit amet Lorem ipsum dolor sit amet cras vitae sodales ac nec prellentesque vivamus eget mauris fusce sit amet
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12}>
                    <div className="scroll-bar services-bar mt-2 mx-auto">
                        <img src="images/rsz_scroll-bar.webp" className="scroll-dot img-fluid" alt="scroll" />
                    </div>
                    </Col>
                    <Col xs={12} id="blog-section" className="blog">
                        <div>
                            {/* <img src="images/rsz_blog.webp" alt="Blog" className="img-fluid"/> */}
                            <div className="heading text-center">Follow <span>Lotus</span></div>  
                            <div className="d-md-flex justify-content-around blog-icons mx-auto">   
                                <div className="blog-container d-flex flex-column justify-content-center">
                                    <img src="images/follow-1.webp" alt="Follow" className="img-fluid mx-auto"/>  
                                    <p className="text-center pt-2">1.3k Followers</p>  
                                </div>   
                                <div className="blog-container d-flex flex-column justify-content-center">
                                    <img src="images/follow-2.webp" alt="Follow" className="img-fluid mx-auto"/>  
                                    <p className="text-center pt-2">577k Followers</p>  
                                </div>   
                                <div className="blog-container d-flex flex-column justify-content-center">
                                    <img src="images/follow-3.webp" alt="Follow" className="img-fluid mx-auto"/>  
                                    <p className="text-center pt-2">400k Followers</p>  
                                </div>   
                                <div className="blog-container d-flex flex-column justify-content-center">
                                    <img src="images/follow-4.webp" alt="Follow" className="img-fluid mx-auto"/>  
                                    <p className="text-center pt-2">3.4k Followers</p>  
                                </div>             
                            </div>          
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default ServicesAndBlog;