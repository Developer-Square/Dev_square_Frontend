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
                        <p className="text-center">Our company provides the services stated below in more detail. It's our company's motto to deliver quality and maintainable websites and apps that please our users.
                        </p>
                        <Row className="limit mx-auto">
                            <Col xs={12} sm={6} className="service-container">
                                <div className="service-title d-flex justify-content-center">
                                    <img src="images/services-shape-1.webp" alt="services" className="img-fluid"/>
                                    <img src="images/assets/icons/nodejs.png" alt="services" className="service-icon img-fluid"/>
                                    <p className="title my-auto">Nodejs Applications</p>
                                </div>
                                <div className="inner-content-dev p-3">
                                    We create full Nodejs applications with features you as the user can specify. You could also choose with Nodejs backend with a React frontend
                                </div>
                            </Col>
                            <Col xs={12} sm={6} className="service-container">
                                <div className="service-title d-flex justify-content-center">
                                    <img src="images/services-shape-2.webp" alt="services" className="img-fluid"/>
                                    <img src="images/services-icon-2.webp" alt="services" className="service-icon-html img-fluid"/>
                                    <p className="title my-auto">HTML/CSS</p>
                                </div>
                                <div className="inner-content p-3">
                                    We also create websites using bare HTML, Css, Js and Jquery to add a bit of functionality.
                                    This websites are mostly created from scratch.
                                </div>
                            </Col>
                            <Col xs={12} sm={6} className="service-container">
                                <div className="service-title d-flex justify-content-center">
                                    <img src="images/services-shape-2.webp" alt="services" className="img-fluid"/>
                                    <img src="images/services-icon-3.webp" alt="services" className="service-icon-word img-fluid"/>
                                    <p className="title my-auto">WORDPRESS</p>
                                </div>
                                <div className="inner-content p-3">
                                    We can also create a wordpress website for you with specified plugins. Most requested wordpress websites are E-commerce websites, we can create those too.
                                </div>
                            </Col>
                            <Col xs={12} sm={6} className="service-container">
                                <div className="service-title d-flex justify-content-center">
                                    <img src="images/services-shape-2.webp" alt="services" className="img-fluid"/>
                                    <img src="images/assets/icons/mobile-app.png" alt="services" className="service-icon-app img-fluid"/>
                                    <p className="title my-auto">Mobile APPLICATIONS</p>
                                </div>
                                <div className="inner-content p-3">
                                    We go the full cycle by not only providing you with a website but an app too that your users can use on their phones to access your business/services.
                                </div>
                            </Col>
                            <Col xs={12} sm={6} className="service-container">
                                <div className="service-title d-flex justify-content-center">
                                    <img src="images/services-shape-2.webp" alt="services" className="img-fluid"/>
                                    <img src="images/assets/icons/reactjs-48.png" alt="services" className="service-icon-app img-fluid"/>
                                    <p className="title my-auto">Reactjs APPLICATIONS</p>
                                </div>
                                <div className="inner-content p-3">
                                     We create fully functional frontend applications using reactjs, you can also choose to add a backend to your react app using django or Nodejs.
                                </div>
                            </Col>
                            <Col xs={12} sm={6} className="service-container">
                                <div className="service-title d-flex justify-content-center">
                                    <img src="images/services-shape-1.webp" alt="services" className="img-fluid"/>
                                    <img src="images/assets/icons/ui-ux-design-2.png" alt="services" className="service-icon-ui img-fluid"/>
                                    <p className="title my-auto">UI/UX DESIGN</p>
                                </div>
                                <div className="inner-content-dev p-3">
                                    If you choose to work with us, we provide you with a free design that can be customized to fit you goals.
                                </div>
                            </Col>
                            <Col xs={12} sm={6} className="service-container">
                                <div className="service-title d-flex justify-content-center">
                                    <img src="images/services-shape-2.webp" alt="services" className="img-fluid"/>
                                    <img src="images/assets/icons/php.png" alt="services" className="service-icon-responsive img-fluid"/>
                                    <p className="title my-auto">PHP</p>
                                </div>
                                <div className="inner-content p-3">
                                    We also deal in full stack PHP applications e.g If you'd like your E-commerce website built in PHP, we got you covered.
                                </div>
                            </Col>
                            <Col xs={12} sm={6} className="service-container">
                                <div className="service-title d-flex justify-content-center">
                                    <img src="images/services-shape-2.webp" alt="services" className="img-fluid"/>
                                    <img src="images/services-icon-6.webp" alt="services" className="service-icon-responsive img-fluid"/>
                                    <p className="title my-auto">RESPONSIVE LAYOUT</p>
                                </div>
                                <div className="inner-content p-3">
                                    All of our websites come with a responsive layout, this means your website can be viewed on both large screen devices like laptops and computers and also mobile phones.
                                </div>
                            </Col>
                            <Col xs={12} sm={6} className="service-container">
                                <div className="service-title d-flex justify-content-center">
                                    <img src="images/services-shape-1.webp" alt="services" className="img-fluid"/>
                                    <img src="images/assets/icons/ruby.png" alt="services" className="service-icon-ui img-fluid"/>
                                    <p className="title my-auto">Ruby on Rails</p>
                                </div>
                                <div className="inner-content-dev p-3">
                                    We've an experienced Ruby on rails developer that'll take care of all of your Ruby on rails needs.
                                </div>
                            </Col>
                            <Col xs={12} sm={6} className="service-container">
                                <div className="service-title d-flex justify-content-center">
                                    <img src="images/services-shape-2.webp" alt="services" className="img-fluid"/>
                                    <img src="images/assets/icons/django.png" alt="services" className="service-icon-responsive img-fluid"/>
                                    <p className="title my-auto">Django Development</p>
                                </div>
                                <div className="inner-content p-3">
                                    For more dynamic work we will create your backend in django.
                                </div>
                            </Col>
                            <Col xs={12} sm={6} className="service-container">
                                <div className="service-title d-flex justify-content-center">
                                    <img src="images/services-shape-2.webp" alt="services" className="img-fluid"/>
                                    <img src="images/assets/icons/data-analyst.png" alt="services" className="service-icon-responsive img-fluid"/>
                                    <p className="title my-auto">Data Analyst</p>
                                </div>
                                <div className="inner-content p-3">
                                    If you happen to have any data analyst enquiries, our data analyst will be ready to answer any of your questions.
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