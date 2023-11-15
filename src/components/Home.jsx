import React, { useEffect } from 'react'
import { useState } from 'react'

function Home() {

  const [ rotateTransition, setRotateTransition ] = useState(false)
  const [ count , setCount ] = useState(0)

  useEffect(() => {

    const addGridBackground = document.getElementById('grid-background')

    if (addGridBackground) {
      
    let countElementWidth = addGridBackground.offsetWidth / 10
    let countElement = addGridBackground.offsetHeight / countElementWidth
    let countElementTotal = countElement * 20
      setCount(countElement)
      for (let index = 0; index < countElementTotal ; index++) {
       const newElement = document.createElement('div')
       newElement.classList.add('divGridBackground')
       newElement.style.width = `${ countElementWidth }px`
       newElement.style.height = `${ countElementWidth }px`
       addGridBackground.appendChild(newElement);
      }
    }
        
  },[])


  return (
    <>
      <div id='grid-background' className='grid-background'>
      {
        
      }
      </div>
      <section className='container-home'>
      <div className='container-spotify-title'>
        <div className='container-search-music'>
          <input className='input-search-music' id='search-music' type="text" />
          <label htmlFor="search-music"><i class='bx bx-search'></i></label>
        </div>
      </div>
      <div className='container-lists-img-home'>
        <div className='container-banner-circle' onMouseEnter={() => setRotateTransition(true)} onMouseLeave={() => setRotateTransition(false)}>
        </div>
        <ul className='lists-img-home'>
            <li  className={ rotateTransition?'list1 list1next':'list1' }>
                <img src="./../../public/2_1.jpg" alt="" />
            </li>
            <li className={ rotateTransition?'list2 list2next':'list2' }>
                <img src="../../public/card3_3.jpg" alt="" />
            </li>
            <li className={ rotateTransition?'list3 list3next':'list3' } onMouseEnter={() => setRotateTransition(true)} onMouseLeave={() => setRotateTransition(false)}>
                <img src="../../public/2_2.jpg" alt="" />
            </li>
        </ul>

      </div>
    </section>
    </>
  )
}

export default Home
