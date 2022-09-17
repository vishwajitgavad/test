import React from 'react'
import { Link } from "react-router-dom"
export default function Navbar() {
    return <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
            {/* <Link to="/" className="navbar-brand">Vishwajit</Link> */}
            <img className='m-0' src="https://www.freeiconspng.com/uploads/doctor-logo-png-photo-5.png" width="40" alt="Doctor Logo PNG Photo" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/" className="nav-link active" >
                        Home
                    </Link>
                   
                </div>
            </div>
        </div>
    </nav>
}
