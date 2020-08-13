import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import CardDeck from "react-bootstrap/CardDeck"
import ReadOnlyEditor from "./ReadOnlyEditor"

function CustomCard(opts) {
    console.log("CustomCard content:", opts.content)
    return (
        <Card className="text-center" style={{overflow:"hidden", maxHeight: "500px"}}>
            <Card.Img variant="top" src={opts.img} />
            <Card.Body>
                <Card.Title>{opts.title}</Card.Title>
                <div style={{overflow:"hidden", maxHeight: "100px", marginBottom: "20px"}}>
                    <ReadOnlyEditor content={opts.content} />
                </div>
                {/* <Card.Text style={{overflow:"hidden", maxHeight: "100px"}}>
                </Card.Text> */}
                <Button variant="primary" href={opts.detailedViewUrl}>View</Button>{' '}
                <Button variant="danger" onClick={opts.onDelete}>Delete</Button>
                <Card.Text>
                    <small className="text-muted">{opts.lastTimeChanged}</small>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CustomCard