import { useState } from 'react'
import { useEffect } from "react";
import './App.css'
import Navbar from './Navbar'
import { gsap } from "gsap";
import Cards from './Cards'
import Footer from './Footer'
import About from './About';
import Game from './Game';
import Support from './Support';


import { Routes, Route, useNavigate } from 'react-router-dom'
 

function App() {
const images = [
  "https://i.ytimg.com/vi/jMe3tdyjouM/maxresdefault.jpg",
  "https://i.ytimg.com/vi/1lWDHaqw-B4/maxresdefault.jpg",
  "https://ccdn.g-portal.com/M_Clive2023_teaser_f273abe544.jpg",
  "https://akm-img-a-in.tosshub.com/sites/itgaming/resources/202409/untitled-design-3190924052637.png"
];


  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };
    const navigate = useNavigate();


  return (
    <Routes>
      <Route path='/' element={
      <>
    
      <Navbar></Navbar>



      <div className='hero'>
        <img className='logo' src="https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/logos/Global-Header_MCCB-Logo_300x51.svg" alt="l" />
        <h3></h3>
        <button id='but1' onClick={() => navigate('/game')}>Play Now</button>
      </div>
      <h1 id='og'>DISCOVER OUR GAMES</h1>
      <Cards></Cards>
      <div className="content">

      <h1 id='og'>All Updates</h1>
      <div className="slider">
      <button className="prev" onClick={prevSlide}>❮</button>
      <img src={images[current]} alt="slider" className="slide-img" />
      <button className="next" onClick={nextSlide}>❯</button>
      </div>
      </div>
  
    <div className='Buy'>
    <h1 id='og'>Get Minecraft</h1>
    <div className='get'>
        
      <img src="https://www.minecraft.net/content/dam/minecraftnet/franchise/component-library/downloadHeroA/DownloadsHero_SEGD-25_1272x655.png" alt="" />
      <h2>Play all Minecraft games with one Launcher</h2>
      <button>Get Minecraft</button>
      
      
    </div>
    </div>

    <Footer></Footer>

    
    </>
    } />
    <Route path="/about" element={<About/>} />
    <Route path="/game" element={<Game/>} />
    <Route path="/support" element={<Support/>} />
    </Routes>
  )
  
}

export default App
