import Image from 'next/image'
import { motion } from "framer-motion"

export default function News() {
  return (
    <div className="flex flex-col bg-green-100 w-full h-screen px-16 py-28">
      <div className="flex bg-green-200 py-0.5 mx-28 mb-28" />

      <h1 className="text-4xl text-center font-bold text-green-700 md:text-green-500 pb-2 md:pb-16">
        Novidades
      </h1>

      <div className="flex flex-row align-center justify-center">

        <div className=" rounded-md shadow-xl  flex flex-col justify-around bg-green-300 m-8 p-8">
          <div className="flex flex-row justify-center ">
            <Image src="/images/avatargis.svg" width="180" height="180" />
          </div>

          <div>
            <h1 className="text-xl text-center md:text-left font-bold text-gray-700 pt-2 pb-1">Gislaine Jéssica</h1>
            <h1 className="text-md text-center md:text-left text-gray-600"> CTO </h1>
          </div>

        </div>

        <div className=" rounded-md shadow-xl  flex flex-col justify-around bg-green-300 m-8 p-8">
          <div className="flex flex-row justify-center ">
            <Image src="/images/avatargis.svg" width="180" height="180" />
          </div>

          <div>
            <h1 className="text-xl text-center md:text-left font-bold text-gray-700 pt-2 pb-1">Gislaine Jéssica</h1>
            <h1 className="text-md text-center md:text-left text-gray-600"> CTO </h1>
          </div>

        </div>

        <div className=" rounded-md shadow-xl  flex flex-col justify-around bg-green-300 m-8 p-8">
          <div className="flex flex-row justify-center ">
            <Image src="/images/avatargis.svg" width="180" height="180" />
          </div>

          <div>
            <h1 className="text-xl text-center md:text-left font-bold text-gray-700 pt-2 pb-1">Gislaine Jéssica</h1>
            <h1 className="text-md text-center md:text-left text-gray-600"> CTO </h1>
          </div>

        </div>

        <div className=" rounded-md shadow-xl  flex flex-col justify-around bg-green-300 m-8 p-8">
          <div className="flex flex-row justify-center ">
            <Image src="/images/avatargis.svg" width="180" height="180" />
          </div>

          <div>
            <h1 className="text-xl text-center md:text-left font-bold text-gray-700 pt-2 pb-1">Gislaine Jéssica</h1>
            <h1 className="text-md text-center md:text-left text-gray-600"> CTO </h1>
          </div>

        </div>

      </div>
    </div>
  )
}
