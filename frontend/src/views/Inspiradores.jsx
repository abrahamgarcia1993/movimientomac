import mosaicoVirgen from "../assets/mosaicoVirgen.jpg";
import carlos from "../assets/carlos.jpg";
import francisco from "../assets/francisco.jpg";
import manuelGonzalez from "../assets/manuelgonzalezobispo.jpg";
import teresita from "../assets/teresa-lisieux.jpg";
import maria from "../assets/inspi1.jpg";
import jesus from "../assets/jesus.jpg";
import Header from "../components/Header";
import { useState } from "react";
import Footer from "../components/Footer";

const Inspiradores = () => {
  const sections = [
    {
      title: "Fé Cristocentrica",
      description:
        "Quiere decir que Jesucristo es el centro de nuestra vida. Esto implicará un contacto constante y continuo con la oración y la Eucaristía. Esto último ayudará dos aspectos básicos de nuestra fe: la celebración en comunidad de la misma y, por otro lado, la participación del sacramento de la Reconciliación, a través del perdón recibido por el sacerdote.",
    },
    {
      title: "Evangelización explícita",
      description: "Somos hijos de Jesús, y hemos de compartir la buena nueva con el mundo.",
    },
    {
      title: "Devoción Mariana",
      description: "Que sea real y sincera, con manifestaciones sencillas.",
    },
    {
      title:"Espíritu Anawin de Yahveh",
      description:"Queremos una vida simple y sencilla, abandonándonos en las manos de Dios. Queremos una vida de servicio, de anonimato, sin pretender ocupar los primeros puestos, sino siempre el último lugar, como Jesús."
    },
    {
      title:"Síntesis Fe-Vida",
      description:"Coherencia en nuestra forma de vida. Ser cristianos siempre, en todo momento. Nuestros valores y nuestra creencia caminan de la mano en nuestra cotidianeidad. Ello debe tener un poder transformador hacia el mundo."
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
            <h2 className="text-3xl font-bold text-center p-5">
              Nuestros <span className="text-[rgb(22,232,22)]">Inspiradores</span>
            </h2>
            <p className="2xl:w-2/3">
              La patrona del Movimiento es la Virgen María, bajo la advocación de
              María Auxiliadora, auxilio de los cristianos. Los santos y hombres
              de Dios en el que se inspira nuestro carisma son San Juan Bosco, por
              su dedicación preferente y estilo con la juventud marginada, y de
              San Manuel González, obispo que fue de Málaga, por su espíritu
              evangelizador y catequético entre los niños y jóvenes más alejados.
            </p>
            <p className="2xl:w-2/3">
              Los santos y personas de Dios que por su vivencia y experiencia de
              Dios inspiran más la espiritualidad del MAC son: San Francisco de
              Asís, por su deseo de asemejarse a Jesucristo hasta en sus últimas
              consecuencias, por su estilo de vida ascética y austera, por su amor
              a la Creación, su búsqueda de la paz y su identidad con los más
              pobres. El Hermano Carlos de Foucauld, que supo conjugar intimidad
              con Dios y dedicación a los hermanos, estando en el corazón de las
              masas. Santa Teresa del Niño Jesús –Teresita de Lisieux-, que
              destacó por su humildad, sencillez y confianza en Dios, desde el
              caminito de la infancia espiritual. Patrona de las misiones, ofreció
              su vida por la salvación de las almas.
            </p>
          </div>
          <div className="flex justify-end md:w-1/2 mt-20 md:mt-0">
            <img
              className="rounded-md max-h-[400px]"
              src={mosaicoVirgen}
              alt="Inspiradores"
            />
          </div>
        </div>
        <div className="w-[80%] xl:w-[70%] 2xl:w-[60%] flex flex-wrap justify-between">
          <div className="md:w-[30%] aspect-square  mt-10 bg-black text-white flex justify-center items-center max-h-[407px] max-w-[416px]">
            <div className="w-1/2">
              <h3 className="text-center text-2xl">El Caminito</h3>
              <p className="text-center mt-2">
                Jesús pide a sus discípulos que vuelvan a ser "como niños"
              </p>
            </div>
          </div>
          <div className="group overflow-hidden md:w-[30%] aspect-square  mt-10">
            <img
              className="object-cover transform transition-transform duration-300 group-hover:scale-125"
              src={teresita}
              alt=""
            />
          </div>
          <div className="group overflow-hidden md:w-[30%] aspect-square  mt-10">
            <img
              className="object-cover transform transition-transform duration-300 group-hover:scale-125"
              src={carlos}
              alt=""
            />
          </div>
          <div className="group overflow-hidden md:w-[30%] aspect-square  mt-10">
            <img
              className="object-cover transform transition-transform duration-300 group-hover:scale-125"
              src={manuelGonzalez}
              alt=""
            />
          </div>
          <div className="group overflow-hidden md:w-[30%] aspect-square  mt-10">
            <img
              className="object-cover transform transition-transform duration-300 group-hover:scale-125"
              src={francisco}
              alt=""
            />
          </div>
          <div className="md:w-[30%] aspect-square  mt-10 bg-black text-white flex justify-center items-center max-h-[416px] max-w-[407px]">
            <div className="w-1/2">
              <h3 className="text-center text-2xl">Sagrario abandonado</h3>
              <p className="text-center mt-2">
                La importancia de la devoción y adoración hacia la eucaristía
              </p>
            </div>
          </div>
          <div className="md:w-[30%] aspect-square  mt-10 bg-black text-white flex justify-center items-center max-h-[407px] max-w-[416px]">
            <div className="w-1/2">
              <h3 className="text-center text-2xl">María Auxiliadora</h3>
              <p className="text-center mt-2">Ella lo ha hecho todo</p>
            </div>
          </div>
          <div className="group overflow-hidden md:w-[30%] aspect-square  mt-10 ">
            <img
              className="object-cover transform transition-transform duration-300 group-hover:scale-110"
              src={maria}
              alt=""
            />
          </div>
          <div className="group overflow-hidden md:w-[30%] aspect-square  mt-10">
            <img
              className="object-cover transform transition-transform duration-300 group-hover:scale-125"
              src={jesus}
              alt=""
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

export default Inspiradores;
