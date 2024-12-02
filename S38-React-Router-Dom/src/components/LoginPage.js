import React from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'

function LoginPage() {
  return (

    <div>
        <Navigation></Navigation>
      <form>
        <h1 className='loginH'>Login</h1>
        <div>
            <label>Email:</label>
            <input type="email" placeholder='Enter Your Email'></input>
        </div>
        <div>
            <label>Password:</label>
            <input type="password" placeholder='Enter Your Password'></input>
        </div>
        <div>
            <input type="checkbox" ></input>
            <label className='checkBox'>Show Password</label>
        </div>
        <div>
            <button type='button'>SIGN IN</button>
        </div>
        <h2 className='loginH1'>Fogot Username / Password?</h2>
        <h2 className='loginH1'> Don't have an account? Sign Up</h2>
      </form>
      <Link to="/SignUp">SignUp</Link>
    </div>
    
  )
}

export default LoginPage
