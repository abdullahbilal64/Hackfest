import { Container, Navbar, Nav } from "react-bootstrap";
import ProfileImg from "../../../images/profilepic.png";
import Logo from "../../../images/logo.png";

import "./Navbar.css"
const NavBar = () => {
  return (
    <Navbar className="navbar" variant="light">
      <Container>
      {/* <img src={Logo} alt="logo" width="40px" /> */}
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
