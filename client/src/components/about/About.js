import "./About.css"
import NavBar from "../partials/navbar/Navbar"
import {Container,Row,Col} from "react-bootstrap";
import ProfileImg from "../../images/profilepic.png"

const About = () => {
    return <>
      <NavBar/>
      <Container className="w-75">
         <Row className="m-auto w-25">  <img src={ProfileImg} alt="Profile pic" className='bio-pic mt-5' /> </Row>
           <hr className="mt-5"/>
           <h6>Name </h6>
           <p>
             Abdullah Bilal
           </p>
           <hr className="mt-5"/>
           <h6>Username</h6>
           <p>
               abdullah3902183
           </p>
           <hr className="mt-5"/>
           <h6>Bio</h6>
           <p>
               21 years old, studying computer science at University of Xyz.
               Hobbies : Gym, playing piano and tea parties with friends 
           </p>
           <hr className="mt-5"/>
           <Row>
               <Col xl={6}>
                 <h6>Website</h6>
                  <p>abdullahbilal@gmail.com</p>
               </Col>
               <Col xl={6}>
               <h6>Location</h6>
                  <p>Islamabad, Pakistan</p>
               </Col>
           </Row>

      </Container>
    </>
 }

 export default About; 