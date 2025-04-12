
import { useState } from "react";
import ninosJugando from "../assets/ninos_jugando.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Centros = () => {
  
   const sections = [
      {
        title: "Centros MAC",
        description:
          "Los centros MAC se encuentran actualmente en cinco parroquias de Málaga",
      },
      {
        title: "Salón de Bonaire",
        description: "Parroquia María, Madre de Dios, situada en Av. Virgen de Belén, 12 (barriada de La Luz-Bonaire)",
      },
      {
        title: "Salón de Dos Hermanas",
        description: "Parroquia Virgen del Camino, situada en C/ Emilio Lafuente Alcántara (barriada de Dos hermanas).",
      },
      {
        title:"Salón de Los Prados",
        description:"Parroquia Dulce Nombre de María, en C/ Espacio, 44 (barriada de Los Prados)"
      },
      {
        title:"Salón Del Palo",
        description:"Parroquia Ntra. Sra. de las Angustias, en Calle Villafuerte, 1 (barriada El Palo)"
      },
      {
        title:"Salón de La Asunción",
        description:"Parroquia de La Asunción, en Av. Ortega y Gasset, 4 (Plaza Cruz de Humilladero, s/n)"
      }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSection = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sections.length);
    };
  
    const prevSection = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? sections.length - 1 : prevIndex - 1
      );
    };
  return (
    <div>

      <div className="flex flex-col items-center">
        <Header />
        <div className="md:flex items-center mt-20 p-20 gap-12 bg-gray-100 rounded-md md:w-[80%] justify-center 2xl:gap-0">
          <div className="md:w-1/2 md:flex flex-col items-center gap-10">
            <h2 className="text-4xl font-bold text-center p-5">
              Nuestros <span className="text-[rgb(22,232,22)]">Centros</span>
            </h2>
            <p className="2xl:w-2/3">
              Los centros MAC prestan su servicio apostólico en las parroquias de
              los barrios en los que se encuentra presente, desarrollando dicho
              servicio con los niños y jóvenes, en especial con los más alejados
              de la parroquia.
            </p>
            <p className="2xl:w-2/3">
              El objetivo esencial de nuestro apostolado es el de evangelizar a
              los niños y jóvenes para que conozcan a Jesús y acercarlos a la
              Iglesia.
            </p>
          </div>
          <div className="flex justify-end md:w-1/2 mt-20 md:mt-0">
            <img
              className="rounded-md "
              src={ninosJugando}
              alt="Centros"
            />
          </div>
        </div>
        {/* carrousel */}
        <div className="relative w-full max-w-3xl mt-10 p-20 ">
          {/* Contenedor principal */}
          <div className="relative overflow-hidden bg-black  rounded-lg shadow-lg p-8 text-center">
            {/* Imagen flotante */}
  
            {/* Título y descripción */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold  text-white">
                {sections[currentIndex].title}
              </h2>
              <p className="mt-4 text-white">
                {sections[currentIndex].description}
              </p>
            </div>
          </div>
  
          {/* Botones de navegación */}
          <button
            onClick={prevSection}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-200">
            &lt;
          </button>
          <button
            onClick={nextSection}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-200">
            &gt;
          </button>
        </div>
      </div>
        <Footer/>
    </div>
  );
};

export default Centros;
