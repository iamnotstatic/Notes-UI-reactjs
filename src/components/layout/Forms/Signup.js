import React, { Component } from 'react';

class Signup extends Component{
    render(){
        return (
            <form className='form'>
            <h2>Signup</h2>
                <input type="text" name="username" className="input"  placeholder="Username" />
                <input type="email" name="password" className="input"  placeholder="Email" />
                <input type="password" name="password" className="input"  placeholder="Password" />
                <input type="password" name="Cpassword" className="input"  placeholder="Reapeat Password" />
                <p style={{textAlign: 'center'}}>By clicking on Continue you have agree to our terms and condition</p>
                <input type="submit"  value="Submit" className="btn" />
            </form>
        );
    }
}

export default Signup;