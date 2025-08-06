"use client";

import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Users, CalendarDays, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ContactSectionHome() {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      persons: "",
      date: null,
      time: null,
      message: "",
    },
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    const res = await fetch("https://formspree.io/f/meozjyop", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      toast.success(`Reservation for ${data.name} sent successfully ✅`);
      reset();
    } else {
      toast.error("Something went wrong. Please try again ❌");
    }
  };

  return (
    <section
      id="reserve"
      className="relative bg-gradient-to-br from-black via-zinc-900 to-black text-white py-24 px-6 overflow-hidden"
    >
      <div className="absolute top-[-100px] right-[-100px] w-96 h-96 bg-yellow-400 rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-[-60px] left-[-60px] w-80 h-80 bg-yellow-400 rounded-full opacity-20 blur-[100px]" />

      <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-zinc-950 p-10 rounded-3xl border border-yellow-500/20 shadow-2xl"
        >
          <h2 className="text-4xl font-serif font-bold mb-3 text-yellow-400 tracking-tight">
            Reserve a Table
          </h2>
          <p className="text-gray-400 text-sm mb-8">
            Prefer a call? Dial{" "}
            <span className="text-yellow-400 font-semibold">
              +963-959837527
            </span>{" "}
            or use the form.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                {...register("name", { required: true })}
                placeholder="Your Name"
                className="bg-zinc-800 text-white border-yellow-500/30 focus:ring-yellow-500"
              />
              <Input
                {...register("phone", { required: true })}
                placeholder="Phone Number"
                className="bg-zinc-800 text-white border-yellow-500/30 focus:ring-yellow-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Users className="absolute left-3 top-3 text-yellow-400 w-4 h-4" />
                <Input
                  {...register("persons", { required: true })}
                  placeholder="1 Person"
                  className="pl-9 bg-zinc-800 text-white border-yellow-500/30 focus:ring-yellow-500 h-11"
                />
              </div>

              <div className="relative">
                <CalendarDays className="absolute left-3 top-3 text-yellow-400 w-4 h-4" />
                <Controller
                  control={control}
                  name="date"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <DatePicker
                      selected={field.value}
                      onChange={field.onChange}
                      placeholderText="Select Date"
                      dateFormat="yyyy-MM-dd"
                      minDate={new Date()}
                      className="pl-9 w-full h-11 px-4 rounded-md bg-zinc-800 text-white border border-yellow-500/30 focus:ring-yellow-500"
                    />
                  )}
                />
              </div>

              <div className="relative">
                <Clock className="absolute left-3 top-3 text-yellow-400 w-4 h-4" />
                <Controller
                  control={control}
                  name="time"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <DatePicker
                      selected={field.value}
                      onChange={field.onChange}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={30}
                      timeCaption="Time"
                      dateFormat="h:mm aa"
                      placeholderText="Select Time"
                      className="pl-9 w-full h-11 px-4 rounded-md bg-zinc-800 text-white border border-yellow-500/30 focus:ring-yellow-500"
                    />
                  )}
                />
              </div>
            </div>

            <Textarea
              {...register("message")}
              placeholder="Your Message"
              rows={4}
              className="bg-zinc-800 text-white border-yellow-500/30 focus:ring-yellow-500"
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-yellow-500 text-black hover:bg-yellow-600 w-full rounded-full text-base font-semibold transition"
            >
              {isSubmitting ? "Sending..." : "Book a Table"}
            </Button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-full h-[500px] rounded-3xl overflow-hidden border border-yellow-500/20 shadow-2xl"
        >
          <Image
            src="/images/table.png"
            alt="Restaurant Interior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center" />
        </motion.div>
      </div>
    </section>
  );
}
