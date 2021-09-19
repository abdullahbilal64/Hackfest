import { Container, Navbar, Nav } from "react-bootstrap";
import ProfileImg from "../../../images/profilepic.png";
import Logo from "../../../images/logo.png";
import "./Navbar.css";
import axios from "axios";
const authAxios  =axios.create({
  baseURL:'http://localhost:3001/',
  headers:{
      Authorization:`Bearer ${localStorage.getItem('token')}`
  }
});
const NavBar = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
      <img src={Logo} alt="logo" width="40px" />
        <Navbar.Brand href="#home" className="logo-heading">
        RemoteCon
        </Navbar.Brand>
        <Nav className=" nav-links justify-content-end">
          <Nav.Link href="#home">Feeds</Nav.Link>
          <Nav.Link href="#features">Chats</Nav.Link>
          <Nav.Link href="#pricing">Games</Nav.Link>
         <img src={ProfileImg} className="profilepic" alt="logo"/>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
