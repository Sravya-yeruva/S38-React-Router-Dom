import React from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'

function WelcomePage() {
  return (

    <div className="bg-img">
        <Navigation></Navigation>
      <h1 className='welcomeH1'>Welcome! "😇"</h1>
      <h1 className='loginH1'>Good to See You Here</h1>
      <h1 className='welcomeH2'>Authentic dishes from home kitchens in your area..</h1>
      <h1>Flavours you won't find on a regular menu🍲</h1>
      <p className='welcomeP'>Thank you for showing your interest in supporting Home Chefs in your area. We've got exciting chef profiles and promotions coming your way. and we can't wait for you to take your first bite.</p>
      <p className='welcomeP1'>Be the first to order, and the last to put your fork down.</p>
      <div>
        <button className='welcomeB' >Learn about Tre'dish</button>
      </div>
     
      <Link to="/Recipes">Recipes</Link>
      
    </div>
  )
}

export default WelcomePage
