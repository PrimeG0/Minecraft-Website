import React from 'react'
import './Navbar.css'
import { Routes, Route, useNavigate } from 'react-router-dom'

const Navbar = () => {
      const navigate = useNavigate();
    return (
        <div>
            <div className='Navbar'>
                
                <div className='Nav'>
                   <img src="https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/logos/Global-Header_MCCB-Logo_300x51.svg" alt="" />                   
                        <li onClick={() => navigate('/')}>Home</li>
                        <li onClick={() => navigate('/about')}>News</li>
                        <li onClick={() => navigate('/game')}>Game</li>
                        <li onClick={() => navigate('/support')}>Support</li>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar
