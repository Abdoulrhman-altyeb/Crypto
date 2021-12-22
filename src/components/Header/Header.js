import React from 'react'
import './header.css'


// icons
import HeaderLogo from '../../assests/header/cryptopunk-logo.png';
import searchIcon from '../../assests/header/search.png';
import sun from '../../assests/header/theme-switch.png'

const Header = () => {
    return (
        <div className='header'>
            <div className="headerLogo">
                <img src={HeaderLogo} className='logo' alt='Logo'/>
            </div>

            <div className='SearchBar'>
                <div className='iconContainer'>
                    <img src={searchIcon} className='SearchIcon' alt='Icon'/>
                </div>
                <input className='searchInput' placeholder='Search, punkes or Users...' />
            </div>

            <div className='HeaderItems'>
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Create</p>
            </div>
            <div className='HeaderAction'>
                <div className='ThemeSwitchButton'>
                    <img src={sun} className='ThemeIcon' alt='icon'/>
                </div>
            </div>
            <div className='GetIngButton'>GET IN</div>

        </div>
    )
}

export default Header
