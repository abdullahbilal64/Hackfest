import './App.css';
import Newsfeed from "./components/newsfeed/Newsfeed";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import {Switch,Route, BrowserRouter} from "react-router-dom";

function App() {
  return (  <BrowserRouter>
    <div className="">
     <Switch>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/signin" component={Login} />
          <Route exact path="/newsfeed"><Newsfeed/></Route>
          <Route exact path="/about"><About/></Route>
     </Switch>
    </div></BrowserRouter>
  );
}

export default App;
