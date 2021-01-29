import Image from 'next/image'

export default function DownloadApp() {
  return (
    <div className=" flex flex-row justify-around w-full h-screen bg-blue-700	px-28 py-28 ">

      <div className=" flex flex-row justify-around align-middle w-full h-auto ">

        <div className="grid grid-cols-5 gap-16  ">

          <div className="flex flex-col justify-center col-span-5 ">
            <h1 className="text-2xl text-center font-bold text-yellow-400 text-opacity-75 py-2">
              ChaComigo um App para todos
            </h1 >
            <h3 className="flex justify-center text-base text-center font-bold text-gray-300 ">
              Nossa missão é levar luz aos relacionamentos
            </h3>
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-2xl text-center font-bold text-yellow-400 text-opacity-75 py-2">
              Fácil de usar
            </h1 >
            <h3 className="flex justify-center text-base text-center font-bold text-gray-300 ">
              Nossa missão é levar luz aos relacionamentos
            </h3>
          </div>

          <div className="flex flex-row justify-center col-span-3">
            <Image src="/images/chalogo.png" width="200" height="200" />
          </div>

          <div className="flex flex-row justify-center">
            <h1 className="text-2xl text-center font-bold text-gray-300  py-4">
              Divertido e Interativo
            </h1>
          </div>

          <div className="flex flex-row justify-center col-span-2">
            <h1 className="text-2xl text-center font-bold text-gray-300  py-4">
              Comunidades
            </h1>
          </div>

          <div className="flex flex-row justify-center" />

          <div className="flex flex-row justify-center col-span-2">
            <h1 className="text-2xl text-center font-bold text-gray-300  py-4">
              Novidade
            </h1>
          </div>

        </div>

        {/* 
        <div>
          <h1 className="text-2xl text-left font-bold text-yellow-300 my-4">App Chá Comigo</h1>
          <h3 className="text-xl text-left w-96 font-bold text-gray-300  my-2">
            Se você tem duvidas sobre estar ou não em um relacionamento abusivo,
            o aplicativo do Chá comigo te ajuda nessa jornada:
          </h3>
          <p className="text-l text-gray-300 my-1">
            # Fácil e rápido de baixar
            </p>
          <p className="text-l text-gray-300 my-1">
            # Grátis
            </p>
          <p className="text-l text-gray-300 my-1">
            # Em poucos minutos tem o resultado de sua avaliação
           </p>
        </div> */}

      </div>

    </div>
  )
}
