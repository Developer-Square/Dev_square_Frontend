import React, {Fragment, useState, useEffect, useRef} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Overlay from 'react-bootstrap/Overlay'
import Popover from 'react-bootstrap/Popover'
import $ from 'jquery'

//Own Components
import './Portfolio.scss'
import PortfolioList from './PortfolioList'

function Portfolio() {
    const [option, setOption] = useState('')
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClose = () => {
        setShow(false)
    }

    useEffect(() => {
        setOption('all')
    }, [])

    //To show the form when the user scrolls to the portfolio section
    $(window).scroll(function() {
        var hT = $('#portfolio-section').offset().top,
            hH = $('#portfolio-section').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT+hH-wH) && (hT > wS) && (wS+wH > hT+hH)){
            const portfolioHeader = document.querySelector('.portfolio-header')
            setShow(!show)
            setTarget(portfolioHeader)
        }
     });

    function handleChange (e) {
        const val = e.target.innerHTML.toLowerCase()
        const options = document.querySelectorAll('.option')
        Array.from(options).map(opt => {
            opt.classList.remove('active')
            return null;
        })
        e.target.classList.add('active')
        setOption(val)
    }
    return (
        <Fragment>
            <Container id="portfolio-section">
                <Row>
                    <Col className="portfolio-column">
                        <div className="portfolio">
                            <div className="heading text-center">portfolio</div>
                            
                            <div ref={ref} className="d-flex portfolio-header mx-auto justify-content-around">
                                {/* For showing the popover */}
                                <Overlay
                                    show={show}
                                    target={target}
                                    placement="top"
                                    container={ref.current}
                                    containerPadding={20}
                                >
                                    <Popover id="popover-contained">
                                        <Popover.Title as="h3" className="text-dark pop-over" onClick={handleClose}>
                                            Search Designs 
                                            <span className="iconify" data-icon="carbon:close" data-inline="false"></span>
                                        </Popover.Title>
                                        <Popover.Content>
                                            Click on any of these titles to search through the designs.
                                        </Popover.Content>
                                    </Popover>
                                </Overlay>
                                <p onClick={handleChange} className="option active">ALL</p>
                                <p onClick={handleChange} className="option">BUSINESS TYPE</p>
                                <p onClick={handleChange} className="option">PHOTOGRAPHY</p>
                                <p onClick={handleChange} className="option">WEDDING</p>
                                <p onClick={handleChange} className="fashion-lg-screens option">FASHION</p>
                            </div>
                            <div className="d-flex justify-content-center fashion-sm-screens"><p onClick={handleChange}>FASHION</p></div>
                            <div className="portfolio-images mx-xl-auto">
                                <PortfolioList portfolioType={option} />
                            </div>
                        </div>
                        <div className="scroll-bar portfolio-bar mt-2 mx-auto">
                            <img src="images/rsz_scroll-bar.webp" className="scroll-dot img-fluid" alt="scroll" />
                        </div>
                    </Col>
                </Row>
            </Container> 
        </Fragment>
    )
}

export default Portfolio;