import Image from 'next/image'
import logo from '../../public/logoLaAust.svg'
import hero from '../../public/heroHeader.jpg'
import { Span } from './microComponents/Span'

export default function Header() {
  return (
    <>
      <header className="bg-[#F5F5F4]  flex flex-col gap-5  items-center justify-center pt-10 lg:py-10">
        <div>
          <Image src={logo} alt="Imagem logo La Aust" />
        </div>
      </header>
      <section
        className="bg-[#F5F5F4]  flex flex-col gap-5  items-center justify-center pt-10 lg:flex-row
      lg:px-32 lg:bg-white lg:py-0"
      >
        <div className="flex flex-col lg:text-center">
          <h1 className=" p-5 text-center font-sans text-black text-4xl">
            Descubra o poder de uma marca que impressiona.
          </h1>

          <div className="hidden lg:block">
            <Span>
              Já imaginou ter uma identidade que transmite a sensação de
              exclusividade e sofisticação para o seu público?
            </Span>
          </div>
        </div>

        <div className="lg:max-w-xl">
          <Image src={hero} alt="Imagem de Letícia" />
        </div>
      </section>
    </>
  )
}
