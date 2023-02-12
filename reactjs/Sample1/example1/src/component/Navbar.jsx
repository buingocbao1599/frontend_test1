import React from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

export default function Navbar() {

    const state = useSelector((state) => state.handleCart);
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">BAO COLLECTION</NavLink>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Link</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Contact</NavLink>
                            </li>
                        </ul>
                        <div className="buttons">
                            <NavLink to="https://www.youtube.com/watch?v=SSXA2XluIBU&ab_channel=TutorialsDev" className='btn btn-outline-dark'>
                                <i className="fa fa-sign-in me-1"></i> Login 
                            </NavLink>
                            <NavLink to="https://www.youtube.com/watch?v=SSXA2XluIBU&ab_channel=TutorialsDev" className='btn btn-outline-dark ms-2'>
                            <i className="fa fa-user-plus" aria-hidden="true"></i> Register 
                            </NavLink>
                            <NavLink to="/cart" className='btn btn-outline-dark ms-2'>
                            <i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart ({state.length}) 
                            </NavLink>
                        </div>
                        
                    </div>
                </div>
            </nav>


        </div>
    )
}
