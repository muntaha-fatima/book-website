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

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent hover:drop-shadow-md transition-all duration-300"
        >
          🕌 About Noor-e-Kitab
        </motion.h2>

        <Separator className="my-6 bg-amber-300 h-1 w-24 mx-auto rounded-full" />

        {/* Intro Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-lg sm:text-xl text-gray-700 font-medium leading-relaxed"
        >
          Noor-e-Kitab is not just a digital library; it&apos;s a movement to bring Islamic knowledge, wisdom, and light to every home. 📚✨
          Our mission is to bridge tradition with technology, providing access to timeless books, tafsir, Hadith collections, and much more for everyone.
        </motion.p>

       <section className="max-w-4xl mx-auto py-20 px-6 text-center text-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-pink-700 flex justify-center items-center gap-2">
          <Sparkles className="w-6 h-6 text-yellow-500" />
          Our Mission
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-gray-800">
          In a world full of distractions, <strong>Noor-e-Kitab</strong> offers a peaceful
          corner of the internet where hearts reconnect with Allah ﷻ through
          authentic Islamic books and <em>risalay (رسائل)</em>.
        </p>
        <p className="mt-4 text-lg text-gray-700">
          Whether you are a curious learner, a practicing believer, or a silent
          seeker of truth, this platform is your digital companion on the path
          of Imaan and Ilm.
        </p>
      </motion.div>

      <Separator className="my-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl font-semibold text-green-700 flex justify-center items-center gap-2">
          <Book className="w-6 h-6 text-green-600" />
          What You’ll Find Here:
        </h2>
        <ul className="mt-6 text-left list-disc list-inside text-gray-800 space-y-2">
          <li>📚 Handpicked Islamic books, duas, and spiritual writings</li>
          <li>🌐 Content in both Urdu and English, for every reader</li>
          <li>🧘 A clean, elegant, and distraction-free reading environment</li>
          <li>🔄 Regular updates with more risalay and sacred texts</li>
        </ul>
      </motion.div>

      <Separator className="my-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-3xl font-semibold text-purple-700 flex justify-center items-center gap-2">
          <Leaf className="w-6 h-6 text-purple-600" />
          Why Noor-e-Kitab?
        </h2>
        <p className="mt-6 text-lg text-gray-800">
          The word <strong>“Noor” (نور)</strong> means Divine Light — and that’s our promise:
        </p>
        <blockquote className="mt-4 italic border-l-4 border-yellow-400 pl-4 text-gray-700">
          To enlighten minds, soften hearts, and guide souls through the power
          of knowledge.
        </blockquote>
        <p className="mt-4 text-lg text-gray-700">
          Here, every book is more than just words — it’s a doorway to peace,
          purpose, and understanding. Let this site be your calm in the chaos —
          your library of light.
        </p>
      </motion.div>

      <Separator className="my-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="text-3xl font-semibold text-rose-700 flex justify-center items-center gap-2">
          <Moon className="w-6 h-6 text-rose-600" />
          Join Our Journey
        </h2>
        <p className="mt-6 text-lg text-gray-800">
          Share it with loved ones. Reflect deeply. Read often.
        </p>
        <p className="mt-4 text-lg text-gray-700">
          May this humble effort be a source of <em>Sadaqah Jariyah</em> for us
          and for you, Ameen.
        </p>
        <blockquote className="mt-6 border-l-4 border-gray-400 pl-4 italic text-gray-600">
          “When a person dies, all deeds end except three: Sadaqah Jariyah,
          knowledge that is benefited from, and a righteous child who prays.”
          — Hadith (Muslim)
        </blockquote>
      </motion.div>
    </section>


        {/* Ending Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed"
        >
          Whether you&apos;re a student of knowledge, a seeker of truth, or someone rediscovering faith — Noor-e-Kitab is here to guide, support, and illuminate your path. From rare Islamic manuscripts to easy-to-read translations, we&apos;re building a platform that&apos;s accessible, authentic, and always evolving. 🌙📖
        </motion.p>

        {/* Features with Icons */}
        <div className="mt-10 flex justify-center items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2 text-amber-800">
            <Book className="w-6 h-6" />
            <span className="font-semibold text-lg">1000+ Authentic Islamic Books</span>
          </div>
          <Separator orientation="vertical" className="h-6 bg-amber-400" />
          <div className="flex items-center gap-2 text-green-800">
            <Leaf className="w-6 h-6" />
            <span className="font-semibold text-lg">Eco-conscious Digital Platform</span>
          </div>
        </div>

        {/* Final Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-10 text-gray-700"
        >
          Let&apos;s revive the golden age of Islamic scholarship together — one page at a time. Join us in spreading the Noor (light) of knowledge. 🌟
        </motion.p>
      </div>
    </section>
  );
}
