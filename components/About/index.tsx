import Image from 'next/image'

export default function About() {
  return (
    <div className="bg-green-100 ">
      <div className="flex flex-col justify-around w-full h-auto bg-green-300 
        pt-16 md:px-28 md:py-20 md:bg-green-100">

        <h1 className="text-4xl text-center font-bold text-gray-700 md:text-green-600 pb-2 md:pb-16">
          Sobre
        </h1>

        <div className=" flex flex-col-reverse md:flex-row justify-around w-full 
          h-auto px-16 py-8 md:px-16 md:py-16 bg-green-300">
          <div className="flex flex-row justify-center w-auto md:w-96  h-60">
            <Image src="/images/latte.png" width="250" height="300" />
          </div>

          <div>
            <h1 className="text-2xl text-center font-bold text-green-600 pb-4 ">
              Quem somos?
            </h1>
            <h3 className="text-md leading-6  pb-10 
            text-center md:text-left w-auto md:w-96 font-normal text-green-600">
              ChaComigo é uma comunidade que acredita na difusão
              de ações que visam o enfrentamento dos diversos tipos de violência.
              <br />
              Somos parte da mudança, não ficque fora dessa, venha fazer a diferença!
            </h3>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-around w-full h-auto px-16 py-16 bg-green-200 ">


          <div>
            <h1 className="text-2xl text-center font-bold text-green-600 pb-4 ">
              Nossa missão
            </h1>

            <h3 className="text-md leading-6 pb-10	text-center md:text-left w-auto md:w-96 font-normal text-green-600">
              Lutar contra a violência contra a mulher munidos de informação.
              <br />
              A violência é estruturante da desigualdade de gênero, nossa missão é
              desestruturar esse mecanismo opressor atravez de educação e ação.
            </h3>
          </div>

          <div className="flex flex-row justify-center w-auto md:w-96  h-60 ">
            <Image src="/images/foguete.png" width="250" height="300" />
          </div>

        </div>

        <div className=" flex flex-col-reverse md:flex-row justify-around w-full h-auto px-16 py-16 bg-green-300">
          <div className="flex flex-row justify-center w-auto md:w-96 h-60 ">
            <Image src="/images/dart.png" width="250" height="300" />
          </div>

          <div>
            <h1 className="text-2xl text-center font-bold text-green-600  pb-4 ">
              Onde queremos chegar
            </h1>

            <h3 className="text-md leading-6 pb-10 text-center md:text-left w-auto md:w-96  font-normal text-green-600">
              Buscamos uma sociedade onde as mulheres tenham voz e que sejam ouvida e não mais caladas.
              <br />
              Sabemos do longo caminho a ser trilhado, mas juntas chegaremos longe.

            </h3>
          </div>



        </div>

      </div>

    </div>
  )
}
