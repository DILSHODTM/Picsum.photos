
import React from 'react';
import { Link } from 'react-router-dom';



function Navbar(){


    return (
       <>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="container ">
                <a className="navbar-brand" >Picsum.photos</a>
               
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href='#' className="nav-link active" aria-current="page" >Home</a>
                        </li>
                        <li className="nav-item">
                            <a href='#' className="nav-link" >About</a>
                        </li>
                        <li className="nav-item">
                            <a href='#' className="nav-link" >Contact</a>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </nav>

       
     
       
       </>
    );

}

export default Navbar