import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav>
      <Link to="/">LoginPage</Link>
      <Link to="/SignUp">SignUp</Link>
      <Link to="/WelcomePage">WelcomePage</Link>
      <Link to="/Recipes">Recipes</Link>
    </nav>
  )
}

export default Navigation
