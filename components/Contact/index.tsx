
export default function Contact() {
  return (
    <div className=" flex flex-col justify-start w-full h-auto bg-white	
      px-8 py-16 md:px-28 md:py-24">

      <h1 className="text-2xl text-left font-bold text-green-700 pb-10">
        Entre em contato para saber mais
      </h1>

      <label className="text- font-bold text-gray-700">
        Nome
      </label>
      <input type="text" className="border-2 mb-2 px-2" placeholder="Janaina Lima" />
      <label className="text- font-bold text-gray-700">
        Email
      </label>
      <input type="text" className="border-2 mb-2 px-2" placeholder="email@gmail.com" />
      <label className="text- font-bold text-gray-700">
        Telefone
      </label>
      <input type="text" className="border-2 mb-2 px-2" placeholder="(27) 88998-8888" />

    </div>
  )
}
