import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';
import AllProjects from './components/AllProjects/AllProjects';
import Particle from './components/Animation/Particle';

function App() {
  return (
    <div className="App">     
      <Router>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}>
          <Particle></Particle>
        </div>  

        <Switch>
          
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/projects">
            <AllProjects></AllProjects>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
