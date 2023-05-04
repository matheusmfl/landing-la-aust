import Image from 'next/image'
import image from '../../public/leticialeft.jpg'

export default function Section11() {
  return (
    <section>
      <div>
        <Image src={image} alt="Foto de Leticia segurando um ipad" />
      </div>
      <div className="h-10 bg-white"></div>
    </section>
  )
}
