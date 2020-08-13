import React from "react"
import CustomNavbar from "../components/CustomNavbar"
import Jumbotron from "react-bootstrap/Jumbotron"

function NotFound() {
    return (
        <div>
            <CustomNavbar />
            <Jumbotron>
                <h1>
                    404 Not Found
                </h1>
            </Jumbotron>
        </div>
    )
}

export default NotFound