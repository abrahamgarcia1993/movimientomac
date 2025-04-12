import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-black">
      <div>
        <div className="bg-black h-32 flex gap-10 justify-center items-center">
          <div className="bg-white w-fit h-fit rounded-full p-4 hover:bg-[#16e816] hover:text-white text-2xl">
            <a href="https://www.instagram.com/movimientomac_/">
              <FaInstagram />
            </a>
          </div>
          <div className="bg-white w-fit h-fit rounded-full p-4 hover:bg-[#16e816] hover:text-white text-2xl">
            <a href="https://www.facebook.com/movimientomac.movimientoaccioncristiana?locale=es_ES">
              <FaFacebookF />
            </a>
          </div>
        </div>
        <div className="flex justify-center md:mt-4">
          <Link
            className="text-white md:text-xl hover:text-[#16e816]"
            to="/politicas">
            Nuestras políticas
          </Link>
        </div>
        <div className="flex justify-center md:mt-4">
          <Link
            className="text-white md:text-xl hover:text-[#16e816]"
            to="/avisolegal">
            Aviso Legal
          </Link>
        </div>
      </div>
      <div>
        <p className="text-white bg-black text-center text-xl p-8">
          © Movimiento de acción cristiana
        </p>
      </div>
    </div>
  );
};

export default Footer;
