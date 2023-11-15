import React, { useState } from 'react'

function Nav() {

  const [ navPlus, setNavPlus ] = useState(false)
  return (
    <nav className='nav'>
      <div className='nav-logo'>
        <span className='logo'>
            Spotify
        </span>
      </div>
      <div className='button-navbar'>
        <button className='button-send-navbar'>send your demos</button>
      </div>

      <div className={ navPlus? 'container-list-menu container-list-menu-plus':'container-list-menu' }>
        <ul className='list-menu'>
            <li className='option-list-home' onClick={() => setNavPlus(!navPlus)}><i class='bx bx-menu'></i>Home</li>
            <li className='option-list-about'>About</li>
            <li className='option-list-artists'>Artists</li>
            <li className='option-list-releases'>Releases</li>
            <li className='option-list-contact'>Contact</li>
        </ul>
        <ul className={ navPlus?'container-list-menu-options container-list-menu-options-visibility':'container-list-menu-options' }>
          <ul className='lists-menu-plus'>
            <h4 className='h4-explore'>Explore</h4>
            <li>Home</li>
            <li>Careers</li>
            <li>Artist</li>
            <li>Licenses</li>
          </ul>
          <ul className='lists-menu-plus'>
            <h4 className='h4-follow'>follow</h4>
            <li>compañero 1</li>
            <li>compañero 2</li>
            <li>compañero 3</li>
          </ul>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
