import React from 'react';
import '../App.css';

export default function Navbar() {
  function dark(){
    const icon = document.getElementById("icon");
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")){
      icon.className="fa-regular fa-sun";
      icon.title="Light-mood";
    }else{
      icon.className="fa-solid fa-moon";
      icon.title="Dark-mood";
    }
  }
  return (
    <navbar class="nav">
        <div class="name"><h1>surya_kandregula</h1></div>
        <div class="navlinks">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <button onClick={dark}><i class="fa-solid fa-moon " id="icon"></i></button>
        </div>
      </navbar>
  )
}
