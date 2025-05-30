import { useEffect, useState } from "react";

//ID, state, x, y, opacity, animationDuration
//id, state, x, y, delay, animationDuration

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, SetMeteors] = useState([]);
  const [falling, setFalling] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();
    generateFalling();

    const handleResize = () => {
      generateStars();
    }
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener("resize" ,handleResize)
    }, []);

    //different number of stars on differenct screen size
    const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

    //different number of stars on differenct screen size
    const generateMeteors = () => {
    const numberOfMeteors = 15;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,  
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }
    SetMeteors(newMeteors);
  };

  const generateFalling = () => {
    const numberOfFalling = 2;
    const newFalling = [];

    for (let i = 0; i < numberOfFalling; i++) {
      newFalling.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,  
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }
    setFalling(newFalling);
  };


    return (
        <div className = "fixed inset-0 overflow-hidden pointer-events-none z-0"> 
            {stars.map((star) => (
                <div key = {star.id} className="star animate-pulse-subtle" style = {{
                    width: star.size + "px",
                    height: star.size + "px" ,
                    left: star.x + "%",
                    top: star.y + "%",
                    opacity: star.opacity,
                    animateDuration: star.animationDuration + "s",
                }}/>
            ))}

            {meteors.map((meteor) => (
                <div key = {meteor.id} className="meteor  animate-meteor" style = {{
                    width: meteor.size + "px",
                    height: meteor.size + "px" ,
                    left: meteor.x + "%",
                    top: meteor.y + "%",
                    animationDelay: meteor.delay,
                    animateDuration: meteor.animationDuration + "s",
                }}/>
            ))}

            {falling.map((fall) => (
                <div
                  key={fall.id}
                  className="meteor animate-meteor"
                  style={{
                    width: fall.size * 30+"px",
                    height: fall.size * 2 + "px",
                    left: fall.x + "%",
                    top: fall.y + "%",
                    animationDelay: fall.delay ,
                    animationDuration: fall.animateDuration + "s",
                  }}
                />
              ))}


        </div >
    );
};
