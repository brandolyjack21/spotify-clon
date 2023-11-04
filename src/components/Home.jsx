import React from 'react'
import { useState } from 'react'

function Home() {

  const [ rotateTransition, setRotateTransition ] = useState(false)
  return (
    <section className='container-home'>
      <div className='container-spotify-title'>
        <h1>
            Spotify
        </h1>
      </div>
      <div className='container-lists-img-home'>
        <ul className='lists-img-home'>
            <li  className={ rotateTransition?'list1 list1next':'list1' }>
                <img src="./../../public/2_2.jpg" alt="" />
            </li>
            <li className={ rotateTransition?'list2 list2next':'list2' }>
                <img src="../../public/2_1.jpg" alt="" />
            </li>
            <li className={ rotateTransition?'list3 list3next':'list3' } onMouseEnter={() => setRotateTransition(true)} onMouseLeave={() => setRotateTransition(false)}>
                <img src="../../public/card3_3.jpg" alt="" />
            </li>
        </ul>

      </div>
    </section>
  )
}

export default Home
