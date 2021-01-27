import Image from 'next/image'

export default function People() {
  return (
    <div className=" flex flex-col justify-around align-middle w-full h-screen bg-white	px-28 py-28 ">
      <div className=" flex flex-row justify-around align-middle w-full">
        <h1 className="text-5xl  font-bold text-gray-700  pb-28 ">Nosso Time </h1>
      </div>

      <div className=" flex flex-row justify-around w-full h-auto " >
        <div className=" flex flex-col justify-around  ">
          <div className="flex flex-row justify-center w-28 h-32">
            <Image src="/images/avatarana.svg" width="200" height="200" />
          </div>

          <div>
            <h1 className="text-2xl text-left font-bold text-gray-700">Ana Rúbia </h1>
            <h1 className="text-xl text-left text-gray-600"> CEO </h1>
          </div>
        </div>

        <div className=" flex flex-col justify-around  ">
          <div className="flex flex-row justify-center w-28 h-32">
            <Image src="/images/avatargis.svg" width="200" height="200" />
          </div>

          <div>
            <h1 className="text-2xl text-left font-bold text-gray-700">Gislaine Jéssica</h1>
            <h1 className="text-xl text-left text-gray-600"> CTO </h1>
          </div>

        </div>

        <div className=" flex flex-col justify-around  ">
          <div className="flex flex-row justify-center w-28 h-32">
            <Image src="/images/avatarcalm.svg" width="200" height="200" />
          </div>

          <div>
            <h1 className="text-2xl text-left font-bold text-gray-700">Maria Tereza </h1>
            <h1 className="text-xl text-left text-gray-600">Diretora de Conteúdo</h1>
          </div>
        </div>

      </div>

      <div className="flex flex-row w-full h-auto justify-center bg-white pt-16">
        <Image src="/images/friends.jpg" width="400" height="150" />
      </div>
    </div>
  )
}
