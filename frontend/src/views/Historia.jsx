import historia from "../assets/historia.webp";
import amor from "../assets/amor.jpg";
import dar from "../assets/dar.jpg";
import uno from "../assets/uno.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Historia = () => {
  return (
    <div>

    <div className="flex flex-col items-center">
      <Header />
      <div className="md:flex items-center mt-20 p-20 gap-12 bg-gray-100 rounded-md md:w-[80%] justify-center 2xl:gap-0">
        <div className="md:w-1/2 md:flex flex-col items-center gap-10">
          <h2 className="text-4xl font-bold text-center p-5">
            Nuestra <span className="text-[rgb(22,232,22)]">Historia</span>
          </h2>
          <p className="2xl:w-2/3">
            «El Movimiento de Acción Cristiana (MAC) tiene su origen en el
            discurso programático de Jesucristo, plenamente actual, en la
            sinagoga de Nazaret: “El Espíritu del Señor está sobre mí, porque él
            me ha ungido. Me ha enviado para dar la Buena Noticia a los pobres,
            para anunciar a los cautivos la libertad, y a los ciegos la vista.
            Para dar la libertad a los oprimidos; para anunciar el año de gracia
            del Señor (…) Hoy se cumple esta Escritura que acabáis de oír” (Lc.
            4, 16-21).
          </p>
        </div>
        <div className="flex justify-end md:w-1/2 mt-20 md:mt-0">
          <img
            className="rounded-md max-h-[400px]"
            src={historia}
            alt="Historia"
          />
        </div>
      </div>
      <div className="md:flex items-center mt-20 p-20 gap-12 bg-gray-100 rounded-md md:w-[90%] 2xl:w-[80%] justify-center 2xl:gap-0">
        <div className="flex justify-end md:w-1/2 mt-20 md:mt-0">
          <img
            className="rounded-md max-h-[400px]"
            src={amor}
            alt="Historia"
          />
        </div>
        <div className="md:w-2/3 md:flex flex-col items-center gap-10">
          <h2 className="text-4xl font-bold text-center p-5">Comienzos</h2>
          <p className="2xl:w-2/3">
            El M.A.C brota en el seno de la Iglesia Católica en el año 1971,
            como una intuición, don del Espíritu, descubierta por parte del
            Iniciador, Juan Moreno García, consistente en prestar, desde las
            claves evangélicas, una atención preferente a unos ambientes de
            vida, situaciones humanas y edades determinadas.
          </p>
          <p className="2xl:w-2/3">
            El M.A.C. surge para dar respuesta a sectores de población
            especialmente necesitados, “…ahora bien, Dios organizó los miembros
            del cuerpo dando mayor honor a los más necesitados. Así no hay
            divisiones en el cuerpo, porque todos los miembros por igual se
            preocupan unos de otros” (1 Cor. 12, 24). Concretamente, tiene su
            razón de ser de forma preferente en uno de los ámbitos de atención
            señalados por el Papa Juan Pablo II en los que la Iglesia está
            invitada a “servir a los hombres”: La caridad, alma y apoyo de la
            solidaridad (Christifideles Laici. Sobre la Vocación y Misión de los
            Laicos en la Iglesia y en el mundo). El M.A.C. quiere ser presencia
            e instrumento evangelizador entre los niños y jóvenes de barrios
            populares y zonas marginales. Se trata de aquellos lugares en los
            que deberían hacerse realidad las palabras de Jesucristo: “A los
            pobres se les anuncia la Buena Noticia” (Lc 7, 22).
          </p>
        </div>
      </div>
      <div className="md:flex items-center mt-20 p-20 gap-12 bg-gray-100 rounded-md md:w-[80%] justify-center 2xl:gap-0">
        <div className="md:w-1/2 md:flex flex-col items-center gap-10">
          <h2 className="text-4xl font-bold text-center p-5">Evangelización</h2>
          <p className="2xl:w-2/3">
            Según la parábola evangélica, el “dueño de casa” llama a los obreros
            a su viña a distintas horas de la jornada: el M.A.C. quiere ser
            mediación de Dios para invitar a los obreros preferentemente en la
            mañana –la infancia-, a la tercera hora –la adolescencia- y a la
            sexta hora–la juventud-, según la interpretación de San Gregorio
            Magno que identificaba las diversas horas de la llamada en relación
            a las edades de la vida.
          </p>
          <p className="2xl:w-2/3">
            Desde el M.A.C. los niños y jóvenes no se consideran únicamente
            objeto de evangelización, sino que existe un reconocimiento de los
            mismos como verdaderos sujetos activos, como auténticos apóstoles,
            protagonistas de la evangelización, principalmente a otros niños y a
            otros jóvenes (confr. Apostolicam actuositatem, sobre el apostolado
            de los seglares, art. 12). Porque en el caso de los primeros,“de
            ellos es el Reino de los Cielos” (Mt 19, 13-15; Mc 10,14) “y quien
            reciba incluso a uno de estos niños en mi nombre, a mí me recibe”
            (Mt. 18, 3-5; Lc. 9,48), y en el caso de los segundos “habéis
            vencido al maligno,…,habéis conocido al Padre,…, sois fuertes y la
            palabra de Dios habita en vosotros” (1 Jn. 2, 13ss), y “Jesús lo
            miró, sintió cariño por él y le dijo sólo te falta una cosa….ven y
            sígueme” (Mc 10, 21).
          </p>
          <p className="2xl:w-2/3">
            El M.A.C. no puede olvidar la ingente misión de llevar el Evangelio
            a cuantos no conocen aún a Jesucristo, especialmente los más pobres.
            Asume el mandato del Señor “Id por todo el mundo” mediante una
            presencia activa en tierras de misión, a través de personas
            consagradas dispuestas a abandonar su ambiente de vida, su trabajo,
            su región o patria, y responsabilizándose de favorecer el surgir y
            madurar de nuevas vocaciones específicamente misioneras.
          </p>
        </div>
        <div className="flex justify-end md:w-1/2 mt-20 md:mt-0">
          <img
            className="rounded-md xl:w-[500px]"
            src={dar}
            alt="Historia"
          />
        </div>
      </div>
      <div className="md:flex items-center mt-20 p-20 gap-12 bg-gray-100 rounded-md md:w-[80%] justify-center 2xl:gap-0">
        <div className="flex justify-end md:w-1/2 mt-20 md:mt-0">
          <img
            className="rounded-md "
            src={uno}
            alt="Historia"
          />
        </div>
        <div className="md:w-1/2 md:flex flex-col items-center gap-10">
          <h2 className="text-4xl font-bold text-center p-5">Carisma</h2>
          <p className="2xl:w-2/3">
            Este carisma, simple y sencillo, gracia del Espíritu Santo, que se
            concedió a una persona concreta en los inicios, es participado por
            cuantos hemos consagrado nuestra vida en el M.A.C., y de este modo,
            se continúa en el tiempo como viva y preciosa herencia.
          </p>
          <p className="2xl:w-2/3">
            El M.A.C. como asociación de cristianos que se siente comunidad
            evangelizada que se deja construir y alimentar por el Evangelio de
            Jesucristo y los Sacramentos, quiere vivir en unión fraterna: “Que
            todos sean uno, como tú Padre, en mí y yo en ti, que ellos también
            sean en nosotros, para que el mundo crea que tú me has enviado” (Jn.
            17, 21) y quiere ser también comunidad evangelizadora que da
            testimonio de las maravillas de Dios y reflejo de la caridad para
            con los más alejados, preferentemente niños y jóvenes de barrios
            populares y zonas marginales.
          </p>
          <p className="2xl:w-2/3">
            El M.A.C. debe verse renovado a cada momento por obra del Espíritu
            Santo, ya que ello permitirá que el movimiento se actualice, para
            acomodarse y dar respuesta a los nuevos contextos humanos y
            eclesiales, fundamentalmente en al ámbito infantil y juvenil. Desde
            estas claves deben leerse las siguientes ideas.
          </p>
          <p className="2xl:w-2/3">
            Para este Movimiento existen unos primeros Estatutos aprobados por
            el entonces Ordinario del lugar con fecha 4 de abril de 1990,
            reconociéndose como Asociación Pública de Fieles, a tenor del canon
            301, 3, del vigente Código de Derecho Canónico.
          </p>
        </div>
      </div>
    </div>
      <Footer/>
    </div>
  );
};

export default Historia;
