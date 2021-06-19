import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ServiceItem from './ServiceItem';

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
                        
                            <ServiceItem
                                image1="images/services-shape-1.webp"
                                image2="images/assets/icons/nodejs.webp"
                                title="Nodejs Applications"
                                description="We create full Nodejs applications with features you as the user can specify. You could also choose with Nodejs backend with a React frontend"
                                classname="inner-content-dev"
                            />

                            <ServiceItem
                                image1="images/services-shape-2.webp"
                                image2="images/services-icon-2.webp"
                                title="HTML/CSS"
                                description="We also create websites using bare HTML, Css, Js, Bootstrap and Jquery for the animations.
                                These websites are mostly created from scratch. We can also work with other frameworks like AntDesign and Evergreen if requested to."
                                classname="inner-content"
                            />

                            <ServiceItem
                                image1="images/services-shape-2.webp"
                                image2="images/services-icon-3.webp"
                                title="WORDPRESS"
                                description="We can also create a wordpress website for you with specified plugins. Most requested wordpress websites are E-commerce websites, we can create those too."
                                classname="inner-content"
                            />

                            <ServiceItem
                                image1="images/services-shape-2.webp"
                                image2="images/assets/icons/mobile-app.webp"
                                title="Mobile APPLICATIONS"
                                description="We go the full cycle by not only providing you with a website but an app too that your users can use on their phones to access your business/services.We will build any android app for you provided the logic is explained and understood. If the app doesn't meet all the requirement mentioned we will revise at zero additional cost."
                                classname="inner-content"
                            />

                            <ServiceItem
                                image1="images/services-shape-2.webp"
                                image2="images/assets/icons/reactjs-48.webp"
                                title="Reactjs APPLICATIONS"
                                description="We create fully functional frontend applications using reactjs, you can also choose to add a backend to your react app using django or Nodejs."
                                classname="inner-content"
                            />

                            <ServiceItem
                                image1="images/services-shape-1.webp"
                                image2="images/assets/icons/ui-ux-design-2.webp"
                                title="UI/UX DESIGN"
                                description="If you choose to work with us, we provide you with a free design that can be customized to fit you goals."
                                classname="inner-content-dev"
                            />

                            <ServiceItem
                                image1="images/services-shape-2.webp"
                                image2="images/assets/icons/php.webp"
                                title="PHP"
                                description="We also deal in full stack PHP applications e.g If you'd like your E-commerce website built in PHP, we got you covered.We will build you a php ecommerce website for your business that can be easily customed as per your needs at an affordable price."
                                classname="inner-content"
                            />

                            <ServiceItem
                                image1="images/services-shape-2.webp"
                                image2="images/services-icon-6.webp"
                                title="RESPONSIVE LAYOUT"
                                description="All of our websites come with a responsive layout, this means your website can be viewed on both large screen devices like laptops and computers and also mobile phones."
                                classname="inner-content"
                            />

                            <ServiceItem
                                image1="images/services-shape-1.webp"
                                image2="images/services-icon-6.webp"
                                title="RESPONSIVE LAYOUT"
                                description="All of our websites come with a responsive layout, this means your website can be viewed on both large screen devices like laptops and computers and also mobile phones."
                                classname="inner-content"
                            />

                            <ServiceItem
                                image1="images/services-shape-1.webp"
                                image2="images/assets/icons/ruby.webp"
                                title="Ruby on Rails"
                                description="We've an experienced Ruby on rails developer that'll take care of all of your Ruby on rails needs.Ruby on Rails framework uses MVC approach to build web applications, It builds web applications quickly and the biggest strength is that it enables the developer to write big applications in a short period of time.
                                What we're offering:"
                                offering={["ROR Custom application development", "Ruby MVP Development", "Ruby on Rails layout design", "ROR installation", "Ruby on Rails CMS & Responsive web portal development", "Maintenance and deployment", "RoR eCommerce design", "Web API Development"]}
                                classname="inner-content-dev"
                            />

                            <ServiceItem
                                image1="images/services-shape-1.webp"
                                image2="images/assets/icons/debug.webp"
                                title="Debugging Code"
                                description="We have numerous engineers on our team all with quality experience in their fields and
                                we can assist you in debugging your code.
                                We can debung the following technologies:"
                                offering={["HTML, Css", "Javascript", "Reactjs", "Ruby on Rails", "Nodejs", "Django", "PHP", "Android"]}
                                classname="inner-content-dev"
                            />

                            <ServiceItem
                                image1="images/services-shape-2.webp"
                                image2="images/assets/icons/django.webp"
                                title="Django Development"
                                description="For more dynamic work we will create your backend in django."
                                classname="inner-content"
                            />

                            <ServiceItem
                                image1="images/services-shape-2.webp"
                                image2="images/assets/icons/data-analyst.webp"
                                title="Data Analyst"
                                description=" If you happen to have any data analyst enquiries, our data analyst will be ready to answer any of your questions."
                                classname="inner-content"
                            />
                            
                        </Row>
                    </Col>
                    <Col xs={12}>
                        <div className="scroll-bar services-bar mt-2 mx-auto">
                            <img src="images/rsz_scroll-bar.webp" className="scroll-dot img-fluid" alt="scroll" />
                        </div>
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