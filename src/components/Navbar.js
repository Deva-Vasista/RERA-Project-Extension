import React, { useState } from "react";
import logo from "./gujrerelogo.png";
import { Menu, Input } from 'antd';
import { useNavigate } from "react-router-dom";
import './Navbar.css'

const { Item } = Menu;
const { Search } = Input;

const Navbar = () => {
  let navigate = useNavigate();
  const routechange=()=>{
    navigate("/project-extension-detail");
  }

  const [searchQuery, setSearchQuery] = useState('');

  const handleMenuClick = ({ key }) => {
        navigate(key);
    };

  const handleSearch = (value) => {
        setSearchQuery(value);
        navigate(`/${value.toLowerCase().replace(/\s/g, '-')}`);
    };
  
    return (

      <div className="navbar">
  <div className="comp-cont">
    <div className="top-nav">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="Right">
        <div className="search-bar">
        <Search
                placeholder="Search for a page"
                onSearch={handleSearch}
                style={{ marginBottom: 20,width:350 }}
            />
        </div>
        <div className="menu">
          <button onClick={routechange}>DASHBOARD</button>
          <button>MISC</button>
        </div>
      </div>
    </div>
  </div>
  <div className="pic">
    <h3>Project Extension Form</h3>
  </div>
</div>

    );
  };
  export default Navbar;