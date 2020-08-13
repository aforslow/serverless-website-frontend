import React from "react"
import {
    Button,
    Card
} 
from "react-bootstrap"

function CreateNewPostCard(opts) {
    return (
        <Card className="text-center" key={opts.customKey}>
            <Card.Img variant="top" src={opts.img}/>
            <Card.Title>Create Blog Post</Card.Title>
            <Card.Body>
                <Card.Text>
                    Click here to create a new blog post!
                </Card.Text>
                <Button href={opts.createPostUrl}>Create blog post!</Button>
                <br/>
                <br/>
            </Card.Body>
        </Card>
    )
}

export default CreateNewPostCard