import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

//Own Components
import CarouselComponent from './CarouselComponent'
import FormComponent from './FormComponent'
import TaskDisplay from '../../Dashboard/pages/Users/TaskDisplay'

export default function ModalComponent(props) {
    const [clear, setClear] = useState(false)
    function handleClose() {
        props.onHide()
        setClear(true)

    }
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
                {props.type === 'Send us a Quote' ? <FormComponent /> : props.type === 'Here are some pictures' ? <CarouselComponent packageType={props.pkg}/>: props.usertasks !== undefined ? <TaskDisplay clear={clear} name={props.type} usertasks={props.usertasks}/>: null}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
                </Modal>
        </div>
    )
}
