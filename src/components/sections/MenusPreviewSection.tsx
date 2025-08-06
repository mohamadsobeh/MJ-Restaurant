'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const categories = [
  {
    title: 'Breakfast',
    image: '/images/service-1.jpg',
    link: '/menu#breakfast',
  },
  {
    title: 'Grilled',
    image: '/images/service-2.jpg',
    link: '/menu#grill',
  },
  {
    title: 'Drinks',
    image: '/images/service-3.jpg',
    link: '/menu#drinks',
  },
]

export default function MenusPreviewSection() {
  return (
    <section className="relative bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-white py-32 px-6 overflow-hidden">
      {/* خلفية زخرفية خفيفة */}
      <Image
        src="/images/8b606e7a-6c06-403b-9806-a49be966c83d.png"
        alt="bg"
        fill
        className="object-cover opacity-[0.03] -z-10"
      />

      {/* العنوان */}
            {/* العنوان الرئيسي */}
      <div className="text-center mb-20 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif font-extrabold"
        >
          <span className="text-yellow-500">We Offer</span>{' '}
          <span className="text-white">Top Notch</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-300 max-w-2xl mx-auto mt-4 text-base md:text-lg"
        >
          Discover premium quality meals — from hearty breakfasts to refreshing drinks and sizzling grills.
        </motion.p>
      </div>


      {/* البطاقات */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {categories.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="group bg-zinc-800/80 rounded-3xl overflow-hidden shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300 backdrop-blur-lg"
          >
            {/* الصورة */}
            <div className="overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={300}
                className="w-full h-[280px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* المحتوى */}
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
              <Link href={item.link}>
                <Button
                  variant="link"
                  className="text-yellow-500 hover:text-yellow-400 transition-all duration-300"
                >
                  VIEW MENU
                </Button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
