import "./Home.css";
import BgImg from "../../images/conference_table.png" 
import {Container,Button} from "react-bootstrap"
import {Link} from "react-router-dom";
const Home = () => {
    return <div className="login-body">
      <Container fluid>
      <header>
        <p>remoteCon.</p>
    </header>
    <main>
        <p id="title" className="title">Remotecon.</p>
        <p id="subtitle">Where Remotebase employees socialize.</p>
        <Button id="" size="lg" variant="danger" className="sign-btn"><Link to="/signin" className="sign-btn">SIGN IN</Link></Button>
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