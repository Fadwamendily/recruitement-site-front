import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../assets/css/Navbar.css'
import { selectisauth } from '../features/users/userSlice'

const Navbar = () => {


/*     const isauth = useSelector(selectisauth)
 */
    const [isauth, setisauth] = useState(localStorage.getItem('isauth'))

    return (
        <div>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center justify-content-between">
                    <a href="index.html"><img src="assets/img/logo.png" style={{height: '100px'}} /></a>
                    {/* Uncomment below if you prefer to use text as a logo */}
                    {/* <h1 class="logo"><a href="index.html">Butterfly</a></h1> */}
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                            <li><a className="nav-link scrollto" href="#about">About</a></li>
                            <li><a className="nav-link scrollto" href="#services">Services</a></li>
                            <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
                            <li><a className="nav-link scrollto" href="#team">Team</a></li>
                            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                           { !isauth &&  <li><Link to='/login'><button  className="login-nav-item" >Login</button></Link></li> }                                                </ul>
                       
                    </nav>{/* .navbar */}
                </div>
            </header>{/* End Header */}

        </div>
    )
}

export default Navbar
