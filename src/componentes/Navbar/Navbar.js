import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="Navbar">
            <Link to="/">Home</Link>
            <Link to="/Parcerias">Parcerias</Link>
            <Link to="/Cadastro"><button>Cadastre-se</button></Link>
        </div>
    )
}


export default Navbar;