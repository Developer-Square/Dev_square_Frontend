import React, {Fragment, useState} from 'react'
import { ToastContainer } from 'react-toastify'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import './ProductFeatures.scss'
import ModalComponent from "./Reusable Components/ModalComponent";

function ProductFeatures() {
    const [modalShow, setModalShow] = useState(false)
    const [type, setType] = useState(false)

    const toggleModal = () => {
        setModalShow(!modalShow)
        setType('Send us a Quote')
    }
    return (
        <Fragment>
            <ModalComponent type={type} show={modalShow} onHide={() => toggleModal()}/>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Container id="product-section">
                <div className="heading product">Our Terms</div>
                <p className="product-text">Our aim is to provide value to our clients and we want to build you something that will bring more value to your business. We focus on bringing your vision to life. 
                </p>
                <p className="product-description">Think of us as your guide to growing your business and achieving your goals by establishing an online presence with your website or app. Here's a short breakdown of how we work: <br />
                    <ul>
                        <li>We have a meet-up where you tell us about your vision or problem you're trying to solve. This will generally be a high level discussion of how the app/website will work.</li>
                        <li>We as tecHive go back, discuss and research about your idea and send you, the client, a proposal with a clear breakdown of the problem you're trying to solve, what it'll take to solve it and the cost of the project.</li>
                        <li>When you sign the contract and agree to our terms we can now draft a contract that both parties will sign. Only then can work on the project begin.</li>
                    </ul>
                </p>
                <div className="further-info text-center mb-3">
                With us you're assured of getting back the value for your money. <br />
                Get a quote from us for what you want us to build or contact us via Whatsapp or the contact form at the bottom.
                </div>
                <div className="quote">
                    <Button variant="success" onClick={() => toggleModal()}>Get Quote</Button>
                </div>
            </Container> 
        </Fragment>
    )
}

export default ProductFeatures;