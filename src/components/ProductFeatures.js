import React, {Fragment, useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import './ProductFeatures.scss'
import PricingCard from './PricingCard'
import ModalComponent from "./Reusable Components/ModalComponent";

function ProductFeatures() {
    const [modalShow, setModalShow] = useState(false)
    const [type, setType] = useState(false)

    const toggleModal = () => {
        setModalShow(!modalShow)
        setType('Send us a Quote')
    }

    let imageBasic = 'images/avatars/rsz_business-basic-1.png'
    let imageClassic = 'images/avatars/rsz_bakery-classic-1.png'
    let imageUnique = 'images/avatars/rsz_interior_design2.png'
    let basicTitle = 'Basic Package'
    let classicTitle = 'Classic Package'
    let uniqueTitle = 'Unique Package'
    let colorBasic = 'basic'
    let colorClassic = 'classic'
    let colorUnique = 'unique'
    let basicText = 'The basic package comes with a free design with basic features or you can provide your own, it\'s written in Reactjs or HTML, CSS and JS.'
    let classicText = 'The standard package also comes with a free design with more elaborate features.'
    let uniqueText = 'The unique package also comes with a free design with refined and beautiful features.'
    let basicFeatures = '3 pages'
    let classicFeatures = '4 pages i.e a home, about, services and a fully functional contact page.'
    let uniqueFeatures = '5 pages i.e home, about, services, contact and a dashboard with custom metrics and features'
    let package3 = 'premium'
    return (
        <Fragment>
            <ModalComponent type={type} show={modalShow} onHide={() => toggleModal()}/>
            <Container id="product-section">
                <div className="heading product">Our <span>Products</span></div>
                <p className="product-text">Our aim is to please our clients by creating reliable and maintainable products.
                <br />Can't find what you're looking for in the packages below? Send us a Quote of what you want.</p>
                <Row>
                    <Col><PricingCard image={imageBasic} titleColor={colorBasic} title={basicTitle} text={basicText} features={basicFeatures} packageType='basic'/></Col>
                    <Col className="mt-5 mt-lg-0"><PricingCard image={imageClassic} titleColor={colorClassic} title={classicTitle} text={classicText} features={classicFeatures} packageType='classic'/></Col>
                    <Col className="mt-5"><PricingCard package3={package3} image={imageUnique} titleColor={colorUnique} title={uniqueTitle} text={uniqueText} features={uniqueFeatures} badge packageType='unique'/></Col>
                </Row>
                <div className="further-info text-center mb-3"><span>Please note Login functionality is NOT included in any of the above packages.</span> <br />We also make PHP products(E-commerce Websites), Android apps, Django and Nodejs features, Ruby on rails web apps and lastly we have a Data Analyst on the team that can serve as a consultant.
                <br />Check out our services in the service section below.
                Send us a quote of what you want us to build and your price range.</div>
                <div className="quote">
                    <Button variant="outline-success" onClick={() => toggleModal()}>Send Quote</Button>
                </div>
            </Container> 
        </Fragment>
    )
}

export default ProductFeatures;