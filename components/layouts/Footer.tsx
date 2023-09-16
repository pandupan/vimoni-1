import Image from "next/image"
import Button from "../core/button"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="flex w-full h-[170px] px-[200px] justify-between items-center border-t border-theme-text text-theme-text text-sm">
      <Image
        src="/images/logo2.png"
        alt="logo"
        width={77}
        height={77}
      />
      <div className="flex flex-col">
        <ul className="space-y-2">
          <li className="hover-underline hover:text-theme-secondary"><Link href="/firmie1">O firmie</Link></li>
          <li className="hover-underline hover:text-theme-secondary"><Link href="/kariera">Kariera</Link></li>
          <li className="hover-underline hover:text-theme-secondary">Polityka prywatności</li>
          <li className="hover-underline hover:text-theme-secondary">Polityka plików cookies</li>
        </ul>
      </div>
      <div className="flex flex-col">
        <ul className="space-y-2">
          <li className="hover-underline hover:text-theme-secondary">Dla płatnika</li>
          <li className="hover-underline hover:text-theme-secondary">Dla developera</li>
          <li className="hover-underline hover:text-theme-secondary">Dla biznesu</li>
        </ul>
      </div>
      <Button title="Pomoc"/>
      <div className="flex flex-col">
        <ul>
          <li>Vimoni Smart Payment Services Sp z o.o.</li>
          <li>KRS: 0001009022 </li>
          <li>NIP: 6751775420 </li>
          <li>REGON: 523979275 </li>
          <li>kapitał zakładowy 100 000 PLN </li>
          <li>w całości opłacony </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
