'use client'

import { blogs } from '@/data/blogs'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function BlogPreviewHome() {
  const latestPosts = blogs.slice(0, 3)

  return (
    <section className="relative bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-white py-28 px-6 overflow-hidden">
      {/* زخرفة خلفية */}
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
          <span className="text-yellow-500">MJ</span>{' '}
          <span className="text-white">Stories</span>
        </motion.h2>
        <p className="text-center text-gray-400 max-w-xl mx-auto mb-12 text-base md:text-lg">
          Discover culinary insights, chef stories, and seasonal inspiration from our kitchen.
        </p>

        {/* المقالات */}
        <div className="grid gap-8 md:grid-cols-3">
          {latestPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900/80 border border-zinc-700 rounded-2xl overflow-hidden shadow-md backdrop-blur group hover:shadow-yellow-400/20 transition"
            >
              <div className="overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <p className="text-xs text-yellow-400 mb-1">{post.date}</p>
                <h3 className="text-white font-semibold text-lg mb-2">{post.title}</h3>
                <p className="text-sm text-gray-400 line-clamp-3">{post.excerpt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* زر المزيد */}
        <div className="text-center mt-12">
          <Link href="/blogs">
            <Button className="bg-yellow-500 text-black hover:bg-yellow-600 text-sm px-6 py-3 rounded-full uppercase tracking-wide shadow-md hover:scale-105 transition-all duration-300">
              Explore All Blogs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
