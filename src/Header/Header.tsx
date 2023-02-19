import React from "react"
import './Header.css'
import 'cityIcon.png'

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'><img src="cityIcon.png"/>CitySearch</div>
    </header>
  )
}

export default Header