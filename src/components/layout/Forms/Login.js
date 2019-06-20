import React, { Component } from 'react';


class Login extends Component{
    render(){
        return(
            <form className='form'>
            <h2>Login</h2>
                <input type="text" name="username" className="input"  placeholder="Username or Email" />
                <input type="password" name="password" className="input"  placeholder="Password" />
                <input type="submit"  value="Submit" className="btn" />
                <p>Forgotten password?</p>
            </form>
        );
    }

}


export default Login;