import { useEffect, useState } from "react";
import arcade2 from "../assets/Arcade1.png";
import arcade3 from "../assets/Arcade2.png";
import arcade4 from "../assets/Arcade3.png";

const images = [arcade2, arcade3, arcade4];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const prevIndex = (index - 1 + images.length) % images.length;
  const nextIndex = (index + 1) % images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      
      setTimeout(() =>{
        setIndex((i) => (i + 1) % images.length);
        setTransitioning(false);
      },300)
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center gap-6 py-8">
      {/* Left Image */}
      <div className="w-32 h-20 opacity-60 hover:opacity-100 transition-transform duration-300 transform hover:scale-105 rounded overflow-hidden shadow-lg">
        <img
          src={images[prevIndex]}
          alt="Previous"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Center Image with transform animation */}
      <div className="w-[600px] h-[400px] border-2 border-[var(--primary)] rounded overflow-hidden shadow-xl">
        <img
          key={index} // force re-render for animation
          src={images[index]}
          alt="Current"
          className={`w-full h-full object-cover transition-all duration-300 ${
            transitioning ? "scale-95 opacity-70" : "scale-100 opacity-100"
          }`}
        />
      </div>

      {/* Right Image */}
      <div className="w-32 h-20 opacity-60 hover:opacity-100 transition-transform duration-300 transform hover:scale-105 rounded overflow-hidden shadow-lg">
        <img
          src={images[nextIndex]}
          alt="Next"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

  );
};

export default Carousel;
