import NavBar from "../partials/navbar/Navbar";
import {Container,Form,Button,Row,Col} from "react-bootstrap"
import Post from "./posts/Post"
import Reminders from "./reminders/Reminders"

import "./Newsfeed.css"
const Newsfeed = () => {
  return (
    <>
      <NavBar />
      <Container>
          <Row >
              <Col xl={8}>
      <Form className="w-100 mt-5">
        <Form.Group className="input-day" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" placeHolder="What's going on ?" rows={5} />
          <Form.Control type="file" size="sm" className="img-upload" />
        </Form.Group>


        <Button variant="danger" className="post-btn mt-2">Post</Button>
       </Form>
 

      <Post/>
      </Col>
     
      <Col className="pt-5">
        <Reminders />
      </Col>
      </Row>

      </Container>
    </>
  );
};

export default Newsfeed;
