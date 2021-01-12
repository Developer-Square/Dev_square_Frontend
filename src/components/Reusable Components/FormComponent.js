import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'

//Own Components
import PopoverComponent from './PopoverComponent'

export default function FormComponent({type}) {
    const [validated, setValidated] = useState(false)
    const responsiveMessage = 'This is when you want your website to be viewed on both websites, mobile phones and tablets.'
    const customizationMessage = 'This is when you choose to add custom features to the design that we provide you'
    const codeMessage = 'This is when you want to receive the code for the website we built for you.'

    function handleSubmit(e) {
        e.preventDefault()
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation()
        } else {
            setValidated(true)
            if (e.target.className === 'quoteForm') {
                console.log('here')
            }
        }
    }
    return (
        <>
        {type !== 'Review Form' ? (
            <Form noValidate validated={validated}>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Your Firt Name</Form.Label>
                        <Form.Control required type="text" placeholder="Enter firt name..." />
                        <Form.Control.Feedback type="invalid">
                                Please fill in your first name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Your Surname</Form.Label>
                        <Form.Control required type="text" placeholder="Enter surname..." />
                        <Form.Control.Feedback type="invalid">
                                Please fill in your surname.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Group>
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control required type="email" placeholder="Enter email..." />
                        <Form.Control.Feedback type="invalid">
                                Please fill in your email.
                        </Form.Control.Feedback>
                </Form.Group>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">+254</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control required type="number" placeholder="Phone number..." aria-label="phone" aria-describedby="basic-addon1"
                    />
                    <Form.Control.Feedback type="invalid">
                        Please fill in your phone number.
                    </Form.Control.Feedback>
                </InputGroup>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Tell us what you want us to build for you</Form.Label>
                    <Form.Control required as="textarea" rows={4} />
                    <Form.Control.Feedback type="invalid">
                            Please fill in a short description.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                        <Form.Label>Number of pages you want</Form.Label>
                        <Form.Control required as="select">
                            <option>Choose...</option>
                            <option>5 pages</option>
                            <option>4 pages</option>
                            <option>3 pages</option>
                            <option>2 pages</option>
                            <option>More than 5</option>
                        </Form.Control>
                </Form.Group>
                <Form.Group>
                        <Form.Label>Please tick the features you'd like</Form.Label>
                        <PopoverComponent title='Resposive Design' message={responsiveMessage} />
                        <PopoverComponent title='Design Customization' message={customizationMessage} />
                        <PopoverComponent title='Source Code' message={codeMessage} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Key in your price range</Form.Label>
                    <Form.Control required type="text" placeholder="$$$" />
                    <Form.Control.Feedback type="invalid">
                            Please fill in your price.
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" className="quoteForm" type="submit" onClick={handleSubmit}>
                    Send
                </Button>
            </Form>
        ) :
        (
            <Form noValidate validated={validated}>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Control required type="text" placeholder="Enter firt name..." />
                        <Form.Control.Feedback type="invalid">
                                Please fill in your first name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Control required type="text" placeholder="Enter surname..." />
                        <Form.Control.Feedback type="invalid">
                                Please fill in your surname.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Group>
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control required type="email" placeholder="Enter email..." />
                        <Form.Control.Feedback type="invalid">
                                Please fill in your email.
                        </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Kindly type in your message</Form.Label>
                    <Form.Control required as="textarea" rows={4} />
                    <Form.Control.Feedback type="invalid">
                            Please fill in a short description.
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Send
                </Button>
            </Form>
        )}
        </>
        
    )
}
