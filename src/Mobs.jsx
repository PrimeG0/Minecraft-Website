import React from "react";
import "./Mobs.css";

const mobs = [
  { name: "Creeper", img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Creeper_%28Minecraft%29.png/130px-Creeper_%28Minecraft%29.png", desc: "Explosive mob that sneaks up silently and detonates." },
  { name: "Zombie", img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b8/Zombie_with_iron_shovel.png", desc: "Undead mob that burns in daylight and attacks players." },
  { name: "Skeleton", img: "https://minecraft.wiki/images/Lefthandedskeleton.png?2221f", desc: "Ranged attacker that shoots arrows from a distance." },
  { name: "Spider", img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/1f/Spider_JE4_BE3.png", desc: "Climbs walls and becomes passive in daylight." },
  { name: "Enderman", img: "https://www.nicepng.com/png/full/190-1906495_minecraft-enderman-5-minecraft-enderman-png.png", desc: "Tall, teleporting mob that hates being looked at." },
  { name: "Witch", img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/4c/Witch_BE.png", desc: "Throws potions and heals itself with brews." },
  { name: "Slime", img: "https://minecraft.wiki/images/Slime_JE3_BE2.png?5b6a7", desc: "Bounces and splits into smaller slimes on death." },
  { name: "Pig", img: "https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/1a/Pig_JE3_BE2.png", desc: "Passive mob that drops pork and can be ridden with a saddle." },
  { name: "Wolf", img: "https://minecraft.wiki/images/Woods_Wolf_JE1_BE1.png?5fee0", desc: "Can be tamed into a loyal dog companion." },
  { name: "Villager", img: "https://p.novaskin.me/3898723029.png", desc: "Passive mob that trades items with players." },
];

const Mobs = () => {
  return (
    <div className="mobs">
      {mobs.map((mob, i) => (
        <div key={i} className="mobcard">
          <img src={mob.img} alt='l' />
          <h3>{mob.name}</h3>
          <p>{mob.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Mobs;
