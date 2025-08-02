import { useEffect, useState } from "react";
import arcade2 from "../assets/Arcade1.png";
import arcade3 from "../assets/Arcade2.png";
import arcade4 from "../assets/Arcade3.png";

const images = [arcade2, arcade3, arcade4];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [progress, setProgress] = useState(0); // progress for loading bar

  const prevIndex = (index - 1 + images.length) % images.length;
  const nextIndex = (index + 1) % images.length;

  useEffect(() => {
    const transitionDuration = 2700;
    const updateInterval = 50; // update every 50ms

    const transitionTimer = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % images.length);
        setTransitioning(false);
        setProgress(0);
      }, 300);
    }, transitionDuration);

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + (updateInterval / transitionDuration) * 100;
        return next >= 100 ? 100 : next;
      });
    }, updateInterval);

    return () => {
      clearInterval(transitionTimer);
      clearInterval(progressTimer);
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 py-8">


      <div className="flex justify-center items-center gap-6">
        {/* Left Image */}
        <div className="w-32 h-20 opacity-60 hover:opacity-100 transition-transform duration-300 transform hover:scale-105 rounded overflow-hidden shadow-lg">
          <img
            src={images[prevIndex]}
            alt="Previous"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Center Image */}
        <div className="md:w-[600px] md:h-[400px] sm:w-[400px] sm:h-[200px] border-2 border-[var(--primary)] rounded overflow-hidden shadow-xl">
          <img
            key={index}
            src={images[index]}
            alt="Current"
            className={`w-full h-full object-cover transition-all duration-300 ${
              transitioning ? "scale-105 opacity-70" : "scale-100 opacity-100"
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
            {/* Loading Progress Bar */}
      <div className="w-[300px] h-2 bg-gray-300 rounded-full overflow-hidden mb-2">
        <div
          className="h-full bg-[var(--primary)] "
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default Carousel;
