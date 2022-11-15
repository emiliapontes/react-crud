import React, { useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router' //v6 , v5 -> useHistory
import axios from 'axios';




export default function Create() {
    let history = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const postData = () => {
        axios.post(`https://637317e0348e94729902da91.mockapi.io/GatosGordos`, {
            firstName,
            lastName,
            checkbox
        })
            .then(() => {
                history('/read')
            })
    };
    
    return (
    <div>
        <Form className="create-form">
            <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
            </Form.Field>
            <Button onClick={postData} type='submit'>Submit</Button>
        </Form>
    </div>
)};
