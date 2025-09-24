import React, { useEffect, useRef } from 'react';
import './Cards.css';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Cards = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
        
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    });
  }, []);

  return (
    <div className='cards'>
      {[
        {
          img: "https://upload.wikimedia.org/wikipedia/en/b/b6/Minecraft_2024_cover_art.png",
          title: "Minecraft",
          text: "Sandbox Survival, Adventure Single-player + Multiplayer"
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3NLZRf3TnPml_X-y8LZ0BdO7DvpZG3N0Wpw&s",
          title: "Minecraft Dungeons",
          text: "Dungeon Crawl, Action RPG Single-player + Multiplayer"
        },
        {
          img: "https://www.aisd.net/wp-content/files/Minecraft-Education-Edition-1.png",
          title: "Minecraft Education",
          text: "Education, Sandbox Survival, Adventure Single-player + Multiplayer"
        },
        {
          img: "https://www.minecraft.net/content/dam/minecraftnet/games/badger/key-art/Homepage_Discover-our-games_MC-Legends-KeyArt_864x864.jpg",
          title: "Minecraft Legends",
          text: "Action RPG, Strategy Single-player + Multiplayer"
        }
      ].map((c, i) => (
        <div
          className="c1"
          key={i}
          ref={(el) => (cardsRef.current[i] = el)}
        >
          <img src={c.img} alt="l" />
          <div className='h'>{c.title}</div>
          <p>{c.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
