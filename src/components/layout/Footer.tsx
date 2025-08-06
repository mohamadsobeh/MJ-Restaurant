import { Facebook, Instagram, Mail, MapPin, Phone, Clock } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-black/40 text-zinc-300 border-t border-yellow-500/20 pt-12 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="mb-4">
            <Image
              src="/images/logos.png"
              alt="MJ Restaurant Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
          <p className="text-sm leading-relaxed">
            A luxurious dining experience in the heart of Damascus. Taste, elegance, and comfort in every bite.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2">
          <h3 className="text-yellow-500 font-semibold mb-2">Quick Links</h3>
          <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link href="/about" className="hover:text-yellow-400 transition">About Us</Link>
          <Link href="/menu" className="hover:text-yellow-400 transition">Menus</Link>
          <Link href="/blogs" className="hover:text-yellow-400 transition">Blogs</Link>
          <Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-3">
          <h3 className="text-yellow-500 font-semibold mb-2">Contact Us</h3>
          <p className="flex items-center gap-2 text-sm">
            <MapPin className="text-yellow-500 w-4 h-4" />
            Damascus, Al-Maysat Square
          </p>
          <p className="flex items-center gap-2 text-sm">
            <Phone className="text-yellow-500 w-4 h-4" />
            <a href="tel:+963959837527" className="hover:text-yellow-400 transition">+963 959 837 527</a>
          </p>
          <p className="flex items-center gap-2 text-sm">
            <Mail className="text-yellow-500 w-4 h-4" />
            <a href="mailto:mohammadsobh1999@gmail.com" className="hover:text-yellow-400 transition">mohammadsobh1999@gmail.com</a>
          </p>
          <p className="flex items-center gap-2 text-sm">
            <Clock className="text-yellow-500 w-4 h-4" />
            Daily: 10:00 AM – 12:00 PM
          </p>

          {/* Socials */}
          <div className="flex gap-4 mt-3">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:text-yellow-400 transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 hover:text-yellow-400 transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-sm text-zinc-500 border-t border-y-amber-500 pt-6">
        © {new Date().getFullYear()} MJ Restaurant. All rights reserved.
      </div>
    </footer>
  )
}
