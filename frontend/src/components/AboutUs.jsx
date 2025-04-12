import mosaicoVirgen from "../assets/mosaicoVirgen.jpg";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center">

    <div className="md:flex items-center mt-20 p-20 gap-12  bg-gray-100 rounded-md md:w-[80%] justify-center 2xl:gap-0 " >
      <div className="md:w-1/2 md:flex flex-col items-center ">
        <h2 className="text-4xl font-bold text-center p-5 ">Sobre <span className=" text-[rgb(22,232,22)]">Nosotros</span></h2>
        <p className="2xl:w-2/3 ">
          El Movimiento de Acción Cristiana (M.A.C.) tiene su origen en el
          discurso programático de Jesucristo, plenamente actual, en la sinagoga
          de Nazaret: “El Espíritu del Señor está sobre mí, porque él me ha
          ungido. Me ha enviado para dar la Buena Noticia a los pobres, para
          anunciar a los cautivos la libertad, y a los ciegos la vista. Para dar
          la libertad a los oprimidos; para anunciar el año de gracia del Señor
          (…) Hoy se cumple esta Escritura que acabáis de oir” (Lc. 4, 16-21).
          El M.A.C brota en el seno de la Iglesia Católica en el año 1971, como
          una intuición, don del Espíritu, descubierta por parte del Iniciador,
          Juan Moreno García, consistente en prestar, desde las claves
          evangélicas, una atención preferente a unos ambientes de vida,
          situaciones humanas y edades determinadas.
        </p>
      </div>
      <div className=" flex justify-end md:w-1/2 mt-20 md:mt-0">
        <img className="rounded-md max-h-[400px]" src={mosaicoVirgen} alt="" />
      </div>
    </div>
    <div className="flex flex-col mt-20 p-20 gap-12  bg-gray-100 rounded-md md:w-[80%] justify-center 2xl:gap-0 ">
        <h2 className="text-4xl font-bold text-center p-5 pb-20 ">Nuestro <span className=" text-[rgb(22,232,22)]">Carisma</span></h2>
        <div className="flex flex-col items-center gap-20">
            <div className="flex justify-around w-full  ">
                <div className="ml-40">
                    <h3 className="font-bold text-xl p-5">Fe Cristocentrica</h3>
                    <p>Jesucristo</p>
                    <p>es el centro de mi vida.</p>
                </div>
                <div className="mr-40">
                    <h3 className="font-bold text-xl p-5">Anawin de Yahveh</h3>
                    <p>Una vida sencilla</p>
                    <p>abandonándonos en Él</p>
                </div>
            </div>
            <div className="flex justify-around w-full ">
            <div>
                    <h3 className="font-bold text-xl p-5">Sintesis Fe-Vida</h3>
                    <p>Coherencia en</p>
                    <p>nuestra forma de vida</p>
                </div>
                <div>
                    <h3 className="font-bold text-xl p-5">Evangelización Explícita</h3>
                    <p>Somos hijos de Jesús</p>
                    <p>y compartimos la buena Nueva</p>
                </div>
            </div>
            <div className="flex justify-center w-full ">
                <div>
                    <h3 className="font-bold text-xl p-5">Devoción Mariana</h3>
                    <p>Que sea real y sincera,</p>
                    <p>con manifestaciones sencillas</p>
                </div>
            </div>
            <button className="bg-black py-4 px-8 rounded-md hover:bg-[rgb(22,232,22)] hover:text-black font-semibold  text-white">Leer mas</button>
        </div>
    </div>
    </div>
  );
};

export default AboutUs;
