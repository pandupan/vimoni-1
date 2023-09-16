import Navbar from '@/components/layouts/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import Footer from '@/components/layouts/Footer'

const work_wans = Work_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={work_wans.className}>
        <div className="bg-[#edeef2]">
          <Navbar/>
            {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}
