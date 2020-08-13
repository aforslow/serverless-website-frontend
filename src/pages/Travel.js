import React from "react"
import Jumbotron from "react-bootstrap/Jumbotron"
import CustomNavbar from "../components/CustomNavbar"
import CustomCardColumns from "../components/CustomCardColumns"

function Travel() {
    return (
        <div>
            <CustomNavbar />
            <Jumbotron>
                <h1>
                    Travel blog
                </h1>
            </Jumbotron>
            <CustomCardColumns />
        </div>
    )
}

export default Travel