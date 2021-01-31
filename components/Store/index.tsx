import Image from 'next/image'

export default function Store() {
  return (
    <div className="flex flex-row justify-between items-center w-full h-screen bg-purple-400	 py-28 ">

      <div className="flex flex-col w-1/2 bg-purple-400 px-28">
        <h1 className="text-2xl text-left font-bold text-yellow-300 pb-1 w-full">
          Venha conhecer nossa lojinha
        </h1>

        <h1 className="text-base text-left  text-gray-100 font-bold pb-6 w-full">
          Camisetas, canecas, sticks personalizados...
        </h1>

        <h2 className="text-base text-left  text-gray-100 font-bold pb-2 items-center w-full">
          |  <Image src="/images/arrow.png" width="20" height="20" className="" />  Varios tamanhos e cores variadas
        </h2>

        <h2 className="text-base text-left  text-gray-100 font-bold pb-2 w-full">
          |  <Image src="/images/arrow.png" width="20" height="20" className="" />  Valor das vendas usadas para investir na causa
        </h2>

        <h2 className="text-base text-left  text-gray-100 font-bold pb-2 w-full">
          |  <Image src="/images/arrow.png" width="20" height="20" className="" />  O primeiro passo é se questionar
        </h2>

      </div>

      <div className="flex flex-col items-center justify-center h-screen bg-pink-100 w-1/2 px-28">
        <div className=" ">
          <Image src="/images/cup.png" width="300" height="300" className="bg-pink-100" />
        </div>



        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <nav className="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-pink-100">
                1
              </a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-pink-100 text-sm font-medium text-gray-700 hover:bg-pink-100">
                2
              </a>
              <a href="#" className="hidden md:inline-flex relative items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-pink-100">
                3
              </a>
            </nav>
          </div>
        </div>



        <button className="bg-purple-600 px-4 py-2 rounded-4xl mt-16 justify-end">
          <p className="text-white"> ver mais + </p>
        </button>
      </div>

    </div>
  )
}
