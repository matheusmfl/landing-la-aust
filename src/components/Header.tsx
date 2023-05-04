import Image from 'next/image'
import logo from '../../public/logoLaAust.svg'
import hero from '../../public/heroHeader.jpg'

export default function Header() {
  return (
    <header className="bg-[#F5F5F4]  flex flex-col gap-5  items-center justify-center pt-10">
      <div>
        <Image src={logo} alt="Imagem logo La Aust" />
      </div>

      <h1 className=" p-5 text-center font-sans text-black text-4xl">
        Descubra o poder de uma marca que impressiona.
      </h1>

      <div>
        <Image src={hero} alt="Imagem de Letícia" />
      </div>
    </header>
  )
}
