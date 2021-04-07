
export default function Header() {
  return (
    <div className="sticky flex flex-row justify-between w-full h-16 bg-gray-100	px-28 py-4 z-50">
      <h1 className="text-2xl font-bold text-gray-600">
        ChaComigo
      </h1>

      <div className="flex flex-row justify-between">
        <h2 className="px-2 text-gray-600"> Sobre </h2>
        <h2 className="px-2 text-gray-600"> Eventos </h2>
        <h2 className="px-2 text-gray-600"> Produtos </h2>
        <h2 className="px-2 text-gray-600"> Team </h2>
        <h2 className="px-2 text-gray-600"> FAQ </h2>
        <h2 className="px-2 text-gray-600"> Loja </h2>
        <h2 className="px-2 text-gray-600"> Contato </h2>
      </div>
    </div>
  )
}
