import React, { useState } from "react"
import CustomNavbar from "../components/CustomNavbar"
import { 
    Form,
    Button
} from "react-bootstrap"

function LoginPage(opts) {
    const [emailAddress, setEmailAddress] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")

    function onLogin() {
        alert("Logging in!")
    }
    
    return (
        <div>
            <CustomNavbar />
            <div style={{backgroundColor: "primary"}}>
                <Form style={{maxWidth: "50%", margin: "auto", marginTop: "100px"}}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={emailAddress} onChange={e => setEmailAddress(e.target.value)} />
                        <Form.Text className="text-muted">
                        I'll never share your email with anyone else (I promise).
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={onLogin}>
                        Login
                    </Button>{' '}
                    <Button variant="outline-primary" type="submit" href="/signup">
                        Sign up
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default LoginPage