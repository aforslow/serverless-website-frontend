import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"

function Intro() {
    return (
        <Container fluid>
            <Row>
                <Col sm={1} md={1} lg={1}/>
                <Col className="d-none d-sm-block" sm={5} md={4} lg={3} xl={2} style={{margin: "auto"}}>
                    <Image className="d-none d-sm-block" width="70%" src="https://s3-eu-west-1.amazonaws.com/aforslow.com/images/hongkong+(4).jpg" roundedCircle />
                </Col>
                <Col xs={12} sm={6} md={7} lg={8} style={{margin: "auto"}}>
                    <p style={{verticalAlign: "middle", fontSize: "20px"}}>
                    This is my personal website where I display new web applications, food,
                    a coding blog, as well as a travel blog. Hopefully, I will update
                    here on a regular basis with new functionalities, content and better
                    design. Follow me on this journey - it will be fun!
                    </p>
                </Col>
                <Col sm={1} md={1} lg={1}/>
                {/* <Col xs={6} md={4}>
                    <Image src="https://s3-eu-west-1.amazonaws.com/aforslow.com/images/me_ai3.png" roundedCircle />
                </Col> */}
            </Row>
      </Container>
    )
}

export default Intro