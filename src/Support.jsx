import React from "react";
import "./Support.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Support = () => {
  return (
    <>
    <Navbar></Navbar>
    <section className="supportsection">
      <h2>Support Me!</h2>
      <p>
        Love Minecraft as much as we do? Help us keep building awesome content,
        updates, and community events by supporting our work!
      </p>
      <div className="supportbut">
        <button>☕ Buy Me a Coffee</button>
        <button >💎 Donate</button>

      </div>
    </section>
    <Footer></Footer>
    </>
  );
};

export default Support;
