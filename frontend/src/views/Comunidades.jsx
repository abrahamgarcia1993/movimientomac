import ninosJugando from "../assets/ninos_jugando.png";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Comunidades = () => {
  return (
    <div>

      <div className="flex flex-col items-center">
        <Header />
        <div className="md:flex items-center mt-20 p-20 gap-12 bg-gray-100 rounded-md md:w-[80%] justify-center 2xl:gap-0">
          <div className="md:w-1/2 md:flex flex-col items-center">
            <h2 className="text-4xl font-bold text-center p-5">
              Nuestras <span className="text-[rgb(22,232,22)]">Comunidades</span>
            </h2>
            <p className="2xl:w-2/3">
              La Sección Comunidades está formada por jóvenes a partir de 18 años,
              si bien podrán seguir simultáneamente en la Sección Centro como
              responsables animadores o desempeñando cargos de dirección en los
              Centros o Etapas de éstos.
            </p>
          </div>
          <div className="flex justify-end md:w-1/2 mt-20 md:mt-0">
            <img
              className="rounded-md "
              src={ninosJugando}
              alt="Comunidades"
            />
          </div>
        </div>
      </div>
        <Footer/>
    </div>
  );
};

export default Comunidades;
