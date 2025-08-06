'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ShieldCheck, UtensilsCrossed, Smile, Sparkles } from 'lucide-react'

const features = [
  {
    icon: UtensilsCrossed,
    title: 'Authentic Taste',
    desc: 'Over 50 family-inspired recipes made from scratch daily.',
  },
  {
    icon: ShieldCheck,
    title: 'Hygiene First',
    desc: 'Certified high-standard kitchen with spotless food safety protocols.',
  },
  {
    icon: Smile,
    title: 'Heartfelt Hospitality',
    desc: 'Warm, attentive service that feels like home.',
  },
  {
    icon: Sparkles,
    title: 'Elegant Ambience',
    desc: 'Modern interiors with touches of Damascus charm and cozy dining vibes.',
  },
]

export default function AboutPage() {
  const router = useRouter()

  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section
        className="relative h-[65vh] md:h-[75vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/about-ban.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 uppercase tracking-wide text-yellow-500 drop-shadow-md">
            A Family Legacy of Flavor
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
            Born in the heart of Damascus, Restaurant MJ blends the warmth of Syrian tradition with a modern twist on hospitality and taste.
          </p>
        </motion.div>
      </section>

      {/* Who We Are */}
      <section className="container mx-auto py-24 px-4 grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image
            src="/images/about.png"
            alt="About Image"
            width={600}
            height={400}
            className="rounded-xl shadow-xl w-[700px] h-auto object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="text-yellow-500 uppercase tracking-widest text-xs mb-2">
            Our Story
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-500">
            Crafting Culinary Memories Since 2024
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            At <span className="text-white font-semibold">Restaurant MJ</span>, every dish tells a story — one of family, tradition, and the deep-rooted flavors of Syria.
            <br /><br />
            Founded in 2024 by Chef Mohamad Sobeh, MJ began as a small family-run kitchen dedicated to reviving classic recipes with a clean, contemporary experience.
            <br /><br />
            From the aromatic spices of our kebabs to the crisp perfection of our fresh salads, everything is made with love and sourced with integrity.
          </p>

          <Button
            onClick={() => router.push('/menu')}
            variant="outline"
            className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-6 py-3 font-semibold rounded-md uppercase tracking-wider"
          >
            Discover Our Signature Menu
          </Button>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-zinc-900 py-24 px-4">
        <div className="container mx-auto text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-yellow-500">Why Our Guests Keep Coming Back</h3>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            We're not just a restaurant — we're a culinary destination rooted in authenticity and care. Here's why guests choose MJ again and again:
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, title, desc }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-black/40 border border-zinc-800 rounded-xl p-6 text-center hover:border-yellow-500 hover:scale-[1.03] transition-all duration-300"
            >
              <Icon size={36} className="mx-auto text-yellow-500 mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
              <p className="text-gray-400 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
