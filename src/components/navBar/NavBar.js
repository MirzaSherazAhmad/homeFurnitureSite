import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo.webp"

const NavBar=()=> {
  return (
    <div>
        <div className='banner'>
        <div class="navbar">
            <img class="navbar__logo" src={logo}alt="navbar__logo"/>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link> </li>
                <li>
                    <Link to={'/dining'}>Dining table</Link> </li>
                <li>
                    <Link to={'/chair'}> Chairs</Link></li>
                <li>
                    <Link to={"/bedroom"}>luxury beds</Link> </li>
                <li>
                    <Link to={'/kitchen'}>Kitchen cabinets</Link> </li>
            </ul>
        </div>
        <div className='content'>
            <h1>Design Your Dream House</h1>
            <p>We Offer A Stylish Range Of Made To Order Sofas & Chairs For Your Home At Dunelm. <br/>
                 Browse Our Wide Selection Of Furniture To Find Your Perfect Fit. Shop Now! Easy Returns.</p>
            <div>
                <button class="explore" type="button"> <span></span>Sign In </button>

                <button class="design" type="button"> <span></span> Sign Up </button>
            </div>
        </div>
    </div>
    </div>
  )
}
export default NavBar
