import React from 'react'
import logo from '../../source/images/logo.png'
import './Header.css'

function Header() {
  return (
    <header className='header'>
        <img src={logo} alt="" />
        <nav className='menu'>
            <span className='menu-item'>Главная</span>
            <span className='menu-item'>О нас</span>
            <span className='menu-item'>Продукция</span>
            <span className='menu-item'>Новости</span>
            <span className='menu-item'>Команда</span>
        </nav>
        <button className='with-us'>Свяжитесь с нами</button>
    </header>
  )
}

export default Header