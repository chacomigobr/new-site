import Image from 'next/image'
import { motion } from "framer-motion"

export default function News() {
  return (
    <div className="flex flex-col bg-green-400 w-full px-8 py-16 md:px-16 md:py-16">

      {/* <div className="flex bg-green-300 py-0 mb-0.5 md:py-0.5 mx-28 md:mb-28" /> */}

      <h1 className="text-4xl text-center font-bold text-green-600 md:text-green-100 pb-2 md:pb-16">
        Notícias
      </h1>

      <div className="flex flex-col md:flex-row align-center justify-center">

        <div className=" rounded-md shadow-2xl  flex flex-col justify-around bg-green-300 m-8 p-8">
          <div className="flex flex-row justify-center pb-4">
            <Image src="/images/foguete.png" width="180" height="180" />
          </div>

          <div className="md:w-56">
            <h1 className="text-xl text-center md:text-left font-bold text-gray-700 pt-2 pb-1">Evento vida nova já!</h1>
            <h1 className="text-md text-center md:text-left text-gray-600">
              Encontro realizado na pracinha do Bairro das Laranjeiras ás 19h, com rodas de discurssão e pipoca
            </h1>
          </div>

        </div>

        <div className=" rounded-md shadow-2xl  flex flex-col justify-around bg-green-300 m-8 p-8">
          <div className="flex flex-row justify-center pb-4">
            <Image src="/images/core.png" width="180" height="180" />
          </div>

          <div className="md:w-56">
            <h1 className="text-xl text-center md:text-left font-bold text-gray-700 pt-2 pb-1">A felicidade na palma da sua mão</h1>
            <h1 className="text-md text-center md:text-left text-gray-600">
              Quer tomar redeas da sua vida? Venha
              conversar sobre as grandes conquistas e seus desafios
            </h1>
          </div>

        </div>

        <div className=" rounded-md shadow-2xl  flex flex-col justify-around bg-green-300 m-8 p-8">
          <div className="flex flex-row justify-center pb-4">
            <Image src="/images/alvo.png" width="180" height="180" />
          </div>

          <div className="md:w-56">
            <h1 className="text-xl text-center md:text-left font-bold text-gray-700 pt-2 pb-1">Tenha foco em você</h1>
            <h1 className="text-md text-center md:text-left text-gray-600">
              Projetado para ser usado dos mais jovens até as pessoas com mais dificuldades com a tecnologia
            </h1>
          </div>

        </div>

      </div>
    </div>
  )
}
