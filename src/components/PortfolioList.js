import React, {useEffect} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'
import Flip from 'react-reveal/Flip'

const Container = styled.div`

`

export default function PortfolioList({portfolioType}) {
    function handleImages (param, images) {
        // eslint-disable-next-line
        Array.from(images).map(image => {
            image.classList.add('hide')
        })
        const imgContainers = document.querySelectorAll(`.${param}`)
        Array.from(imgContainers).map(img => {
            img.classList.remove('hide')
            return null;
        })
    }

    useEffect(() => {
        const images = document.querySelectorAll('.image-container-large')
        if (portfolioType === 'all') {
            // eslint-disable-next-line
            Array.from(images).map(image => {
                image.classList.remove('hide')
            })
        } else if (portfolioType === 'photography') {
            handleImages('photography', images)
        } else if (portfolioType === 'business type') {
            handleImages('business', images)
        } else if (portfolioType === 'wedding') {
            handleImages('wedding', images)
        } else {
            handleImages('fashion', images)
        }
        // eslint-disable-next-line
    }, [portfolioType])

    return (
        <Container>
            <Row className="mx-auto">
                <Col xs={12} sm={6} lg={4} className="p-sm-0 business image-container-large">
                    <Flip top>
                        <img src="images/portfolio-images/Business-1.webp" alt="portfolio" className="portfolio-1 img-fluid"/>
                    </Flip>
                </Col>
                <Col xs={12} sm={6} lg={4} className="p-sm-0 business image-container-large">
                    <Flip top>
                        <img src="images/portfolio-images/Business-2.webp" alt="portfolio" className="portfolio-1 img-fluid"/>
                    </Flip>
                </Col>
                <Col xs={12} sm={6} lg={4} className="p-sm-0 business image-container-large">
                    <Flip top>
                        <img src="images/portfolio-images/Business-3.webp" alt="portfolio" className="portfolio-1 img-fluid"/>
                    </Flip>
                </Col>
                <Col xs={12} sm={6} lg={4} className="p-sm-0 business image-container-large">
                    <Flip top>
                        <img src="images/portfolio-images/Business-4.webp" alt="portfolio" className="portfolio-1 img-fluid"/>
                    </Flip>
                </Col>
                <Col xs={12} sm={6} lg={4} className="p-sm-0 photography image-container-large">
                    <Flip top>
                        <img src="images/portfolio-images/Photography-1.webp" alt="portfolio" className="portfolio-1 img-fluid"/>
                    </Flip>
                </Col>
                <Col xs={12} sm={6} lg={4} className="p-sm-0 photography image-container-large">
                    <Flip top>
                        <img src="images/portfolio-images/Photography-2.webp" alt="portfolio" className="portfolio-1 img-fluid"/>
                    </Flip>
                </Col>
                <Col xs={12} sm={6} lg={4} className="p-sm-0 photography image-container-large">
                    <Flip top>
                        <img src="images/portfolio-images/Photography-3.webp" alt="portfolio" className="portfolio-1 img-fluid"/>
                    </Flip>
                </Col>
                <Col xs={12} sm={6} lg={4} className="p-sm-0 photography image-container-large">
                    <Flip top>
                        <img src="images/portfolio-images/Photography-4.webp" alt="portfolio" className="portfolio-1 img-fluid"/>
                    </Flip>
                </Col>
                <Col xs={12} sm={6} lg={4} className="p-sm-0 wedding image-container-large">
                    <Flip top>
                        <img src="images/portfolio-images/Wedding-1.webp" alt="portfolio" className="portfolio-1 img-fluid"/>
                    </Flip>
                </Col>
                <Col xs={12} sm={6} lg={4} className="p-sm-0 wedding image-container-large">
                    <Flip top>
                        <img src="images/portfolio-images/Wedding-2.webp" alt="portfolio" className="portfolio-1 img-fluid"/>
                    </Flip>
                </Col>
                <Col xs={12} sm={6} lg={4} className="p-sm-0 wedding image-container-large">
                    <Flip bottom>
                        <img src="images/portfolio-images/Wedding-3.webp" alt="portfolio" className="portfolio-1 img-fluid"/>
                    </Flip>
                </Col>
                <Col xs={12} sm={6} lg={4} className="p-sm-0 fashion image-container-large">
                    <Flip bottom>
                        <img src="images/portfolio-images/Fashion-1.webp" alt="portfolio" className="portfolio-1 img-fluid"/>
                    </Flip>
                </Col>
                <Col xs={12} sm={6} lg={4} className="p-sm-0 fashion image-container-large">
                    <Flip bottom>
                        <img src="images/portfolio-images/Fashion-2.webp" alt="portfolio" className="portfolio-1 img-fluid"/>
                    </Flip>
                </Col>
                <Col xs={12} sm={6} lg={4} className="p-sm-0 fashion image-container-large">
                    <Flip bottom>
                        <img src="images/portfolio-images/Fashion-3.webp" alt="portfolio" className="portfolio-1 img-fluid"/>
                    </Flip>
                </Col>
                <Col xs={12} sm={6} lg={4} className="p-sm-0 fashion image-container-large">
                    <Flip bottom>
                        <img src="images/portfolio-images/Fashion-4.webp" alt="portfolio" className="portfolio-1 img-fluid"/>
                    </Flip>
                </Col>
            </Row>
        </Container>
    )
}
