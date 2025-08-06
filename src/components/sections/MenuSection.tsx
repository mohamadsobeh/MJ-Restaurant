"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { menuItems, MenuItem } from '@/data/menu'
import { Button } from '@/components/ui/button'

const categories = ['All', 'Breakfast', 'Grilled', 'Drinks']

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')

  const filteredItems =
    selectedCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory)

  return (
    <section className="relative bg-black text-white py-24 px-4 overflow-hidden">
      {/* خلفية زخرفية ناعمة */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-500 rounded-full opacity-5 blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 rounded-full opacity-10 blur-[100px] -z-10" />

      <div className="container mx-auto">
        {/* Heading */}
           {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
           className="text-center text-4xl md:text-5xl font-extrabold text-yellow-500 mb-6 font-serif"
        >
          Explore Our Menu
        </motion.h1>
        <p className="text-center text-gray-400 max-w-xl mx-auto mb-12">
          A delicious range of dishes crafted with love and authentic flavors.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? 'default' : 'outline'}
              className={`uppercase tracking-widest text-sm px-6 py-2 rounded-full transition duration-300 ease-in-out shadow-sm hover:scale-105 ${
                selectedCategory === cat
                  ? 'bg-yellow-500 text-black'
                  : 'border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black'
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredItems.map((item: MenuItem, i: number) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl overflow-hidden shadow-md hover:shadow-yellow-500/30 transition group"
              >
                <div className="overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={300}
                    className="w-full h-[250px] object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-bold text-white">
                      {item.title}
                    </h3>
                    <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm min-h-[60px]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}