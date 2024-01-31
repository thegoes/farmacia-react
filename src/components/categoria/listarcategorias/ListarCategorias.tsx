import React, { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import CardCategoria from "../cardcategoria/CardCategoria";

const ListarCategorias = () => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    const listarCategorias = async () => {
      await buscar('/categorias', setCategorias);
    };

    listarCategorias();
  }, [categorias.length]);

  return (
    <>
      {categorias.length === 0 && (
        <div className="flex items-center justify-center h-screen">
          <TailSpin
            visible={true}
            height={80}
            width={80}
            color="#4CAF50" // Green color for the spinner
          />
        </div>
      )}

      <div className="flex justify-center my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <CardCategoria key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListarCategorias;
