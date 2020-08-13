import React from "react"
import CardDeck from "react-bootstrap/CardDeck"
import Card from "react-bootstrap/Card"
import CustomCard from "./CustomCard"

function CustomCardDeck(opts) {
    var customCards = [
        CustomCard({
            image: "https://s3-eu-west-1.amazonaws.com/aforslow.com/images/DSC02068.jpg",
            header: "Food Blog",
            content: "Here is my personal food blog, where I may provide recipes and photos of nice meals.",
            name: "food blog"
        }),
        CustomCard({
            image: "https://s3-eu-west-1.amazonaws.com/aforslow.com/images/25074777_2611597838981656_5580211473137321313_o.jpg",
            header: "Travel blog",
            content: "Here is my personal travel blog, where I share my travel experiences and tips.",
            name: "travel blog"
        }),
        CustomCard({
            image: "https://s3-eu-west-1.amazonaws.com/aforslow.com/images/gen_at_iteration_15_original_color+(2).png",
            header: "Code blog",
            content: "This is my personal coding blog, where I implement software and share coding experience and solutions.",
            name: "code blog"
        })
    ]

    return (
        <CardDeck style={{width:"90%", margin: "auto"}}>
            {customCards}
            {/* <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card> */}
        </CardDeck>
    )
}

export default CustomCardDeck