import React from 'react'
import { Link } from 'react-router-dom'
import Portfolio from '../Portfolio/Portfolio'


export default function Navbar() {
  return (
    <div>
          <nav class="navbar Navbar navbar-expand-lg  p-4">
  <div class="container-fluid">
    <a class="navbar-brand fw-bold text-white fs-2" href="#">REACT FRAMEWORK</a>
    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNavDropdown">
      <ul class="navbar-nav text-center m-auto me-5  ">
      <li class="nav-item">
          <Link class="nav-link active text-white fw-bold" aria-current="page" to={'Home'}>HOME</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active text-white fw-bold" aria-current="page" to={'About'}>ABOUT</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white " to={'Portfolio'}>PORTFOLIO</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white " to={'Contact'}>CONTACT</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
      
    </div>
  )
}
