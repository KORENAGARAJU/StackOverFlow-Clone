import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import search from '../../assets/search-solid.svg'
const NavBar = ()=>{
    return (
        <nav>
            <div className="navBar">
                 <Link to='/' className="nav-item nav-btn">
                    <img src={logo} alt="logo"/>
                 </Link>
                 <Link to='/'className="nav-item nav-btn">About</Link>
                 <Link to='/'className="nav-item nav-btn">Products</Link>
                 <Link to='/'className="nav-item nav-btn">For Teams</Link>
                 <form>
                    <input type="text" placeholder="Search..."/>
                    <img src={search} alt="search" width="18"/> 
                 </form>

            </div>
        </nav>
    )
}
export default NavBar ;