import Image from 'next/image'

export default function About() {
  return (
    <div className="bg-white ">
      <div className="flex flex-col justify-around w-full h-auto bg-gray-300 pt-16 md:px-28 md:py-20 md:bg-white">

        <h1 className="text-4xl text-center font-bold text-gray-700 md:text-gray-500 pb-2 md:pb-16">
          Sobre
        </h1>

        <div className=" flex flex-col-reverse md:flex-row justify-around w-full h-auto px-16 py-16 bg-gray-300">
          <div className="flex flex-row justify-center w-auto md:w-96  h-60">
            <Image src="/images/latte.png" width="250" height="300" />
          </div>

          <div>
            <h1 className="text-xl text-center font-bold text-gray-600  py-4">
              Quem somos?
            </h1>
            <h3 className="text-sm leading-6 pb-10 text-center md:text-left w-auto md:w-96 font-bold text-gray-500">
              Chá Comigo é toda comunidade, mulheres, homens e todos os gêneros catagolados
              ou que ainda por ser descobertos. Pessoas que acreditam na necessária difusão
              de ações pelos diversos setores da sociedade para o enfrentamento dessas violências.
              Todos que fazem parte da mudança e contribuem como podem.

              Não fica fora dessa, você também pode fazer a diferença!
            </h3>
          </div>
        </div>

        <div className=" flex flex-col md:flex-row justify-around w-full h-auto px-16 py-16 bg-gray-200 ">


          <div>
            <h1 className="text-xl text-center font-bold text-gray-600 py-4">
              Nossa missão
            </h1>

            <h3 className="text-sm leading-6 pb-10	text-center md:text-left w-auto md:w-96 font-bold text-gray-500">
              Lutar contra a violência contra a mulher munidos de informação.
              A violência contra mulheres constitui-se em uma das principais formas de
              violação dos seus direitos humanos, atingindo-as em seus direitos à vida,
              à saúde e à integridade física. Ela é estruturante da desigualdade de gênero.
            </h3>
          </div>

          <div className="flex flex-row justify-center w-auto md:w-96  h-60 ">
            <Image src="/images/foguete.png" width="250" height="300" />
          </div>

        </div>

        <div className=" flex flex-col-reverse md:flex-row justify-around w-full h-auto px-16 py-16 bg-gray-300">
          <div className="flex flex-row justify-center w-auto md:w-96 h-60 ">
            <Image src="/images/dart.png" width="250" height="300" />
          </div>

          <div>
            <h1 className="text-xl text-center font-bold text-gray-600  py-4">
              Onde queremos chegar
            </h1>

            <h3 className="text-sm leading-6 pb-10 text-center md:text-left w-auto md:w-96  font-bold text-gray-500">
              Numa realidade onde as mulheres tenham voz e que essa voz seja ouvida e não calada.
              Sabemos que caminho a ser trilhado não será fácil, mas juntas chegaremos longe.
              Buscamos um mundo onde não seja comum, brigas,
              discursões e mortes de mulheres pelo simples fato de ser mulher.
            </h3>
          </div>



        </div>
      </div>

    </div>
  )
}
