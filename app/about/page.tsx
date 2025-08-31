"use client";

import { Book, Leaf, Moon, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <section className="relative bg-white py-20 px-4 sm:px-6 lg:px-8">
      {/* Soft Pattern Background */}
      <div className="absolute inset-0 bg-[url('/pattern-bg.png')] bg-repeat opacity-10 z-0" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Decorative Bismillah */}
        <motion.h3
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl sm:text-2xl text-amber-700 font-serif mb-2"
        >
          ﷽
        </motion.h3>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent drop-shadow-sm"
        >
          A Library of Light: The Noor-e-Kitab Story
        </motion.h1>
        
        <Separator className="my-6 bg-emerald-300 h-1 w-24 mx-auto rounded-full" />

        {/* Intro Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-lg sm:text-xl text-gray-700 font-medium leading-relaxed"
        >
          Noor-e-Kitab is more than just a digital library;  it&apos;s a movement to bring Islamic knowledge, wisdom, and light to every home. We believe in bridging tradition with technology, providing authentic and timeless books, tafsir, Hadith collections, and much more for everyone.
        </motion.p>
        
        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-emerald-700 flex justify-center items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-amber-500" />
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed text-gray-800 max-w-3xl mx-auto">
            In a world full of distractions, **Noor-e-Kitab** offers a peaceful corner where hearts reconnect with Allah ﷻ through authentic Islamic books. We aim to be a digital companion for every learner, seeker of truth, and practicing believer on the path of **Imaan** and **Ilm**.
          </p>
        </motion.div>

        {/* What You'll Find Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mt-12"
        >
          <h2 className="text-3xl font-bold text-gray-700 flex justify-center items-center gap-2 mb-4">
            <Book className="w-6 h-6 text-amber-500" />
            What You’ll Find Here
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-6">
            <div className="flex items-center gap-2 text-gray-800">
              <Book className="w-6 h-6 text-emerald-600" />
              <span className="font-semibold text-lg">Authentic & Curated Books</span>
            </div>
            <div className="flex items-center gap-2 text-gray-800">
              <Leaf className="w-6 h-6 text-emerald-600" />
              <span className="font-semibold text-lg">A Distraction-Free Reading Experience</span>
            </div>
          </div>
          <p className="mt-8 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Here, every book is more than just words — it&apos;s a doorway to peace, purpose, and understanding. From handpicked Islamic books and spiritual writings to content in both Urdu and English, were committed to providing a clean, elegant, and authentic digital space.
          </p>
        </motion.div>
        
        {/* Join Us & Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mt-12"
        >
          <h2 className="text-3xl font-bold text-gray-700 flex justify-center items-center gap-2 mb-4">
            <Moon className="w-6 h-6 text-amber-500" />
            Join Our Journey
          </h2>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto">
            The word **“Noor” (نور)** means Divine Light — and that&apos;s our promise: to enlighten minds, soften hearts, and guide souls through the power of knowledge. Let’s revive the golden age of Islamic scholarship together, one page at a time.
          </p>
          <blockquote className="mt-6 border-l-4 border-emerald-400 pl-4 italic text-gray-600 max-w-3xl mx-auto">
            “When a person dies, all deeds end except three: Sadaqah Jariyah, knowledge that is benefited from, and a righteous child who prays.”
            — Hadith (Muslim)
          </blockquote>
          <p className="mt-6 text-gray-700 max-w-3xl mx-auto">
            May this humble effort be a source of **Sadaqah Jariyah** for us and for you, Ameen. 🌟
          </p>
        </motion.div>
      </div>
    </section>
  );
}