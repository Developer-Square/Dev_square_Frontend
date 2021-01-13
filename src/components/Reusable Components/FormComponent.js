import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'

//Own Components
import PopoverComponent from './PopoverComponent'
import FormSpree from '../../helpers/FormSpree'

export default function FormComponent({type, close}) {
    const [validated, setValidated] = useState('')
    const [fname, setFname] = useState('')
    const [sname, setSname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [pages, setPages] = useState('')
    const [responsive, setResponsive] = useState(false)
    const [design, setDesign] = useState(false)
    const [sourceCode, setSourceCode] = useState(false)
    const [price, setPrice] = useState('')
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
            if (e.target.className.slice(0, 9) === 'quoteForm') {
                const fullName = fname.concat(' ', sname)
                const data = {
                    fullName,
                    email,
                    phone,
                    message,
                    pages,
                    responsive,
                    design,
                    sourceCode,
                    price
                }
                const formAction = 'https://formspree.io/f/xdopyydr';
                FormSpree(data, formAction, close)
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
                        <Form.Control value={fname} onChange={(e) => setFname(e.target.value)} required type="text" placeholder="Enter firt name..." />
                        <Form.Control.Feedback type="invalid">
                                Please fill in your first name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Your Surname</Form.Label>
                        <Form.Control value={sname} onChange={(e) => setSname(e.target.value)} required type="text" placeholder="Enter surname..." />
                        <Form.Control.Feedback type="invalid">
                                Please fill in your surname.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>
                <Form.Group>
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} required type="email" placeholder="Enter email..." />
                        <Form.Control.Feedback type="invalid">
                                Please fill in your email.
                        </Form.Control.Feedback>
                </Form.Group>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">+254</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control value={phone} onChange={(e) => setPhone(e.target.value)} required type="number" placeholder="Phone number..." aria-label="phone" aria-describedby="basic-addon1"
                    />
                    <Form.Control.Feedback type="invalid">
                        Please fill in your phone number.
                    </Form.Control.Feedback>
                </InputGroup>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Tell us what you want us to build for you</Form.Label>
                    <Form.Control value={message} onChange={(e) => setMessage(e.target.value)} required as="textarea" rows={4} />
                    <Form.Control.Feedback type="invalid">
                            Please fill in a short description.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                        <Form.Label>Number of pages you want</Form.Label>
                        <Form.Control value={pages} onChange={(e) => setPages(e.target.value)} required as="select">
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
                        <PopoverComponent value={responsive} onChange={(e) => setResponsive(e)} title='Resposive Design' message={responsiveMessage} />
                        <PopoverComponent value={design} onChange={(e) => setDesign(e)} title='Design Customization' message={customizationMessage} />
                        <PopoverComponent value={sourceCode} onChange={(e) => setSourceCode(e)} title='Source Code' message={codeMessage} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Key in your price range</Form.Label>
                    <Form.Control value={price} onChange={(e) => setPrice(e.target.value)} required type="text" placeholder="$$$" />
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
