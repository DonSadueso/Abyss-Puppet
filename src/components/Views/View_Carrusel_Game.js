import React, { useEffect, useRef, useState } from "react";
import '../Style/View_Carrusel_Game.css'

export const View_Carrusel_Game = () => {
const sectionRef = useRef(null); // Referencia al elemento

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

  const images = [
    {
      className: "Carrusel_img_1",
      nombre: "Little Nightmare",
      descripcion: "Explora un mundo de pesadilla donde todo es más grande... y más peligroso.",
      descargas: "12K",
      estrellas: "★★★☆☆",
      precio: "$2.99"
    },
    {
      className: "Carrusel_img_2",
      nombre: "Five Nights at Freddy's",
      descripcion: "Sobrevive cinco noches vigilando a los animatrónicos en esta pizzería aterradora.",
      descargas: "150K",
      estrellas: "★★★★☆",
      precio: "$3.56"
    },
    {
      className: "Carrusel_img_3",
      nombre: "R.E.P.O",
      descripcion: "Extrae recursos en misiones cooperativas mientras evitas monstruos acechantes.",
      descargas: "22K",
      estrellas: "★★★★☆",
      precio: "$1.99"
    },
    {
      className: "Carrusel_img_4",
      nombre: "Outlast",
      descripcion: "Descubre secretos oscuros en un hospital psiquiátrico abandonado. ¿Podrás salir?",
      descargas: "300K",
      estrellas: "★★★★★",
      precio: "$10.99"
    },
    {
      className: "Carrusel_img_5",
      nombre: "Limbo",
      descripcion: "Sumérgete en una aventura en blanco y negro, llena de misterio y peligro.",
      descargas: "200K",
      estrellas: "★★★★☆",
      precio: "$5.99"
    },
    {
      className: "Carrusel_img_6",
      nombre: "Resident Evil 7",
      descripcion: "Una experiencia de horror en primera persona con supervivencia al límite.",
      descargas: "500K",
      estrellas: "★★★★★",
      precio: "$8.99"
    }
    /*
    "Carrusel_img_1",
    "Carrusel_img_2",
    "Carrusel_img_3",
    "Carrusel_img_4",
    "Carrusel_img_5"*/
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };



  return (
    <div ref={sectionRef} className="Container_Carrusel_Game">
      <p className="Carrusel_Game_Title">--- Game Recommend ---</p>
      <button className="btn prev" onClick={handlePrev}>❮</button>

      <div className="Container_Carrusel">
        {images.map((img, index) => (
          <div
            key={index}
            className={`Carrusel_img ${img.className} ${index === currentIndex ? "active" : "inactive"}`}
          >
            {index === currentIndex && (
              <div className="descripcion">
                <h2>{img.nombre}</h2>
                <p>{img.descripcion}</p>
                <p>Descargas: {img.descargas}</p>
                <p>{img.estrellas}</p>
                <p>Precio: {img.precio}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <button className="btn next" onClick={handleNext}>❯</button>
    </div>
  );
};

