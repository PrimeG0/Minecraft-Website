import React from 'react'
import './Game.css'
import Navbar from './Navbar'
import Experience from './Experience'
import Footer from './Footer'
import Mobs from './Mobs'

const Game = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className='top'>

    <div className='about'>
        <h1>About The Game</h1>
        <Experience></Experience>       

   </div>
   <div>
    <h1>Biomes</h1>
    <div className='dd'>
        <h2 >Overworld</h2>
        <img id='img' src="https://www.minecraft.net/content/dam/minecraftnet/games/badger/screenshots/LegendsOverworld_Screenshot_blocks.jpg" alt="" />
        <p>The Overworld is the starting dimension — a vast, blocky land full of forests, deserts, oceans, caves, and mountains. It's where players gather resources, build shelters, and encounter both friendly animals and hostile mobs. From sunrise to sunset, the Overworld offers endless exploration and creativity.</p>
    </div >
    <div className='dd'>
        <h2>Nether</h2>
        <img id='img' src="https://www.4netplayers.com/images/blog/nether-tipps-tricks-fortgeschrittene/nether-portal-2.webp" alt="" />
        <p>The Nether is a fiery, dangerous underworld reached through a Nether Portal. It's filled with lava oceans, fortresses, and unique biomes like crimson forests and soul sand valleys. Hostile mobs roam everywhere, but rare resources like Nether Quartz, Ancient Debris, and Blaze Rods make this perilous dimension worth the risk.</p>
    </div>
    <div className='dd'>
        <h2>End</h2>
        <img id='img' src="https://ggservers.com/blog/wp-content/uploads/2025/04/image-1.png" alt="" />
        <p>The End is a mysterious void world made up of floating islands of End Stone. Here, players face the game's final boss: the Ender Dragon. Populated by Endermen and End Cities, the End is the gateway to powerful loot like Elytra wings and Shulker Shells. It marks the ultimate challenge for any adventurer.</p>
    </div>
   </div>
   <h1>MOBS</h1>


   <Mobs></Mobs>

   <img src="https://help.minecraft.net/hc/static/media/Homepage_Banner_Desktop.CiUMlNXT.jpg" alt="" />
   
    <Footer></Footer>
    </div>
    
    </>
  )
}

export default Game