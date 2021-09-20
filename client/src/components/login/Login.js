import {Form, Button, Container, Navbar,Nav} from "react-bootstrap";
import Logo from "../../images/logo.png";
import {useState} from "react";
import "./Login.css"

const Login = () => {
  const [email,setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log( email + " " + password );
  }

    return  <><Navbar bg="light" variant="light">
    <Container>
 
      <Navbar.Brand href="#home" className="logo-heading">
      <img src={Logo} alt="logo" width="35px" className="m-2"/>
     RemoteCon
      </Navbar.Brand>
      
     </Container>
  </Navbar>
    
    
    
    <Container className="w-50 mt-5"><Form className="mt-5" onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" 
       value={email}
       onChange={(e) => setEmail(e.target.value)}
      />
      </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" 
       value={password}
       onChange={(e) => setPassword(e.target.value)}
      />
    </Form.Group>
    <Button variant="warning" type="submit">
    <a href="/newsfeed" className="submit-link">Submit</a>
    </Button>
  </Form>
  </Container> </>
}

export default Login; 