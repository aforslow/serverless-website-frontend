import React from "react"
import Jumbotron from "react-bootstrap/Jumbotron"
import Button from "react-bootstrap/Button"

function CustomJumbotron(opts) {
    return (
        <Jumbotron>
            <h1>{opts.header}</h1>
            <p>
                {opts.content}
            </p>
            <p>
                <Button variant="primary">Visit</Button>
            </p>
        </Jumbotron>
    )
}

export default CustomJumbotron