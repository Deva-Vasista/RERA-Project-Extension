import React from "react";
import logo from "./gujrerelogo.png"
import './Navbar.css'
const Navbar = () => {
    return (
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="Right">
        <div className="search-bar">
          <input type="text" placeholder="Project, Agent, Promoter, Professional, Location" />
      
          <button id="searchicon" type="submit">search</button>
        </div>
        <div className="menu">
          <button>DASHBOARD</button>
          <button>MISC</button>
        </div>
      </div>
      </div>
    );
  };
  export default Navbar;