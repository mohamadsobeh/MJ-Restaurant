'use client'

import { menuItems } from '@/data/menu'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function MenuPreviewHome() {
  const previewCards = menuItems.slice(0, 3)
  const specialList = menuItems.slice(0, 6)

  return (
    <section className="relative bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-white py-32 px-6 overflow-hidden">
      {/* خلفيات زخرفية */}
      <div className="absolute top-[-80px] right-[-80px] w-72 h-72 bg-yellow-500 rounded-full opacity-5 blur-3xl animate-pulse" />
      <div className="absolute bottom-[-60px] left-[-60px] w-96 h-96 bg-yellow-500 rounded-full opacity-10 blur-[100px]" />

      <div className="container mx-auto relative z-10">
        {/* العنوان */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-5xl font-extrabold font-serif mb-4"
        >
          <span className="text-yellow-500">Taste</span>{' '}
          <span className="text-white">the Highlights</span>
        </motion.h2>
        <p className="text-center text-gray-300 max-w-md mx-auto mb-12 text-base md:text-lg">
          A sneak peek into our most-loved dishes.
        </p>

        {/* بطاقات فردية */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mb-20">
          {previewCards.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden bg-zinc-800/80 border border-zinc-700 shadow-xl hover:shadow-yellow-500/20 transition group backdrop-blur-lg hover:scale-[1.02]"
            >
              <div className="relative overflow-hidden">
                <span className="absolute top-4 left-4 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold shadow-md z-10">
                  NEW
                </span>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="w-full h-[230px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-yellow-500/10 my-20 w-1/2 mx-auto" />

        {/* قائمة كلاسيكية */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4 text-yellow-400">Special Selections</h3>
          <p className="text-gray-400 text-base">Handpicked dishes we recommend today.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10">
          {specialList.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-6 bg-zinc-800/70 rounded-xl p-4 border border-zinc-700 hover:shadow-yellow-400/10 transition"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={80}
                height={80}
                className="rounded-2xl object-cover w-20 h-20"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h4 className="text-white font-semibold text-lg">{item.title}</h4>
                  <span className="text-yellow-400 font-semibold text-sm">${item.price.toFixed(2)}</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* زر عرض القائمة الكاملة */}
        <div className="text-center mt-14">
          <Link href="/menu">
            <Button className="bg-yellow-500 text-black hover:bg-yellow-600 text-sm px-6 py-3 rounded-full uppercase tracking-wide shadow-md hover:scale-105 transition-all duration-300">
              View Full Menu
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
