import ninosJugando from "../assets/ninos_jugando.png";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Noticias = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <Header />
        <div className="md:flex items-center mt-20 p-20 gap-12 bg-gray-100 rounded-md md:w-[70%] justify-center 2xl:gap-0">
          <div className="md:w-1/2 md:flex flex-col items-center gap-10">
            <h2 className="text-4xl font-bold text-center p-5">
              Nos vamos al{" "}
              <span className="text-[rgb(22,232,22)]">Campamento</span>
            </h2>
            <p className="2xl:w-2/3">
              Cómo todos los veranos los diferentes centros del MAC nos vamos de
              campamento en dos tandas: pequeños y mayores.
            </p>
          </div>
          <div className="flex justify-end md:w-1/2 mt-20 md:mt-0">
            <img
              className="rounded-md max-h-[600px]"
              src={ninosJugando}
              alt="Noticias"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Noticias;
