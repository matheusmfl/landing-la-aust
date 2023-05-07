import Image from 'next/image'
import icon1 from '../../public/sectionAboutMe/1.svg'
import icon2 from '../../public/sectionAboutMe/2.svg'
import icon3 from '../../public/sectionAboutMe/3.svg'

export function Section10() {
  return (
    <section
      className="flex bg-gray-50 flex-col py-10 px-5 items-center justify-center gap-5
     text-center lg:pt-20 lg:pb-10 lg:px-80 lg:gap-10"
    >
      <div className="font-Montserrat text-black">
        <h3 className="font-normal text-2xl">meet the branding</h3>
        <span className="font-light text-base">Oi, eu sou a Leticia</span>
      </div>

      <div className="font-Montserrat text-black flex flex-col items-center justify-center gap-5 lg:gap-0 lg:flex-row lg:items-center lg:justify-center">
        <div className="flex flex-col items-center justify-center lg:w-64">
          <Image src={icon1} alt="ícone ilustrativo" />
          <span className="font-normal text-xl">+3 MIL</span>
          <span className="text-base">
            negócios
            <br /> impactados
          </span>
        </div>

        <div className="flex flex-col items-center justify-center lg:w-64">
          <Image src={icon2} alt="ícone ilustrativo" />
          <span className="font-normal text-xl">6 PAÍSES</span>
          <span className="text-base">
            projetos nacionais
            <br /> e internacionais
          </span>
        </div>

        <div className="flex flex-col items-center justify-center lg:w-64">
          <Image src={icon3} alt="ícone ilustrativo" />
          <span className="font-normal text-xl">LUXURY</span>
          <span className="text-base">
            especialista em marcas
            <br /> de alto padrão
          </span>
        </div>
      </div>
    </section>
  )
}
