'use client'

import Image from 'next/image'
import Button from '../core/button'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-[100px] px-[200px] text-theme-text gap-2">
      <Image
        src="/images/logo.png"
        alt="logo"
        width={153}
        height={50}
      />
      <div className="flex space-x-6">
        <p className="hover-underline hover:text-theme-secondary">Utsugi</p>
        <p className="hover-underline hover:text-theme-secondary">Dla developera</p>
      </div>
      <div className="flex space-x-9">
        <Button title="Zaloguj"/>
        <Button title="Zostań klientem"/>
      </div>
      <div>
        PL | EN
      </div>
    </div>
  )
}

export default Navbar
