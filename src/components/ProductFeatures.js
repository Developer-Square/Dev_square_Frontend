import React, {Fragment} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './ProductFeatures.scss'

function ProductFeatures() {
    return (
        <Fragment>
            <Container id="product-section">
                <Row>
                    <Col className="product-features">
                        <div className="product heading text-center">our <span>product features</span></div>
                        <div className="product-inner-text text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed magna vel velit dignissim luctus eu in urna. Dapibus egestas turpis.
                        </div>
                        <div>
                            <div className="">
                                <div className="bars bar-1"></div>
                                <div className="bars bar-2"></div>
                                <div className="bars bar-3"></div>
                                <div className="bars bar-4"></div>
                                <div className="bars bar-5"></div>
                                <div className="bars bar-6"></div>
                            </div>
                            <div className="d-flex justify-content-center">
                                <img src="images/product-features.png" alt="product" className="img-fluid"/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container> 
        </Fragment>
    )
}

export default ProductFeatures;