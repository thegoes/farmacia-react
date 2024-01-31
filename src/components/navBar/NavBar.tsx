import { FirstAid, ShoppingCart, UserCircle } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="px-6 py-4 text-lg bg-black text-white font-semibold w-screen">
        <div className="flex justify-between">
          <Link to={'/'} className="flex gap-5 text-2xl items-center">
            <FirstAid size={34} className="text-white"></FirstAid>
            <span>Farmácia Do Góes</span>
          </Link>
          <input className="border w-1/3 rounded px-2 py-1 font-normal text-black" type="text" placeholder="Pesquisar" />
          <div className="flex gap-4">
            <div className="cursor-pointer hover:underline text-red-500">Produtos</div>
            <Link to={`/categorias`} className="hover:underline text-red-500">Categorias</Link>
            <Link to={`/cadastrarcategoria`} className="hover:underline text-red-500">Nova Categoria</Link>
            <UserCircle size={30} className="cursor-pointer text-red-500">Perfil</UserCircle>
            <ShoppingCart size={30} className="cursor-pointer text-red-500">Carrinho</ShoppingCart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
