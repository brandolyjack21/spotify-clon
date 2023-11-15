import React from "react";
import { useState } from "react";
import HomeMenu from "./Home-menu";
import LibraryBox from "./LiibraryBox";

function Search() {
  return ( 

  
  <section class = "general-container" >
    
    <HomeMenu/>
    <div class="container-search">
        
        <div className="search-navbar">
            <button class="nav-buttom" ><i class='bx bx-chevron-left'></i></button>
            <button class="nav-buttom"><i class='bx bx-chevron-right'></i></button>
            <div class="search-box" >
            <i class='bx bx-search' ></i>
            <input class="input-field" autoComplete="off" type="text" placeholder="¿Que te apetece escuchar?" />
            </div>
            <button class="install-buttom"><i class='bx bx-down-arrow-circle'></i> Instalar App</button>
            <button class="news-buttom"><i class='bx bx-bell' ></i></button>
            <div class="user-photo"></div>
    
                   
        </div>
        <div className="explore-content">
            <p>Explorar todo</p>
            <ul class="search-categories">
              {/* <li>cat1</li>
              <li>cat2</li>
              <li>cat3</li>
              <li>cat4</li>
              <li>cat5</li>
              <li>cat6</li>
              <li>cat7</li> */}
             

            </ul>
        </div>
        </div>
    
    {/* <HomeMenu/>
   
    
   
    <LibraryBox/> */}
    <LibraryBox/>
    
  </section>
  )
}

export default Search;
