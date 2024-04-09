import { useState } from 'react';
//this is for styling
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'

//this is a function that allows a user to contact me via email
export default function ContactMe() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        text: '',
    });
    const [error, setError] = useState(false);
    const [emailInvalid, setEmailInvalid] = useState(false);

    function emailValid(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

    const processSubmit = (e) => {
        e.preventDefault();
        if (formData.name.trim() === '' || formData.email.trim() === '' || formData.text.trim() === '') {
            setError(true);
            return;
        }
        if (!emailValid(formData.email)) {
            setEmailInvalid(true);
            return;
        }
        setError(false);
        setEmailInvalid(false);
        setFormData({
            name: '',
            email: '',
            text: '',
        });
    }

    const processChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }

    return (
        <Col className="contactForm" lg={12}>
            <Form onSubmit={processSubmit} onChange={processChange} className="contactForm">
                <Form.Group className="mb-4 ">
                    <Form.Label className='conHeaders'>Name</Form.Label>
                    {error && formData.name.trim() === '' ? 
                        <Form.Control className='formText' type="text" placeholder="This field is required" name="name" value={formData.name} />
                        : <Form.Control className=' inputField' type="text" placeholder="Name" name="name" value={formData.name} />}
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label className='conHeaders'>Email address</Form.Label>
                    {error && formData.email.trim() === '' ? 
                        <Form.Control type="text" placeholder="This field is required" className='error' name="email" value={formData.email} />
                        : emailInvalid ? 
                            <Form.Control type="text" placeholder="Invalid email" className='error' name="email" value={formData.email} />
                            : <Form.Control className=' inputField' type="text" placeholder="Email" name="email" value={formData.email} />}
                </Form.Group>
                <Form.Group className="mb-4">
                    <Form.Label className='conHeaders'>Message</Form.Label>
                    {error && formData.text.trim() === '' ? 
                        <Form.Control as='textarea' type="textarea" placeholder="This field is required" className='error' name="text" value={formData.text} />
                        : <Form.Control className=' inputField' as='textarea' type="textarea" placeholder="Leave a message..." name="text" value={formData.text} />}
                </Form.Group>
                <Button className="contactBtn" type="submit">
                    Send
                </Button>
            </Form>
        </Col>
    )
}
