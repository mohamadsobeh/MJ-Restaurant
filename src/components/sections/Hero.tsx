'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const slides = [
  {
    image: '/images/hero-slider-1.jpg',
    title: 'For the love of delicious food',
    subtitle: 'Come with family & feel the joy of mouthwatering food',
  },
  {
    image: '/images/hero-slider-2.jpg',
    title: 'Taste that tells a story',
    subtitle: 'Every dish crafted with tradition and love',
  },
  {
    image: '/images/hero-slider-3.jpg',
    title: 'Where flavor meets soul',
    subtitle: 'Savor the rich flavors of MJ Restaurant',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0 bg-cover bg-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{ backgroundImage: `url('${slides[current].image}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 max-w-2xl mx-auto">
        <motion.p
          key={current + '-tag'}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-yellow-500 text-[11px] md:text-sm uppercase tracking-[0.25em] mb-4"
        >
          Tradational & Hygine
        </motion.p>

        <motion.h1
          key={current + '-title'}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-['Playfair Display'] text-4xl md:text-6xl font-semibold leading-tight md:leading-[1.2] mb-6"
        >
          {slides[current].title}
        </motion.h1>

        <motion.p
          key={current + '-subtitle'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-white/80 text-sm md:text-base mb-8"
        >
          {slides[current].subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <Button
            variant="outline"
            className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-10 py-3 text-base font-semibold shadow-md transition rounded-none uppercase tracking-wide focus:ring-2 ring-yellow-500"
          >
            View Our Menu
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full border border-yellow-500 transition-transform duration-300 ${
              current === idx ? 'bg-yellow-500 scale-110' : 'bg-transparent'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
