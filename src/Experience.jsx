import React, { useEffect, useRef } from "react";
import "./Experience.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: "Survival Mode",
    desc: "Gather resources, craft tools, fight mobs, and survive the night.",
    img: "https://wallpapers.com/images/hd/minecraft_-pixel_-heart-png-zt0f4x78ofdiylqu.png",
  },
  {
    title: "Creative Mode",
    desc: "Unlimited blocks and resources. Build anything you can imagine.",
    img: "https://minecraft.wiki/images/Grass_Block_JE7_BE6.png?424c1",
  },
  {
    title: "Adventure Mode",
    desc: "Play custom maps, puzzles, and challenges made by the community.",
    img: "https://www.nicepng.com/png/full/208-2080448_minecraft-cookie-icon-minecraft-cookie.png",
  },
  {
    title: "Hardcore Mode",
    desc: "One life only. The ultimate test of skill and survival.",
    img: "https://i.pinimg.com/originals/b1/2c/00/b12c0098eb48ded4e549db9b6d2ce324.png",
  },
];

export default function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".exp-card");

    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="experience" ref={sectionRef}>
      <h2 className="exp-title">Minecraft Experiences</h2>
      <div className="exp-grid">
        {experiences.map((exp, i) => (
          <div className="exp-card" key={i}>
            <img src={exp.img} alt={exp.title} />
            <h3>{exp.title}</h3>
            <p>{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
