import React from 'react'

function Home() {
  return (
    <section className='container-home'>
      <div className='container-spotify-title'>
        <h1>
            Spotify
        </h1>
      </div>
      <div className='container-lists-img-home'>
        <ul className='lists-img-home'>
            <li  className='list1'>
                <img src="./../../public/2_2.jpg" alt="" />
            </li>
            <li className='list2'>
                <img src="../../public/2_1.jpg" alt="" />
            </li>
            <li className='list3'>
                <img src="../../public/card3_3.jpg" alt="" />
            </li>
        </ul>

      </div>
    </section>
  )
}

export default Home
