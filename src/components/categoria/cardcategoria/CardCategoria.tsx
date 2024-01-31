import React from "react";
import { Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

const CardCategoria: React.FC<CardCategoriaProps> = ({ categoria }) => {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden justify-between shadow-md bg-gradient-to-r from-pink-500 to-pink-700 text-white">
      <header className="py-2 px-6 font-bold text-2xl">
        {categoria.nome}
      </header>
      <p className="p-6 text-lg bg-white text-pink-700 h-full font-semibold">
        {categoria.descricao}
      </p>

      <div className="flex bg-pink-500 justify-between font-semibold">
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="flex justify-center text-pink-700 bg-white border-white border-solid px-4 py-2 hover:bg-pink-200 w-1/2"
        >
          <button>Editar</button>
        </Link>

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="flex justify-center text-white border-white border-solid px-4 py-2 hover:bg-pink-500 w-1/2"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
};

export default CardCategoria;
