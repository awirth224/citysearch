import React from "react"
import './Header.css'
import '../cityIcon.png'
import '../City.jpeg'
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className='header'>
     <Link className="logo" to={'/'}>CitySearch </Link>
    </header>
  )
}

export default Header