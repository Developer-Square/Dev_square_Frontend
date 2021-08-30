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
        // Add a smaller margin bottom if the current target
        // is the learn more tab
        if (target.className.includes('learn-more')) {
            target.classList.toggle('show-learn-more')
        } else if (target.className.includes('experiences')) {
            target.classList.toggle('show-experiences')
        } else {
            target.classList.toggle('show')
        }

        icons[1].classList.toggle('hidden')
    }
    return (
        <Fragment>
            <Container id="aboutus-section">
                <Row>
                    <div className="d-flex flex-column mx-auto col-12">
                    <div className="aboutus-header mx-auto">tecHive</div>
                    <p className="text-center">We are a team of great and passionate individuals that you can put your <span>trust in <span role="img" aria-label="emoji">😇</span>.</span></p>
                    </div>
                    <Col xs={12} lg={6}>
                        <div className="aboutus-left-section">
                            <div className="mb-4 pl-1 pr-1">
                            Everyone at tecHive understands the value of trust and quality and how to maintain them. We've built it into our culture and we all embrace it. 
                            {/* Hard work <span role="img" aria-label="emoji">💪</span> is very important but we believe that the first step to customer satisfaction is TRUST and providing QUALITY products. */}
                            </div>
                        
                        <div className="desc definition mb-2 show" onClick={handleChange}>
                            <div className="d-flex">
                                <i className="fa fa-plus-circle hidden" aria-hidden="true"></i>
                                <i className="fa fa-minus-circle" aria-hidden="true"></i>
                                <div className="mb-0 text">What is tecHive</div>
                            </div>
                            <p className="answer">
                                TecHive is a company that was born out of the need for quality. Me and my colleagues have been victims of badly built software numerous times, whether its that school website that is always crashing or its that online shop that always gets your order wrong or that internet provider that's always providing poor internet <span role="img" aria-label="emoji">🙁</span>.<br/>
                                So we sat down and decided to form a company that would deal in quality software only <span role="img" aria-label="emoji">😃</span>.
                                {/* We were tired of always calling the help center to get issues fixed. We decided quality first was the way to go, creating a product and getting it right the first time(Philip Crosby, Zero Defects Program) <span role="img" aria-label="emoji">😎</span>. Since if you create a quality product the first time, then you'll have fewer issues later on.<br/>  */}
                               {/*Joining the technology industry, we quickly realized that TRUST is very important. Clients need to know that you can do the task they're asking for. So we took that need for trust and we added it to our values. Now we not only build quality software but also make sure we build a bond of trust between us and the client. This method has worked for us so far and we intend to build it into our brand. */}
                            </p>
                        </div>
                        <div className="desc experiences mb-2" onClick={handleChange}>
                            <div className="d-flex">
                                    <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                    <i className="fa fa-minus-circle hidden" aria-hidden="true"></i>
                                    <div className="mb-0 text">Experiences</div>
                            </div>
                            <p className="answer hidden">
                                TecHive has dealt with a some clients as of the time of writing and we as a team have gained considerable experience in fields such as project handling, meeting deadlines, handling payments e.t.c. 
                                {/* We've encountered new tools that have helped us improve on our project management activities and deliver features in an organized manner. */}
                                {/* We've worked for small and medium sized organization delivering all kinds of software, from mobile apps using Flutter to websites using pure html,css and js and complex web apps using Reactjs and Nodejs. */}
                                In all our projects we've always kept five things consistent. They include: <br/>
                                <br/>
                                - Constant communication to keep clients in the loop to build trust.<br/>
                                - 🕔 On time delivery.<br/>
                                - 💻 Writing quality and maintainable code.<br/>
                                - 🔃 Using Test Driven Development to ensure our apps are robust.<br/>
                                - 🙏  Maintaining a high level of courtesy when dealing with clients.
                            </p>
                        </div>
                        <div className="desc learn-more" onClick={handleChange}>
                            <div className="d-flex">
                                        <i className="fa fa-plus-circle" aria-hidden="true"></i>
                                        <i className="fa fa-minus-circle hidden" aria-hidden="true"></i>
                                        <div className="mb-0 text">Learn more</div>
                            </div>
                            <p className="answer hidden">
                            Don't take our word for it. Check out the products we can build for you in the <span>portfolio section</span>. Also don't hesitate to <span>contact</span> us using email, phone number or through whatsapp to see what we can do for you.
                            </p>
                        </div>
                        </div>
                    </Col>
                    <Col xs={12} lg={6}>
                        <div className="aboutus-right-section">
                            <img src="images\welcome-svgs\undraw_on_the_office_fbfs.svg" alt="welcome" className="about-image"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default AboutUs;