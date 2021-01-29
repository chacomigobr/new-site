import Image from 'next/image'

export default function DownloadApp() {
  return (
    <div className=" flex flex-row justify-around w-full h-screen bg-blue-700	px-28 py-28 ">

      <div className=" flex flex-row justify-around align-middle w-full h-auto ">

        <div className="grid grid-cols-4 gap-4  ">

          <div className="flex flex-row justify-center">
            <h1 className="text-2xl text-center font-bold text-gray-300  py-4">
              Comunidade
            </h1>
          </div>
          <div className="flex flex-row justify-center">
            <h1 className="text-2xl text-center font-bold text-gray-300  py-4">
              hhoj  hgff gjgjgjgjg
            </h1>
          </div>

          <div className="flex flex-row justify-center">
            <h1 className="text-2xl text-center font-bold text-gray-300  py-4">
              Quem somos?
            </h1>
          </div>

          <div className="flex flex-row justify-center">
            <h1 className="text-2xl text-center font-bold text-gray-300  py-4">
              fggd dgdhtgc fhfhjf hf
            </h1>
          </div>

          <div className="flex flex-row justify-center">
            <h1 className="text-2xl text-center font-bold text-gray-300  py-4">
              Fácil
            </h1>
          </div>

          <div className="flex flex-row justify-center ">
            <Image src="/images/chalogo.png" width="200" height="200" />
          </div>

          <div className="flex flex-row justify-center">
            <Image src="/images/chalogo.png" width="200" height="200" />
          </div>

          <div className="flex flex-row justify-center">
            <h1 className="text-2xl text-center font-bold text-gray-300  py-4">
              Divertido
            </h1>
          </div>

          <div className="flex flex-row justify-center">
            <h1 className="text-2xl text-center font-bold text-gray-300  py-4">
              Quem somos?
            </h1>
          </div>

          <div className="flex flex-row justify-center">
            <h1 className="text-2xl text-center font-bold text-gray-300  py-4">
              Comunidades
            </h1>
          </div>

          <div className="flex flex-row justify-center">
            <h1 className="text-2xl text-center font-bold text-gray-300  py-4">
              iopoiiii iioijjh
            </h1>
          </div>

          <div className="flex flex-row justify-center">
            <h1 className="text-2xl text-center font-bold text-gray-300  py-4">
              Comunidades
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
