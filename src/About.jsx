import { useState } from 'react'
import { useEffect } from "react";
import './About.css'
import Navbar from './Navbar'
import { gsap } from "gsap";
import Cards from './Cards'
import Footer from './Footer'
import Experience from './Experience';

import { Routes, Route, useNavigate } from 'react-router-dom'


const About = () => {

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
        <>
    <Navbar></Navbar>

    <div className='top'>
    <div className='about'>
        <h1>UPDATES</h1>
        <p>Step into a world of new adventures! The latest Minecraft update brings fresh biomes, improved mobs, and exciting features that make your survival and creative builds more immersive than ever. Stay tuned for patch notes, upcoming events, and exclusive content drops.</p>
    <div className='container'>
        <div className="slider">
      <button className="prev" onClick={prevSlide}>❮</button>
      <img src={images[current]} alt="slider" className="slide-img" />
      <button className="next" onClick={nextSlide}>❯</button>
      </div>
    </div>

    <div className='News'>
        <h1>News</h1>

        <div className='card'>
            <div className='c'>
                <img src="https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/05eee581-3112-4515-b17f-219ff6265ef8/96557df6-9268-40e6-9817-91dc86d0f3b4?host=wbd-images.prod-vod.h264.io&partner=beamcom" alt="" />
                <p>Minecraft movie live now!</p>

            </div>
            <div className='c'>
                <img src="https://staticg.sportskeeda.com/editor/2024/12/7aaf1-17350303483784-1920.jpg" alt="" />
                <p>The Overworld just got more colorful with new plant types, improved forests, and vibrant wildlife. Builders and explorers alike will love the fresh scenery.</p>

            </div>
            <div className='c'>
                <img src="https://minecraft.wiki/images/thumb/The_Nether.png/800px-The_Nether.png?92e82" alt="" />
                <p>Explore dangerous new structures, uncover rare loot, and face off against improved Piglins in the latest Nether expansion. Don’t forget to craft those Netherite tools before you dive in!</p>

            </div>
            <div className='c'>
                <img src="https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2025/03/Minecraft-Live-2025-Main-Art.jpg" alt="" />
                <p>Join players worldwide in the upcoming “Battle of Biomes” event next month! Team up, gather resources, and prove your biome is the strongest.</p>

            </div>
            
        </div>
        
        </div>

        <div className='mclive'>
            <h1>Minecraft Live</h1>
            <p>Get All our updates in Minecraft Live!</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/5QU20HMPZ3M?si=JVpCt3ZoZc0mU2Tp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        


    </div>
    <Footer></Footer>
    </div>
    </>
    
    )
}

export default About