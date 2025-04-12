import { useState } from "react";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

const LandingPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Arreglo de las secciones para el carrusel
  const slides = [
    {
      title: "ORA",
      text: "Orad, para no caer en la tentacion, Mateo. 26, 41",
    },
    {
      title: "LUCHA",
      text: "El que persevera hasta el fin se salvara, Mt. 24, 13S",
    },
    {
      title: "CONFÍA",
      text: "No se angustien. Confien en Dios, y confien tambien en mi, Juan. 14, 1",
    },
  ];

  // Manejador para avanzar
  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Manejador para retroceder
  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <Header />
      <main className="carrousel-main w-screen h-screen flex flex-col ">
        <div className="overflow-hidden w-full relative  mt-20">
          <div
            className=" h-3/4 flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {slides.map((slide, index) => (
              <section
                key={index}
                className="w-screen mt-80 flex-shrink-0 flex flex-col items-center justify-center text-center ">
                <h2 className=" title-shadow text-5xl font-bold">
                  {slide.title}
                </h2>
                <p className="mt-4 text-shadow text-white">{slide.text}</p>
              </section>
            ))}
          </div>
        </div>
        <div className=" relative top-20 space-x-4">
          <button
            onClick={handlePrev}
            className="bg-black  text-white px-3 py-1  rounded-full btn-hover">
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="bg-black text-white px-3 py-1 rounded-full btn-hover">
            &gt;
          </button>
        </div>

      </main>
      <AboutUs />
      <Footer/>
    </div>
  );
};

export default LandingPage;
