'use client'

import Image from 'next/image'
import Button from '../core/button'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="border-b border-[#d8d8dc] text-theme-text gap-2">
      <div className="flex justify-between items-center py-8 px-10 xl:container">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={153}
            height={50}
          />
        </Link>
        <div className="flex space-x-6">
          <p className="hover-underline hover:text-theme-secondary">Usługi</p>
          <Link href="/produkt">
            <p className="hover-underline hover:text-theme-secondary">Dla developera</p>
          </Link>
        </div>
        <div className="flex space-x-9">
          <Button title="Zaloguj" />
          <Button title="Zostań klientem" />
        </div>
        <div>
          PL | EN
        </div>
      </div>
    </div>
  )
}

export default Navbar
