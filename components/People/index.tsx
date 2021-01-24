
export default function People() {
  return (
    <div className=" flex flex-row justify-around w-full h-auto bg-white	px-28 py-28 ">
      <h1 className="text-2xl text-left font-bold text-gray-700">Nosso Time </h1>

      <div className=" flex flex-row justify-around w-full h-auto px-16 py-16" >
        <div className=" flex flex-col justify-around w-full h-auto px-16 py-16 ">
          <div className="flex flex-row justify-between w-56 h-56 bg-red-200">

          </div>
          <div>
            <h1 className="text-2xl text-left font-bold text-gray-700">Ana Rúbia </h1>
            <h1 className="text-xl text-left text-gray-600"> CEO </h1>

          </div>
        </div>

        <div className=" flex flex-col justify-around w-full h-auto px-16 py-16 ">
          <div className="flex flex-row justify-between w-56 h-56 bg-red-200">

          </div>
          <div>
            <h1 className="text-2xl text-left font-bold text-gray-700">Gislaine Jéssica</h1>
            <h1 className="text-xl text-left text-gray-600"> CTO </h1>

          </div>


        </div>

        <div className=" flex flex-col justify-around w-full h-auto px-16 py-16 ">
          <div className="flex flex-row justify-between w-56 h-56 bg-red-200">

          </div>
          <div>
            <h1 className="text-2xl text-left font-bold text-gray-700">Giselly Tiburcio </h1>
            <h1 className="text-xl text-left text-gray-600">Diretora de Conteúdo</h1>

          </div>
        </div>

      </div>
    </div>
  )
}
