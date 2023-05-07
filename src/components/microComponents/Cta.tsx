import Image from 'next/image'
import image from '../../../public/ctaImg.png'

export function Cta() {
  return (
    <div className="w-[66px] h-[66px] lg:w-[80px] lg:h-[80px] fixed bottom-8 right-6 z-10 animate-pulse duration-2000">
      <button>
        <a
          href="https://wa.me/message/6JWU3WOO6HHUJ1"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={image} alt="Chamada para o whatsapp" />
        </a>
      </button>
    </div>
  )
}
