import Image from 'next/image'

export default function People() {
  return (
    <div className=" flex flex-col justify-around align-middle w-full bg-green-100	 py-20 md:px-28 md:py-20 ">
      <div className=" flex flex-row justify-around align-middle w-full">
        <h1 className="text-4xl  font-bold text-green-700 text-center pb-10 w-full">Nosso Time </h1>
      </div>

      <div className=" flex flex-col-reverse md:flex-row justify-around w-full h-auto " >
        <div className=" rounded-md shadow-xl  flex flex-col justify-around bg-green-200 m-8 p-8">
          <div className="flex flex-row justify-center ">
            <Image src="/images/avatarana.svg" width="180" height="180" />
          </div>

          <div>
            <h1 className="text-xl text-center md:text-left font-bold text-gray-700 pt-2 pb-1 ">Ana Rúbia </h1>
            <h1 className="text-md text-center md:text-left text-gray-600"> CEO </h1>
          </div>
        </div>

        <div className=" rounded-md shadow-xl  flex flex-col justify-around bg-green-200 m-8 p-8">
          <div className="flex flex-row justify-center ">
            <Image src="/images/avatargis.svg" width="180" height="180" />
          </div>

          <div>
            <h1 className="text-xl text-center md:text-left font-bold text-gray-700 pt-2 pb-1">Gislaine Jéssica</h1>
            <h1 className="text-md text-center md:text-left text-gray-600"> CTO </h1>
          </div>

        </div>

        <div className=" rounded-md shadow-xl  flex flex-col justify-around bg-green-200 m-8 p-8">
          <div className="flex flex-row justify-center ">
            <Image src="/images/avatarcalm.svg" width="180" height="180" />
          </div>

          <div>
            <h1 className="text-xl text-center md:text-left font-bold text-gray-700 pt-2 pb-1">Giselly Tiburcio </h1>
            <h1 className="text-md text-center md:text-left text-gray-600">Diretora de Conteúdo</h1>
          </div>
        </div>

      </div>

      <div className="flex flex-row w-full h-auto justify-center bg-green-100 pt-16">
        <Image src="/images/animal.png" width="150" height="150" />
        <Image src="/images/three.png" width="150" height="150" />
        <Image src="/images/animal.png" width="150" height="150" />
      </div>
    </div>
  )
}
