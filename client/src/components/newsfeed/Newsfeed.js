import NavBar from "../partials/navbar/Navbar";
import {Container,Form,Button,Row,Col} from "react-bootstrap"
import Post from "./posts/Post"
import Reminders from "./reminders/Reminders"

import Img1 from "../../images/1.png"
import Img2 from "../../images/2.png"
import Img3 from "../../images/3.png"
import Img4 from "../../images/4.png"

import "./Newsfeed.css"
const Newsfeed = () => {
  return (
    <div className="newsfeed-body">
      <NavBar />
      <Container >
          <Row >
              <Col xl={8} className="">
      <Form className="w-100 mt-5 form-input">
        <Form.Group className="input-day" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" placeHolder="What's going on ?" rows={5} />
          <Form.Control type="file" size="sm" className="img-upload" />
        </Form.Group>


        <Button variant="danger" className="post-btn mt-2">Post</Button>
       </Form>
 
     <Post img={Img1} name="Abdullah Bilal" desc="Out for my daily hike! Could not have asked for better weather."/>
     <Post img={Img2} name="Zohaib Adnan" desc="Starting off the day with a hefty breakfast! My mornings aren't complete without a nice cup of coffee. "/>
     <Post img={Img3} name="Ali Qumail" desc="sdaasd"/>
     <Post img={Img4} name="Abuzar" desc="sadsadd"/>
     
     
      </Col>
     
      <Col className="pt-5">
        <Reminders />
      </Col>
      </Row>

      </Container>
    </div>
  );
};

export default Newsfeed;
