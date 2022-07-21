import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component{
    render() {
        return(
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">
                        Pension Management System
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/" >
                                Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/loginabs"  className="nav-link">Login</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                
            </>
        )
    }
}
export default Home; 