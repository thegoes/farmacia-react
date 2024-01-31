import image from "../../assets/roberto-sorin-RS0-h_pyByk-unsplash.jpg";

function Home() {
  return (
    <div className="grid grid-cols-2 bg-gray-100 text-gray-800 min-h-screen">
      <div className="flex flex-col gap-6 items-center justify-center p-8">
        <h1 className="text-4xl md:text-5xl font-bold">Bem-vinde ao site da Farmácia do Góes!</h1>
        <p className="text-lg md:text-xl">Oferecendo produtos de qualidade com preços acessíveis.</p>
        <button className="bg-blue-500 text-white rounded-full px-6 py-3 hover:bg-blue-600 transition duration-300 ease-in-out">
          Novo Produto
        </button>
      </div>
      <div className='flex justify-center py-8'>
        <img
          src={image}
          alt="Logo"
          className='w-full md:w-2/3 rounded-md shadow-lg'
        />
      </div>
    </div>
  );
}

export default Home;
