"use client";

import { blogs } from "@/data/blogs";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

//  النوع الكامل
type BlogPost = {
  id: number;
  title: string;
  image: string;
  date: string;
  excerpt: string;
  link: string;
  content: string;
};

export default function BlogsPage() {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  return (
    <section className="relative bg-black text-white py-32 px-6 overflow-hidden">
      {/* زخارف خلفية */}
      <div className="absolute top-[-100px] right-[-100px] w-96 h-96 bg-yellow-500 rounded-full opacity-5 blur-3xl" />
      <div className="absolute bottom-[-60px] left-[-60px] w-80 h-80 bg-yellow-500 rounded-full opacity-10 blur-[100px]" />

      <div className="container mx-auto relative z-10">
        {/* العنوان */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-5xl font-extrabold font-serif mb-6"
        >
          <span className="text-yellow-500">MJ</span> Blog
        </motion.h1>
        <p className="text-center text-gray-400 max-w-xl mx-auto mb-12 text-base md:text-lg">
          Explore the world of flavors, stories, and tips straight from our
          kitchen.
        </p>

        {/* البطاقات */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden bg-zinc-900/80 border border-zinc-700 shadow-md hover:shadow-yellow-400/20 transition group backdrop-blur-xl">
                <div className="overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 h-full flex flex-col justify-between">
                  <p className="text-yellow-500 text-xs font-medium mb-2">
                    {post.date}
                  </p>
                  <h3 className="text-lg font-bold mb-2 text-white">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>

                  <Dialog>
                    <DialogTrigger asChild>
                      <span
                        className="text-yellow-500 hover:underline text-sm font-medium cursor-pointer"
                        onClick={() => setSelectedBlog(post)}
                      >
                        Read More →
                      </span>
                    </DialogTrigger>

                    {selectedBlog?.id === post.id && (
                      <DialogContent className="bg-zinc-950 border border-yellow-500 max-w-3xl w-full rounded-2xl shadow-2xl p-0 overflow-hidden">
                        <div className="flex flex-col sm:flex-row">
                          {/* الصورة */}
                          <div className="w-full sm:w-[45%] h-[300px] sm:h-[350px]">
                            <Image
                              src={selectedBlog.image}
                              alt={selectedBlog.title}
                              width={400}
                              height={350}
                              className="w-full h-full object-cover rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none"
                            />
                          </div>

                          {/* المحتوى */}
                          <div className="flex-1 px-6 py-6">
                            <DialogHeader>
                              <DialogTitle className="text-xl sm:text-2xl text-yellow-500 font-bold mb-2">
                                {selectedBlog.title}
                              </DialogTitle>
                              <DialogDescription className="text-gray-400 text-xs mb-4">
                                {selectedBlog.date}
                              </DialogDescription>
                            </DialogHeader>

                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                              {selectedBlog.content}
                            </p>
                          </div>
                        </div>
                      </DialogContent>
                    )}
                  </Dialog>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
