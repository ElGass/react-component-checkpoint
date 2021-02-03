import './App.css';
import React from "react";
import N from "./Component/Profile/FullName";
import T from "./Component/Profile/ProfilPhoto";
import A from "./Component/Profile/Address";
import navbar from 'react-bootstrap/Navbar';
import nav from 'react-bootstrap/Nav';

  

function App() {
  return (
  
      
    
      <div class="container">
    
    <div class="card-wrapper">
      
      <div class="card">
        
        <div class="card-image">
          <T></T>
        </div>

      <ul class="social-icons">
        <li>
          <a href="">
            <i class="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i class="fab fa-dribbble"></i>
          </a>
        </li>
      </ul>

      <div class="details">
        <h2><N></N>
          <span class="job-title"><A></A></span>
        </h2>
      </div>
    </div>
  </div>
      
    </div>
    

  );
}

export default App;
