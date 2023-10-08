import React from 'react'
import "../styles/Shapes.css";
import { Link, useSearchParams } from 'react-router-dom'

  
 export default function Shapes() {
   const [param, setParams] = useSearchParams();
   const shape = params.get("shape");
   const color = param.get("color");
   
   
    
  
    // <Home />
    return (
      <div id='shapesdiv'>
        
          <h2>Shapes</h2>
          <ul className="navbar-shapes">
          <li>
            <Link to="/shapes?shape=square&color=Blue">Blue Square</Link>
          </li>
          <li>
            <Link to="/shapes?shape=square&color=Red">Red Square</Link>
          </li>
          <li>
            <Link to="/shapes?shape=circle&color=Blue">Blue Circle</Link>
          </li>
          <li>
            <Link to="/shapes?shape=circle&color=Red">Red Circle</Link>
          </li>
        </ul>
      <Child shape={shape} color={color}/>
          
        
      </div>
    );
  }
//   DO NOT touch CHILD function
  function Child({ shape,color }) {
    
    if (shape === "circle"){
        return (
          <div id ="circle"className = "divcircle" style={{backgroundColor: color}}>
            <h2>{shape}</h2>
          </div>
    
        );
      }
      else if (shape === "square"){
        return (
          <div id ="square"className = "divsquare" style={{backgroundColor: color}}>
            <h2>{shape}</h2>
          </div>
    
        );
      } 
      else return(
        <div id = "empty"className="empty"></div>
      )
      
  }

// export default Shapes
