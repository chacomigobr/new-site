
export default function Header() {
  return (
    <div className="fixed flex flex-row justify-between w-full h-16 bg-white	px-28 py-4 z-1">

      <h1 className="text-2xl font-bold text-yellow-600">
        ChaComigo
      </h1>

      <div className="flex flex-row justify-between">
        <h2 className="px-2 text-yellow-800"> Sobre </h2>
        <h2 className="px-2 text-yellow-800"> Eventos </h2>
        <h2 className="px-2 text-yellow-800"> Produtos </h2>
        <h2 className="px-2 text-yellow-800"> Team </h2>
        <h2 className="px-2 text-yellow-800"> FAQ </h2>
        <h2 className="px-2 text-yellow-800"> Loja </h2>
        <h2 className="px-2 text-yellow-800"> Contato </h2>
      </div>

    </div>
  )
}
