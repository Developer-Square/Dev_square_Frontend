import React, {Fragment, useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//Own Components
import './Portfolio.scss'
import PortfolioList from './PortfolioList'

function Portfolio() {
    const [option, setOption] = useState('')

    useEffect(() => {
        setOption('all')
    }, [])

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
                            <div className="d-flex portfolio-header mx-auto justify-content-around">
                                <p onClick={handleChange} className="option active">ALL</p>
                                <p onClick={handleChange} className="option">BUSINESS TYPE</p>
                                <p onClick={handleChange} className="option">PHOTOGRAPHY</p>
                                <p onClick={handleChange} className="option">WEDDING</p>
                                <p onClick={handleChange} className="fashion-lg-screens option">FASHION</p>
                            </div>
                            <div className="d-flex justify-content-center fashion-sm-screens"><p>FASHION</p></div>
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