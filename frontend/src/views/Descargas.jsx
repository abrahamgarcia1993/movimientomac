import Footer from "../components/Footer";
import Header from "../components/Header";
import { FcFolder } from "react-icons/fc";

const Descargas = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="flex flex-col items-center">
        <Header />
        <div className="md:flex items-center mt-20 p-20 gap-12 bg-gray-100 rounded-md md:w-[80%] justify-center 2xl:gap-0">
          <div className="md:w-1/2 md:flex flex-col items-center">
            <h2 className="text-4xl font-bold text-center p-5">
              Nuestras <span className="text-[rgb(22,232,22)]">Descargas</span>
            </h2>
          <div className="flex justify-center md:gap-20 md:w-1/2 mt-20 md:mt-0 flex-row">
            <a className="text-center font-bold md:text-2xl text-blue-600" href="https://github.com/MovimientoMAC/comunidades">
              <FcFolder className=" h-20 w-20 md:h-40 md:w-40" />
              Comunidades

            </a>
            <a className="text-center font-bold md:text-2xl text-blue-600" href="https://github.com/MovimientoMAC/leMAC">
              <FcFolder className=" h-20 w-20 md:h-40 md:w-40" />
              LeMac

            </a>
            <a className="text-center font-bold md:text-2xl text-blue-600" href="https://github.com/MovimientoMAC/canciones">
              <FcFolder className=" h-20 w-20 md:h-40 md:w-40" />
              Cancionero

            </a>
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Descargas;
