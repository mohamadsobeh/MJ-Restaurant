'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section className="bg-zinc-900 text-white py-20 px-4">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image
            src="/images/about.png"
            alt="About Image"
            width={600}
            height={400}
            className="rounded-xl shadow-lg w-full max-h-[700px] object-cover"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="text-yellow-500 uppercase text-xs tracking-widest mb-2">
            Our Story
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4">
            Tradition Meets Taste
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
            Restaurant MJ is where Syrian heritage meets culinary creativity. We bring family recipes, modern flavors, and warm hospitality together in one unforgettable experience.
          </p>

          <Link href="/about">
            <Button
              variant="outline"
              className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-6 py-3 font-semibold rounded-md uppercase tracking-wider"
            >
              Learn More
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
