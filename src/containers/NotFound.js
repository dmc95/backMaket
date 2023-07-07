import React from "react";
import notFound from "./assets/images/notFound.jpg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="">
      <div className="">
        <img className="w-full h-[1200px] object-cover" src={notFound} alt="" />
      </div>
      <div className="flex flex-col absolute top-52 w-full h-[900px] text-white backdrop-blur-sm">
        <h1 className="text-6xl pt-5 w-[320px] md:w-full mx-auto">Oops! Vous semblez être perdu.</h1>
        <p className="text-5xl pt-20 mx-auto">Voici quelques liens utiles:</p>
        <ul className="flex flex-col text-2xl pt-5">
          <li className="underlinedNf py-10">
            <Link to="/">ACCUEIL</Link>
          </li>
          <li className="underlinedNf">
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NotFound;
