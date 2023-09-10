import React from 'react'
import './styles/navbar.css'
import logo from "./styles/pcsb.png";

function navbar() {
  return (
          <a href="/ " >

    <div className="navbar-demo">
      <img className="h-24 w-44 md:h-32 md:w-56 md:ml-12 mt-4 ml-4" src={logo} alt="logo"></img>
    </div>
    </a>
  );
}

export default navbar