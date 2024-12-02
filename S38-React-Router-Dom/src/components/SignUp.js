import React from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div>
        <Navigation></Navigation>
      <form>
        <h1 className='loginH'>Sign Up</h1>
        <h2 className='loginH1'> it's quick and easy</h2>
        <hr></hr>
        <div>
            <label>First Name:</label>
            <input type="text" placeholder='Enter Your First Name'></input>
        </div>
        <div>
            <label>Last Name:</label>
            <input type="text" placeholder='Enter Your Last Name'></input>
        </div>
        <div>
            <label>Mobile No:</label>
            <input type="number" placeholder='Enter Your Mobile No'></input>
        </div>
        <div>
            <label>Email:</label>
            <input type="email" placeholder='Enter Your Email'></input>
        </div>
        <div>
            <label>New Password:</label>
            <input type="password" placeholder='Enter Your New Password'></input>
        </div>
        <fieldset>
            <legend>Please enter your Personal Details.</legend>
        <div>
            <label>Date of Birth:</label>
            <input type="date" placeholder='Enter Your Email'></input>
        </div>
        <div>
            <label>Gender</label>
            <select>
                <option>Select Gender</option>
                <option>Female</option>
                <option>Male</option>
                <option>Custom</option>
            </select>
        </div>
        </fieldset>
        <div>
            <button type="button">Sign Up</button>
        </div>
      </form>
      <Link to="/WelcomePage">WelcomePage</Link>
    </div>
  )
}

export default SignUp
