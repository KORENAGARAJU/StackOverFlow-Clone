import React from "react"
import { Link } from "react-router-dom"
import logo from '../../assets/logo.png'
import search from '../../assets/search-solid.svg'
import Avatar from '../../components/Avatar/Avatar' 
import './NavBar.css' 

const NavBar = ()=>{
    //authentication details:
    let User = null ;
    return (
        <nav className="main-nav">
            <div className="navBar">
                <Link to='/' className="nav-item nav-logo">
                    <img src={logo} alt="logo"/>
                </Link>
                <Link to='/'className="nav-item nav-btn">About</Link>
                <Link to='/'className="nav-item nav-btn">Products</Link>
                <Link to='/'className="nav-item nav-btn">For Teams</Link>
                <form>
                    <input type="text" placeholder="Search..." />
                    <img src={search} alt="search" width="18" className="Search-Bar"/> 
                </form>
                {User === null ? 
                     <Link to='/Auth' className="nav-item nav-links">Log in</Link> :
                     <>
                        <Link to='/User' style={{textDecoration:'none'}}><Avatar borderRadius='50%' backgroundColor='#009dff' px='10px' py='7px' color='white' cursor='pointer'>N</Avatar></Link>
                        <button className="nav-item nav-links">Log out</button>
                     </>
                 }
            </div>
        </nav>
    )
}
export default NavBar ;