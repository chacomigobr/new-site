import Image from 'next/image'
import { motion } from "framer-motion"


export default function Welcome() {
  return (
    <div className="flex flex-row justify-center align-middle bg-purple-900 w-full z-10 h-screen ">

      <div className="flex flex-row justify-evenly items-center h-screen	 bg-gray-200	px-28 py-28 border-customise w-4/5">
        <div>
          <h1 className="text-4xl text-left font-bold text-gray-700 my-2">
            ChaComigo
        </h1>
          <h2 className="text-lg text-left text-gray-700 ">
            Na construção de um mundo mais consciente
        </h2>
          <h3 className="text-base text-left text-gray-700">
            O mais importante é que esteja bem
        </h3>
        </div>

        {/* <Image src="/images/reader-coffee.jpg" width="260" height="400" /> */}
        <Image src="/images/chalogo.png" width="200" height="200" />
      </div>
    </div>
  )
}
