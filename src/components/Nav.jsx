import React from 'react'

function Nav() {
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

      <div className='container-list-menu'>
        <ul className='list-menu'>
            <li>Home</li>
            <li>About</li>
            <li>Artists</li>
            <li>Releases</li>
            <li>Contact</li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
