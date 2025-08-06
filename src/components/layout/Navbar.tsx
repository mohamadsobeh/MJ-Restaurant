'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, MapPin, Phone, Clock } from 'lucide-react'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetClose,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Topbar */}
      <div className="hidden md:block w-full bg-zinc-900 text-white text-xs py-2 border-b border-yellow-500 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <MapPin size={14} className="text-yellow-500" />
              <span>Restaurant MJ, Damascus City, Al-Maysat Square</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} className="text-yellow-500" />
              <span>Daily: 10:00 AM - 12:00 PM</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Phone size={14} className="text-yellow-500" />
            <Link href="tel:+963959837527" className="hover:text-yellow-400 transition">
              +963 959 837 527
            </Link>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header
        className={`sticky top-[38px] left-0 w-full z-50 h-[80px] transition-all duration-300 flex items-center border-b border-yellow-500 ${
          scrolled ? 'bg-black/95 shadow-md backdrop-blur-md' : 'bg-black/60'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logos.png"
              alt="Logo"
              width={140}
              height={50}
              priority
              className="h-24 w-24 object-cover"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center justify-center flex-1 gap-8">
            <ul className="flex items-center gap-6 text-white text-sm font-medium">
              <li><Link href="/" className="hover:text-yellow-500 transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-yellow-500 transition">About Us</Link></li>
              <li><Link href="/menu" className="hover:text-yellow-500 transition">Menus</Link></li>
              <li><Link href="/blogs" className="hover:text-yellow-500 transition">Blogs</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-500 transition">Contact</Link></li>
            </ul>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-5 py-2 text-sm font-semibold rounded-md uppercase tracking-wide"
              >
                Find A Table
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-yellow-500 text-2xl">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-black text-white w-64">
                <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
                <div className="flex flex-col gap-4 mt-10 px-4 text-sm">
                  <SheetClose asChild>
                    <Link href="/" className="hover:text-yellow-500 transition">Home</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/about" className="hover:text-yellow-500 transition">About Us</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/menu" className="hover:text-yellow-500 transition">Menus</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/blogs" className="hover:text-yellow-500 transition">Blogs</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/contact" className="hover:text-yellow-500 transition">Contact</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/contact">
                      <Button
                        variant="outline"
                        className="mt-4 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black w-full rounded-none uppercase tracking-wide"
                      >
                        Find A Table
                      </Button>
                    </Link>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}
