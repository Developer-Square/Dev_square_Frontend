import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

//Own Components
import CarouselComponent from './CarouselComponent'
import FormComponent from './FormComponent'

export default function ModalComponent(props) {
    return (
        <div>
            <Modal
                {...props}
                size={props.type === 'Send us a Quote' ? 'md' : 'lg'}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {props.type}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {props.type === 'Send us a Quote' ? <FormComponent /> : <CarouselComponent packageType={props.pkg}/>}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
                </Modal>
        </div>
    )
}
