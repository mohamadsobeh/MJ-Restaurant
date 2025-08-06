'use client'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { Mail, MapPin, Phone, Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { useEffect } from 'react'
import ContactSectionHome from '@/components/sections/ContactPreview'

type ContactFormData = {
  name: string
  email: string
  message: string
}

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    const res = await fetch('https://formspree.io/f/meozjyop', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (res.ok) {
      toast.success(`Thanks, ${data.name}! Your message was sent successfully ✅`)
      reset()
    } else {
      toast.error('Something went wrong. Please try again ❌')
    }
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [isSubmitSuccessful])

  return (
    <>
      <ContactSectionHome />

      <section className="relative bg-black text-white py-32 px-6 overflow-hidden">
        <div className="absolute top-[-100px] right-[-100px] w-96 h-96 bg-yellow-400 rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-[-60px] left-[-60px] w-80 h-80 bg-yellow-400 rounded-full opacity-20 blur-[100px]" />

        <div className="container mx-auto relative z-10 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-4xl md:text-5xl font-extrabold font-serif mb-2"
          >
            Get in <span className="text-yellow-500">Touch</span>
          </motion.h1>
          <p className="text-center text-gray-400 max-w-xl mx-auto mb-12">
            Have a question, feedback, or want to make a reservation? We’d love to hear from you.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {/* النموذج */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 bg-zinc-950 p-8 rounded-3xl border border-yellow-500/30 shadow-2xl"
            >
              <p className="uppercase text-xs tracking-wider text-yellow-500 font-medium">
                Contact Form
              </p>

              <div>
                <Input
                  aria-label="Name"
                  {...register('name', {
                    required: 'Name is required',
                    minLength: { value: 2, message: 'Name is too short' },
                  })}
                  placeholder="Your Name"
                  className="bg-zinc-800 text-white border-yellow-500/30 focus:ring-yellow-500"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <Input
                  aria-label="Email"
                  {...register('email', {
                    required: 'Valid email is required',
                    pattern: {
                      value: /^[^@]+@[^@]+\.[^@]+$/,
                      message: 'Enter a valid email',
                    },
                  })}
                  type="email"
                  placeholder="Your Email"
                  className="bg-zinc-800 text-white border-yellow-500/30 focus:ring-yellow-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <Textarea
                  aria-label="Message"
                  {...register('message', {
                    required: 'Message is required',
                    minLength: { value: 10, message: 'Message is too short' },
                  })}
                  placeholder="Your Message"
                  rows={6}
                  className="bg-zinc-800 text-white border-yellow-500/30 focus:ring-yellow-500"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-yellow-500 text-black hover:bg-yellow-600 w-full rounded-full text-base font-semibold transition"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>

            {/* معلومات التواصل */}
            <div className="flex flex-col gap-6 justify-center">
              <div className="transition-transform hover:scale-105 duration-300 flex items-start gap-4">
                <MapPin className="text-yellow-500 w-6 h-6" />
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-gray-400 text-sm">Damascus City, Al-Maysat Square</p>
                </div>
              </div>
              <div className="transition-transform hover:scale-105 duration-300 flex items-start gap-4">
                <Phone className="text-yellow-500 w-6 h-6" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-400 text-sm">+963 959837527</p>
                </div>
              </div>
              <div className="transition-transform hover:scale-105 duration-300 flex items-start gap-4">
                <Mail className="text-yellow-500 w-6 h-6" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-400 text-sm">mohammadsobh1999@gmail.com</p>
                </div>
              </div>
              <div className="border-t border-yellow-500/20 pt-4 mt-4">
                <h4 className="font-semibold">Working Hours</h4>
                <p className="text-gray-400 text-sm">Everyday: 10:00 AM – 12:00 PM</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
