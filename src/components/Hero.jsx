import { useState, useEffect } from "react";
import "../styles/hero.css";

import img1 from "../images/final.JPG";
import img2 from "../images/final2.JPG";
import img3 from "../images/final3.JPG";

const images = [img1, img2, img3];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
  <div className="hero-left">
    <div className="hero-carousel">
      <div className="overlay"></div>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Krishanth ${index + 1}`}
          className={index === current ? "active" : ""}
        />
      ))}
    </div>
  </div>

  <div className="hero-right">
  <div className="shape shape1"></div>
  <div className="shape shape2"></div>
  <div className="shape shape3"></div>
  <div className="shape shape4"></div>

  <h1>Krishanth Babu</h1>
  <h2>Computer Science Student & App Developer</h2>
  <p>I build clean, user-focused applications using React, Java, and Python.</p>
  <div className="hero-buttons">
    <a href="#projects" className="btn primary">View Projects</a>
    <a href="public/Krishanth-Babu-Resume.pdf" className="btn secondary">Resume</a>
  </div>
</div>
</section>
  );
}