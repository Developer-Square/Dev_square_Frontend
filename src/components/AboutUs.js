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
                    <div className="aboutus-header mx-auto">Lotus</div>
                    <p className="text-center">Lorem ipsum dolor sit amet, consectetur <span>adipiscing elit.</span> Integer sed magna vel velit dignissim luctus eu in urna. Dapibus egestas turpis. </p>
                    <Col xs={12}>
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
                    <Col xs={12}>
                        <div className="aboutus-right-section">

                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default AboutUs;