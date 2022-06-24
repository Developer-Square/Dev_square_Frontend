import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ServiceItem from './ServiceItem';

import './ServicesAndBlog.scss'

function ServicesAndBlog() {
    const images = [["services-shape-2", "images/assets/icons/Ecommerce-2.png"], ["services-shape-2", "images/assets/icons/Strategy.png"], ["services-shape-2","images/assets/icons/Web3.png"], ["services-shape-2","images/assets/icons/Software development.png"]];
    
    const titles = ["E-Commerce Development", "Building in WEB3", "Strategy", "Custom Software Development"];
    
    const descriptions = [
        "We develop custom E-Commerce systems to allow your business to expand and have an online presence. We also provide guidance depending on the site you want to build and the type of business you're running.\n We also have tracking tools that can help you get some insights on how many customers are visiting your site, the pages they visited etc.",
        "We are also builders in the Web3 space, we build sites that can help you mint nfts, sites that can track trends in the nft space like highest traded nfts in terms of volume and any other custom solution",
        "Strategy is part of who we are and we included with every client interaction. We've a 3 step process that we go through so as to ensure we understand your idea and how your want to implement it. You could also hire us just to do strategy for a project, at the end you get a complete breakdown of your project(price and time estimates).",
        "We also build custom software depending on your specifications and what we discuss in the strategy session."
    ];
    
    const descClassNames  = ["inner-content-dev", "inner-content", "inner-content", "inner-content"];
    
    const imgClassNames = ["service-icon", "service-icon-html", "service-icon-word", "service-icon-word"] //13 check afterwards
    

    return (
        <Fragment>
            <Container id="services-section">
                <Row>
                    <Col xs={12} className="services">
                        <div className="heading text-center">our <span>services</span></div>
                        <p className="text-center">We are a software development company with a special focus in the following key areas.
                        </p>
                        <Row className="limit mx-auto">
                            {images.map((item, index) => (
                                <ServiceItem 
                                    key={index}
                                    img1={item[0]}
                                    img2={item[1]} 
                                    title={titles[index]}
                                    description={descriptions[index]}
                                    descClass={descClassNames[index]}
                                    imgClass={imgClassNames[index]}
                                />
                            ))}                       
                        </Row>
                    </Col>
                    <Col xs={12} id="blog-section" className="blog">
                        <div>
                            <div className="heading text-center">Follow <span>tecHive</span></div>
                            <div className="d-md-flex justify-content-around blog-icons mx-auto">
                                <div className="blog-container facebook d-flex flex-column justify-content-center">
                                    <span className="iconify" data-icon="ant-design:facebook-filled" data-inline="false"></span>
                                    <p className="text-center pt-2">1.3k Followers</p>
                                </div>
                                <div className="blog-container d-flex flex-column twitter justify-content-center">
                                    <span className="iconify" data-icon="bx:bxl-twitter" data-inline="false"></span>
                                    <p className="text-center pt-2">700 Followers</p>
                                </div>
                                <div className="blog-container linkedin d-flex flex-column justify-content-center">
                                    <span className="iconify" data-icon="carbon:logo-linkedin" data-inline="false"></span>
                                    <p className="text-center pt-2">200 Followers</p>
                                </div>
                                <div className="blog-container instagram d-flex flex-column justify-content-center">
                                    <span className="iconify" data-icon="bx:bxl-instagram" data-inline="false"></span>
                                    <p className="text-center pt-2">1.2k Followers</p>
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