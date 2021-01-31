import Image from 'next/image'
import { motion } from "framer-motion"

export default function Welcome() {
  return (
    <div className="flex flex-col  bg-white">
      <div className="flex flex-row justify-center bg-purple-200 h-screen py-24" >
        <motion.div
          className="flex flex-row justify-evenly items-center h-5/6 bg-white	px-28 py-28 border-customise w-3/5"
          animate={{ scale: 1.1 }}>
          <motion.div className="flex flex-col"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
          >
            <h1 className="text-4xl text-left font-bold text-gray-600 my-2">
              ChaComigo
        </h1>
            <h2 className="text-lg text-left text-gray-600 ">
              Na construção de um mundo mais consciente
        </h2>
            <h3 className="text-base text-left text-gray-600">
              O mais importante é que esteja bem
        </h3>
          </motion.div>
          {/* <Image src="/images/reader-coffee.jpg" width="260" height="400" /> */}
          <motion.div whileHover={{ scale: 1.1 }}>
            <Image src="/images/chalogo.png" width="200" height="200" />
          </motion.div>

        </motion.div >
      </div >

      <div className="flex bg-white py-0.5 mx-16" />
    </div>
  )
}
