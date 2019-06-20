import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header style={headerStyle}>
            <Link style={{color: '#fff',  fontSize: '25px', top: '0px'}} to="/">YOURNOTE</Link>
            <Link style={linkStyle} to="login">Login</Link>
            <Link  style={linkStyle} to="signup">Signup</Link>
        </header>
    );
}

const headerStyle ={
    background: '#333',
    color: '#fff',
    marginBottom: '20px',
    padding: '10px',
}

const linkStyle = {
    padding: '5px',
    margin: '5px',
    border: '1px solid #fff',
    borderRadius: '5px',
    float: 'right',
    color: '#fff',
    textDecoration: 'none',
    
}
export default Header;