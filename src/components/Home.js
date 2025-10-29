import React from 'react';
import '../App.css';
import myimage from "../profile pic/suryakandregula1.jpg";
export default function Home() {
  return (
    <div class="block">
      <div class="container" id='home'>
        <div class="detials">
          <h1>Hey..👋,I'AM
            <span>
              <span> DEVELOPER</span>
              <span> CODER</span>
              <span> PROGRAMMER</span>
              <span> DESIGNER</span>
              <span> FREELANCER</span>
            </span>
          </h1>
          <h1>I Build Responsive & Modern Websites.</h1>
          <div class="btn">
            <a href='#contact'><button>Contact</button></a>
            <a href='https://drive.google.com/file/d/1kkasOknOJBkSPTm-ee7rw1H3pdZmSXoE/view?usp=drivesdk' target="_blank" rel="noopener noreferrer"><button>Open CV</button></a>
          </div>
        </div>
        <div class="img_container">
          <img src={myimage} alt='surya_kandregula' />
        </div>
      </div>
    </div>
  )
}
