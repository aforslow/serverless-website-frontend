import React from 'react'
import logo from './logo.svg'
import './App.css'
import CustomNavbar from "./components/CustomNavbar"
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomCarousel from './components/CustomCarousel'
import CustomJumbotron from './components/CustomJumbotron'
import CustomCard from './components/CustomCard'
import CustomCardDeck from './components/CustomCardDeck'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Footer from './components/Footer'
import Intro from './components/Intro'
import Main from './pages/Main'
import NotFound from './pages/NotFound'
import Travel from './pages/Travel'
import Code from './pages/Code'
import Food from './pages/Food'
import BlogPostPage from './pages/BlogPostPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import NotImplemented from './pages/NotImplemented'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import { useMutation } from '@apollo/react-hooks';
import CreateBlogPostFormPage from './pages/CreateBlogPostFormPage'
import SubscribePage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

const client = new ApolloClient({
  uri: 'http://localhost:62222/graphql',
  headers: {
    // "Content-Type": "application/json",
    "x-api-key": "APIKEY"
  }
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/404" component={NotFound} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/food" component={Food} />
          <Route path="/create/create_blog_post/:blog_post_type" component={CreateBlogPostFormPage} />
          <Route path="/food/:blogpostId" component={BlogPostPage} />
          <Route exact path="/code" component={Code} />
          <Route exact path="/travel" component={Travel} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </ApolloProvider>
    
  )
  //   <div>
  //     <CustomNavbar />
  //     <CustomCarousel />
  //     <hr/>
  //     {/* <Jumbotron>
  //       <h1>Hello, world!</h1>
  //       <p>
  //         This is a simple hero unit, a simple jumbotron-style component for calling
  //         extra attention to featured content or information.
  //       </p>
  //       <p>
  //         <Button variant="primary">Learn more</Button>
  //       </p>
  //     </Jumbotron> */}
  //     <br/>
  //     <br/>
  //     {/* <Container fluid> style={{"border-style": "solid", "max-width": "100%", outline: "2px solid #CCC"}}> */}
  //     <Intro />
  //     <hr />
  //     <br/>
  //     <br/>
  //     <CustomCardDeck />
  //     <br />
  //     <br />
  //     {/* <CustomCard 
  //       header="Food App"
  //       content="Go to the food app."
  //       name="food app"
  //       image="https://s3-eu-west-1.amazonaws.com/aforslow.com/images/DSC02068.jpg"
  //     />
  //     <CustomCard 
  //       header="Travel blog"
  //       content="Go to the travel blog."
  //       name="travel blog"
  //       image="https://s3-eu-west-1.amazonaws.com/aforslow.com/images/25074777_2611597838981656_5580211473137321313_o.jpg"
  //     />
  //     <CustomCard 
  //       header="Code blog"
  //       content="Go to the code blog."
  //       name="code blog"
  //       image="https://s3-eu-west-1.amazonaws.com/aforslow.com/images/gen_at_iteration_15_original_color.png"
  //     /> */}
  //     <Footer/>
  //   </div>
  // );
}

export default App;
