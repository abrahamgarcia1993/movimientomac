import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-md p-4 md:p-8 w-full sm:flex sm:flex-col sm:items-center">
      <div className="flex items-center justify-between">
        <img src={logo} alt="Logo" className="w-32 md:w-40" />

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Navegación */}
      <nav
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:block mt-4 md:mt-8`}
      >
        <ul className="flex flex-col md:flex-row md:gap-10 gap-4 text-md text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-[#16e816] transition">INICIO</Link>
          </li>

          <li className="relative group">
            <a href="#" className="hover:text-[#16e816] transition">
              ESPIRITUALIDAD
            </a>
            <ul className="md:absolute md:left-0 md:top-full hidden md:group-hover:block bg-white shadow-md md:p-4 space-y-2 rounded-md z-50 ">
              <li>
                <Link to="/carisma" className="block hover:text-[#16e816] transition ">CARISMA</Link>
              </li>
              <li>
                <Link to="/inspiradores" className="block hover:text-[#16e816] transition">INSPIRADORES</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/historia" className="hover:text-[#16e816] transition">HISTORIA</Link>
          </li>
          <li>
            <Link to="/centros" className="hover:text-[#16e816] transition">CENTROS</Link>
          </li>
          <li>
            <Link to="/comunidades" className="hover:text-[#16e816] transition">COMUNIDADES</Link>
          </li>
          <li>
            <Link to="/noticias" className="hover:text-[#16e816] transition">NOTICIAS</Link>
          </li>
          <li>
            <a href="/descargas" className="hover:text-[#16e816] transition">DESCARGAS</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
