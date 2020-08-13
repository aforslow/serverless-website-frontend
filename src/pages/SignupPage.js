import React from "react"
import CustomNavbar from "../components/CustomNavbar"
import { 
    Form,
    Button
} from "react-bootstrap"


function SignupPage() {
    return (
        <div>
            <CustomNavbar />
            <Form style={{maxWidth: "50%", margin: "auto", marginTop: "100px"}}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    I'll never share your email with anyone else (I promise).
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default SignupPage