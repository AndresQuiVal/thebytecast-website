import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/styles.css';

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <nav class="navbar navbar-expand-lg navbar-light"
                style={{
                    backgroundColor: '#1A1B1B',//'#333636',
                    width: '100%',
                }}>
                <img className='logo-img img-fluid' src='https://cdn.discordapp.com/attachments/741841654042067033/1019073416541778030/logo2.png'></img>
                <div className="col-md-7"></div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link style={{color: 'white'}} class="navbar-menus nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link style={{color: 'white'}} class="navbar-menus nav-link" to="/about-us">Acerca de</Link>
                    </li>
                    <li class="nav-item">
                        <Link style={{color: 'white'}} class="navbar-menus nav-link" to="/discord">¡Unete!</Link>
                    </li>
                    <li class="nav-item">
                        <Link style={{color: 'white'}} class="navbar-menus nav-link" to="/purchase">Adquirir Byte (pro)</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
 
export default Navbar;