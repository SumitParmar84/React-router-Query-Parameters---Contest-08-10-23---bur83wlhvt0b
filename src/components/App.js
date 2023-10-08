import React from "react";
import "../styles/App.css";
import { BrowserRouter as Router,Link, Routes,Route, Switch, useLocation } from "react-router-dom";
import Home from "./Home";
import Shapes from "./Shapes";
import Image from "./Image";




export default function App() {
  return (
    
    <Router>
      <div id="home">
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            {/* Home*/}
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* Shapes*/}
            <Link to="/shapes">Shapes</Link>
          </li>
          <li>
           {/* Image*/}
           <Link to="/image">Images</Link>
          </li>
        </ul>
      </nav>
      <Switch>
          <Route path="/shapes" component={Shapes} />
          <Route path="/image" component={Image} />
          <Route path="/" component={Home} />
          
      </Switch>
      
    </div>
       
    </Router>
      
  );
}
// export default App;
