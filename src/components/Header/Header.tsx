import React, { useState } from "react";
import "../../styles/global.css";

const links = [
  { label: "SERVICIOS", href: "#servicios" },
  { label: "QUIENES SOMOS", href: "#quienes-somos" },
  { label: "CONTACTO", href: "#contacto" },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black fixed w-screen z-50">
      <nav className="flex lg:px-10 px-5 py-2 justify-between items-center">
        <div>
          <img
            onClick={() => (window.location.href = "/")}
            src="/logo-coomultisys.png"
            className="cursor-pointer lg:w-32 w-20"
            alt="logo"
          />
        </div>

        <div className="hidden md:flex gap-4 text-white">
          {links.map((link) => (
            <a
              key={link.href}
              className="cursor-pointer text-md font-montserrat"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Icono de menú hamburguesa */}
        <img
          src="/burger-menu.svg"
          className="lg:hidden cursor-pointer h-6"
          alt="menu"
          onClick={() => setMenuOpen(true)}
        />
      </nav>

      <div
        className={`fixed top-0 right-0 h-screen w-1/2 bg-black text-white transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out flex flex-col items-center pt-20`}
      >
        <button
          className="absolute top-5 right-5 text-xl"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-md font-montserrat py-4"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
