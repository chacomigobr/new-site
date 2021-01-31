import Image from 'next/image'

export default function People() {
  return (
    <div className=" flex flex-col justify-around align-middle w-full bg-gray-100	px-28 py-28 ">
      <div className=" flex flex-row justify-around align-middle w-full">
        <h1 className="text-4xl  font-bold text-gray-700 text-left pb-28 w-full">Nosso Time </h1>
      </div>

      <div className=" flex flex-row justify-around w-full h-auto " >
        <div className=" flex flex-col justify-around  ">
          <div className="flex flex-row justify-center ">
            <Image src="/images/avatarana.svg" width="180" height="180" />
          </div>

          <div>
            <h1 className="text-2xl text-left font-bold text-gray-700">Ana Rúbia </h1>
            <h1 className="text-xl text-left text-gray-600"> CEO </h1>
          </div>
        </div>

        <div className=" flex flex-col justify-around  ">
          <div className="flex flex-row justify-center ">
            <Image src="/images/avatargis.svg" width="180" height="180" />
          </div>

          <div>
            <h1 className="text-2xl text-left font-bold text-gray-700">Gislaine Jéssica</h1>
            <h1 className="text-xl text-left text-gray-600"> CTO </h1>
          </div>

        </div>

        <div className=" flex flex-col justify-around  ">
          <div className="flex flex-row justify-center ">
            <Image src="/images/avatarcalm.svg" width="180" height="180" />
          </div>

          <div>
            <h1 className="text-2xl text-left font-bold text-gray-700">Rosalinda Cannávo </h1>
            <h1 className="text-xl text-left text-gray-600">Diretora de Conteúdo</h1>
          </div>
        </div>

      </div>

      <div className="flex flex-row w-full h-auto justify-center bg-gray-100 pt-16">
        <Image src="/images/animal.png" width="150" height="150" />
        <Image src="/images/three.png" width="150" height="150" />
        <Image src="/images/animal.png" width="150" height="150" />
      </div>
    </div>
  )
}
