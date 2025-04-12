import ninos from "../assets/ninos.png";
import callejeros from "../assets/logocallejeros.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Carisma = () => {
  return (
    <div>

    <div className="flex flex-col items-center">
      <Header />
      <div className="md:flex items-center mt-20 p-20 gap-12 bg-gray-100 rounded-md md:w-[80%] justify-center 2xl:gap-0">
        <div className="md:w-1/2 md:flex flex-col items-center">
          <h2 className="text-4xl font-bold text-center p-5">
            Nuestro <span className="text-[rgb(22,232,22)]">Carisma</span>
          </h2>
          <div className="flex flex-col gap-10 ">

            <p className="2xl:w-2/3 sm:leading-loose">
                “El M.A.C. nace y se constituye, en el seno de la Iglesia, al objeto
                de trabajar en la construcción del Reino de Dios, dedicándose a la
                predicación del evangelio entre los niños y jóvenes de barrios
                populares y zonas marginales.”
            </p>
            <p className="2xl:w-2/3 sm:leading-loose">
                “De alguna manera estamos llamados a reproducir la imagen de Jesús
                que trata con los marginados, y que dice: “Dejad que los niños
                vengan a mí y no se lo impidáis.” (Mc 10,14)
            </p>
            <p className="2xl:w-2/3 sm:leading-loose">
                Tenemos que reconstruir la imagen tan olvidada de Jesús que “come y
                bebe con publicanos y pecadores” (Mt 9,10), que se deja tocar por la
                prostituta (cf. Lc 7, 36-50), que entra en casa de Zaqueo (cf. Lc
                19).”
            </p>
          </div>
        </div>
        <div className="flex justify-end md:w-1/2 mt-20 md:mt-0">
          <img
            className="rounded-md max-h-[600px]"
            src={ninos}
            alt="Carisma"
          />
        </div>
      </div>
      <div className="md:flex items-center mt-20 p-20 gap-12 bg-gray-100 rounded-md md:w-[80%] justify-center 2xl:gap-0">
        <div className="flex justify-end md:w-1/2 mt-20 md:mt-0 sm:mr-10">
          <img
            className="rounded-md max-h-[600px]"
            src={callejeros}
            alt="Carisma"
          />
        </div>
        <div className="md:w-1/2 md:flex flex-col items-center sm:ml-20">
          <h2 className="text-4xl font-bold text-center p-5 text-[rgb(22,232,22)]">
            Busqueda <span className="text-black">del joven</span>
          </h2>
          <div className="flex flex-col gap-10 ">

            <p className="2xl:w-2/3 sm:leading-loose">
                “El M.A.C. nace y se constituye, en el seno de la Iglesia, al objeto
                de trabajar en la construcción del Reino de Dios, dedicándose a la
                predicación del evangelio entre los niños y jóvenes de barrios
                populares y zonas marginales.”
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Carisma;
