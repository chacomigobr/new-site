
export default function Header() {
  return (
    <div className="sticky flex flex-row justify-between w-full h-16 bg-purple-900	px-28 py-4 z-50">
      <h1 className="text-2xl font-bold text-gray-300">
        ChaComigo
      </h1>

      <div className="flex flex-row justify-between">
        <h2 className="px-2 text-gray-300"> Sobre </h2>
        <h2 className="px-2 text-gray-300"> Eventos </h2>
        <h2 className="px-2 text-gray-300"> Produtos </h2>
        <h2 className="px-2 text-gray-300"> Team </h2>
        <h2 className="px-2 text-gray-300"> FAQ </h2>
        <h2 className="px-2 text-gray-300"> Loja </h2>
        <h2 className="px-2 text-gray-300"> Contato </h2>
      </div>
    </div>
  )
}
