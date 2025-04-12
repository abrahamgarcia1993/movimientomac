import React from "react";

const AvisoLegal = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800 space-y-6">
      <h1 className="text-3xl font-bold text-center mb-8">Aviso Legal</h1>

      <section>
        <p>
          El Movimiento de Acción Cristiana se reserva el derecho de modificar cualquier tipo de
          información que pudiera aparecer en el sitio web, sin que exista obligación de preavisar
          o poner en conocimiento de los usuarios dichas obligaciones, entendiéndose como suficiente
          con la publicación en el sitio web del Movimiento de Acción Cristiana.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-4 mb-2">1. Datos identificativos</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Nombre de dominio: www.movimientomac.es</li>
          <li>Denominación social: Movimiento de Acción Cristiana (en adelante MAC)</li>
          <li>CIF: G29192945</li>
          <li>Domicilio social: C/ Fuente del Moro, 4. 29003. Málaga.</li>
          <li>Email: movimientomac@gmail.com</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-4 mb-2">2. Derechos de propiedad intelectual e industrial</h2>
        <p>
          El sitio web, incluyendo su programación, diseño, logotipos, texto y/o gráficos, son propiedad del
          responsable o de terceros con licencia. Cualquier reproducción, uso o distribución requiere autorización
          escrita previa. El responsable permite redirecciones al sitio web. Para cualquier observación sobre
          posibles incumplimientos de derechos, puede contactar por correo o a la dirección postal indicada.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-4 mb-2">3. Navegación, acceso y seguridad</h2>
        <p>
          El acceso y uso del sitio implica aceptación plena de esta política. MAC no garantiza que el sitio esté
          libre de errores o interrupciones. Se prohíbe el uso del sitio a menores de 14 años sin autorización
          expresa de sus tutores. Se presume que el acceso por menores cuenta con dicha autorización.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-4 mb-2">4. Exención de responsabilidades</h2>
        <p>
          MAC no se hace responsable de los contenidos introducidos por terceros. En caso de detectar contenidos
          contrarios a la ley o moral, se procederá a su retirada. El sitio ha sido probado para garantizar su correcto
          funcionamiento, pero pueden existir errores o causas mayores que lo impidan.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-4 mb-2">5. Condiciones adicionales</h2>
        <p>
          El usuario es responsable de la veracidad de los datos que introduzca y de sus modificaciones hasta la finalización del servicio.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-4 mb-2">6. Actualización y modificación de la información</h2>
        <p>
          La información en el sitio es la vigente a la fecha de su última actualización. MAC puede modificarla
          o eliminarla sin previo aviso.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mt-4 mb-2">7. Ley aplicable y jurisdicción</h2>
        <p>
          Estas condiciones se rigen por la legislación española. Para cualquier controversia se recurrirá a los
          Juzgados de Málaga, salvo lo previsto en la normativa sobre consumidores.
        </p>
      </section>
    </div>
  );
};

export default AvisoLegal;
