import "./Home.css";
import BgImg from "../../images/conference_table.png" 
import {Container,Button} from "react-bootstrap"
import {Link} from "react-router-dom";
import Login from "../../images/logo.png";

const Home = () => {
    return <div className="login-body">
      <Container fluid>
      <header>
        <p>  <img src={Login} alt="logo" width="15%"/>   remoteCon.</p>
    </header>
    <main>  
        <p id="title" className="title">Remotecon.</p>
        <p id="subtitle">Where Remotebase employees socialize.</p>
        <button id="sign_in"  className="sign-btn"><Link to="/signin" className="link">SIGN IN</Link></button>
        <p id="conference">
            <img id="conference_table" src={BgImg} alt="A conference table"/>
        </p>
    </main>
    <footer className="footer">
        <p>Created with &#x2764; by FASTians</p>
    </footer>
    </Container>
    </div> 
}

export default Home;