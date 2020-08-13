import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import CardDeck from "react-bootstrap/CardDeck"

function CustomCard(opts) {
    return (
        <Card style={{ width: '18rem', margin: "0 auto" }}>
            <Card.Img variant="top" src={opts.image} />
            <Card.Body>
                <Card.Title>{opts.header}</Card.Title>
                <Card.Text>
                {opts.content}
                </Card.Text>
                <Button variant="primary">Go to {opts.name}</Button>
            </Card.Body>
        </Card>
    )
}

export default CustomCard