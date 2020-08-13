import React from "react"
import CustomCardDeck from '../components/CustomCardDeck'
import CustomNavbar from "../components/CustomNavbar"
import CustomCarousel from '../components/CustomCarousel'
import Footer from '../components/Footer'
import Intro from '../components/Intro'

function Main() {
    return (
        <div>
          <CustomNavbar />
          <CustomCarousel />
          <hr/>
          {/* <Jumbotron>
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron> */}
          <br/>
          <br/>
          {/* <Container fluid> style={{"border-style": "solid", "max-width": "100%", outline: "2px solid #CCC"}}> */}
          <Intro />
          <hr />
          <br/>
          <br/>
          <CustomCardDeck />
          <br />
          <br />
          {/* <CustomCard 
            header="Food App"
            content="Go to the food app."
            name="food app"
            image="https://s3-eu-west-1.amazonaws.com/aforslow.com/images/DSC02068.jpg"
          />
          <CustomCard 
            header="Travel blog"
            content="Go to the travel blog."
            name="travel blog"
            image="https://s3-eu-west-1.amazonaws.com/aforslow.com/images/25074777_2611597838981656_5580211473137321313_o.jpg"
          />
          <CustomCard 
            header="Code blog"
            content="Go to the code blog."
            name="code blog"
            image="https://s3-eu-west-1.amazonaws.com/aforslow.com/images/gen_at_iteration_15_original_color.png"
          /> */}
          <Footer/>
        </div>
      );
}

export default Main