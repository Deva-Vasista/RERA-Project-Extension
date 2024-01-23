import React from "react";
import logo from "./gujrerelogo.png"
import { useNavigate } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  let nav = useNavigate();
  const routechange=()=>{
    nav("/project-extension-detail");
  }
    return (

      <div className="navbar">
      <div className="top-nav">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="Right">
        <div className="search-bar">
          <input type="text" placeholder="Project, Agent, Promoter, Professional, Location" />
      
          <button id="searchicon" type="submit">search</button>
        </div>
        <div className="menu">
          <button onClick={routechange}>DASHBOARD</button>
          <button>MISC</button>
        </div>
        </div>
      </div>
      </div>
    );
  };
  export default Navbar;