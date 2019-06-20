import React from 'react';

function Footer (){
    return (
        <div style={footerStyle}>
            <p>All reserved 2019</p>
        </div>
    );
}
const footerStyle={
    background: '#333',
    marginTop: '20px',
    color: '#fff',
    textAlign: 'center',
    padding: '15px',
}
export default Footer;