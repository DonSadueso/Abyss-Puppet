import React, { useEffect, useRef } from "react";
import "../Style/View_Game_Recent.css";
import GameRecentCard from "../JSX/GameRecentCard"; // Asegúrate de que la ruta sea correcta

export const View_Game_Recent = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const checkSections = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 1) {
          sectionRef.current.classList.add("visible");
        }
      }
    };

    window.addEventListener("scroll", checkSections);
    window.addEventListener("load", checkSections);
    
    return () => {
      window.removeEventListener("scroll", checkSections);
      window.removeEventListener("load", checkSections);
    };
  }, []);

  const games = [
    {
      name: "R.E.P.O",
      stars: "★★★★☆",
      image: "URL('../img/REPO_Portada.avif')", // reemplaza con tu imagen real
      description:
        "R.E.P.O. es un videojuego de terror cooperativo en línea con chat de voz de proximidad...",
    }
  ];

  return (
    <div ref={sectionRef} className="Container_Game_Recent">
      <h1 className="Game_Recent_Title">--- Game Recent ---</h1>
      {games.map((game, i) => (
        <GameRecentCard
          key={i}
          name={game.name}
          stars={game.stars}
          image={game.image}
          description={game.description}
          onButtonClick={() => alert(`Abrir ${game.name}`)}
        />
      ))}
    </div>
  );
};
