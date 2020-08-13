import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"

function Footer() {
    return (
        <footer className="customFooter">
            {/* <div className="footerDiv"> */}
                <Container>
                    <Row style={{margin: "auto"}}>
                        <Col xs={0} sm={0} md={4}></Col>
                        <Col xs={2} sm={2} md={2} style={{textAlign: "center", 
                            verticalAlign: "middle", display: "table-cell", height: "50px", lineHeight: "50px"}}>
                            <h4 style={{height: "100%", display: "inline-block"}}>
                                AFORSLOW
                            </h4>
                        </Col>
                        <Col xs={4} sm={4} md={2}></Col>
                        <Col xs={2} sm={2} md={1}>
                            <a href="https://www.instagram.com/aforslow/">
                                <Image src="https://img.icons8.com/fluent/48/000000/instagram-new.png" roundedCircle/>
                            </a>
                        </Col>
                        <Col xs={2} sm={2} md={1}>
                            <a href="https://twitter.com/AForslow">
                                <Image src="https://img.icons8.com/color/48/000000/twitter-circled.png" roundedCircle/>
                            </a>
                        </Col>
                        <Col xs={2} sm={2} md={1}>
                            <a href="https://www.linkedin.com/in/andreas-forsl%C3%B6w-79a84694/">
                                <Image src="https://img.icons8.com/color/48/000000/linkedin.png" roundedCircle/>
                            </a>
                        </Col>
                    </Row>
                    {/* <br />
                    <Row>
                        <Col md={1}>
                            <a href="https://www.instagram.com/aforslow/">
                                <Image src="https://img.icons8.com/fluent/48/000000/instagram-new.png" roundedCircle/>
                            </a>
                        </Col>
                        <Col md={1}>
                            <a href="https://twitter.com/AForslow">
                                <Image src="https://img.icons8.com/color/48/000000/twitter-circled.png" roundedCircle/>
                            </a>
                        </Col>
                        <Col>
                            Instagram
                        </Col>
                    </Row> */}
                </Container>
            {/* </div> */}
        </footer>
    )
}

export default Footer