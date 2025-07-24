// "use client"

// import { useState } from "react"
// import { Search, Book, BookOpen, GraduationCap, Heart } from "lucide-react"
// import { Input } from "@/components/ui/input"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"

// import { booksData } from '../lib//book';


// const categories = [
//   { name: "All", nameAr: "تمام", icon: BookOpen },
//   { name: "Fiqh", nameAr: "فقہ", icon: Book },
//   { name: "Hadith", nameAr: "حدیث", icon: Heart },
//   { name: "Arabic Grammar", nameAr: "عربی گرامر", icon: GraduationCap },
//   { name: "Tafseer", nameAr: "تفسیر", icon: BookOpen },
//   { name: "Aqeedah", nameAr: "عقیدہ", icon: Heart },
//   { name: "Tasawwuf", nameAr: "تصوف", icon: Heart },
//   { name: "Logic", nameAr: "منطق", icon: GraduationCap },
//   { name: "Usool al-Fiqh", nameAr: "اصول الفقہ", icon: Book },
// ]

// export default function IslamicBooksWebsite() {
//   const [searchTerm, setSearchTerm] = useState("")
//   const [selectedCategory, setSelectedCategory] = useState("All")

 
//    const filteredBooks = booksData.filter((book) => {
//   const matchesCategory =
//     selectedCategory === "All" || book.category === selectedCategory;

//   const matchesSearch =
//     book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     book.titleEn.toLowerCase().includes(searchTerm.toLowerCase());

//   return matchesCategory && matchesSearch;
// });


//   return (
//     <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      
//       {/* Header */}
//       <header className="bg-white shadow-sm border-b border-emerald-100">
//         <div className="container mx-auto px-4 py-6">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-3">
//               <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
//                 <BookOpen className="w-6 h-6 text-white" />
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold text-emerald-800">درسی کتب</h1>
//                 <p className="text-sm text-emerald-600">Islamic Educational Books</p>
//               </div>
//             </div>
//             <div className="text-right">
//               <p className="text-emerald-700 font-medium">مکتبہ اسلامیہ</p>
//               <p className="text-sm text-emerald-600">Digital Library</p>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="container mx-auto px-4 py-8">
//         {/* Search Bar */}
//         <div className="mb-8">
//           <div className="relative max-w-md mx-auto">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//             <Input
//               type="text"
//               placeholder="Search books... / کتابیں تلاش کریں"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="pl-10 pr-4 py-2 w-full border-emerald-200 focus:border-emerald-400"
//             />
//           </div>
//         </div>

//         {/* Category Filter */}
//         <div className="mb-8">
//           <div className="flex flex-wrap gap-2 justify-center">
//             {categories.map((category) => {
//               const IconComponent = category.icon
//               return (
//                 <Button
//                   key={category.name}
//                   variant={selectedCategory === category.name ? "default" : "outline"}
//                   onClick={() => setSelectedCategory(category.name)}
//                   className={`flex items-center space-x-2 ${
//                     selectedCategory === category.name
//                       ? "bg-emerald-600 hover:bg-emerald-700"
//                       : "border-emerald-200 hover:bg-emerald-50"
//                   }`}
//                 >
//                   <IconComponent className="w-4 h-4" />
//                   <span>{category.name}</span>
//                   <span className="text-xs">({category.nameAr})</span>
//                 </Button>
//               )
//             })}
//           </div>
//         </div>

//         {/* Books Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {filteredBooks.map((book) => (
//             <Card
//               key={book.id}
//               className="hover:shadow-lg transition-shadow duration-300 border-emerald-100 hover:border-emerald-200"
//             >
//               <CardHeader className="pb-3">
//                 <div className="flex items-start justify-between">
//                   <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 mb-2">
//                     {book.categoryAr}
//                   </Badge>
//                   <BookOpen className="w-5 h-5 text-emerald-600" />
//                 </div>
//                 <CardTitle className="text-lg leading-relaxed text-right" dir="rtl">
//                   {book.title}
//                 </CardTitle>
//                 <CardDescription className="text-sm font-medium text-emerald-700">{book.titleEn}</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-sm text-gray-600 mb-3">{book.description}</p>
//                 <p className="text-sm text-gray-500 text-right mb-4" dir="rtl">
//                   {book.descriptionAr}
//                 </p>
//                 <div className="flex space-x-2">
//                   <Button size="sm" className="flex-1 bg-emerald-600 hover:bg-emerald-700">
//                     <Book className="w-4 h-4 mr-1" />
//                     Read
//                   </Button>
//                   <Button size="sm" variant="outline" className="flex-1 border-emerald-200 hover:bg-emerald-50">
//                     Download
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {filteredBooks.length === 0 && (
//           <div className="text-center py-12">
//             <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//             <h3 className="text-lg font-medium text-gray-500 mb-2">No books found</h3>
//             <p className="text-gray-400">کوئی کتاب نہیں ملی</p>
//           </div>
//         )}
//       </div>

//       {/* Footer */}
//       <footer className="bg-emerald-800 text-white py-8 mt-12">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div>
//               <h3 className="text-lg font-semibold mb-4">درسی کتب</h3>
//               <p className="text-emerald-200">
//                 A comprehensive digital library of Islamic educational texts for students and scholars.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold mb-4">Categories</h3>
//               <ul className="space-y-2 text-emerald-200">
//                 <li>Fiqh & Usool al-Fiqh</li>
//                 <li>Hadith & Tafseer</li>
//                 <li>Arabic Grammar</li>
//                 <li>Aqeedah & Tasawwuf</li>
//               </ul>
//             </div>
//             <div className="text-right" dir="rtl">
//               <h3 className="text-lg font-semibold mb-4">رابطہ</h3>
//               <p className="text-emerald-200">اسلامی تعلیمی کتابوں کا جامع ڈیجیٹل کتب خانہ</p>
//             </div>
//           </div>
//           <div className="border-t border-emerald-700 mt-8 pt-8 text-center">
//             <p className="text-emerald-200">© 2024 Islamic Educational Books. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }"
// 
// components/home-page.tsx
"use client";

import { useEffect, useState } from "react";
import {
  Loader2,
  TriangleAlert,
  BookOpen,
  
} from "lucide-react";
import Image from "next/image";


// Assuming you have this Tilt component installed (e.g. react-tilt or react-parallax-tilt)


interface FeaturedBook {
  _id?: string;
  title: string;
  author: string;
  promoImageUrl: string;
  isFeatured: boolean;
  description?: string;
}

const bannerImages = [
  {
    videoUrl: "/banner-video1.mp4",
    imageUrl: "/images/images (2).jfif",
    alt: "Islamic books showcase",
    title: "Unveil Sacred Knowledge",
    titleAr: "اكشف عن المعرفة المقدسة",
    subtitle: "Curated Islamic books to inspire your journey",
    subtitleAr: "كتب إسلامية مختارة لإلهام رحلتك",
    category: "All",
  },
  {
    videoUrl: "/banner-video2.mp4",
    imageUrl: "/images/images (1).jfif",
    alt: "Hadith and Tafseer collection",
    title: "Illuminate Your Path",
    titleAr: "أنر طريقك",
    subtitle: "Dive into Hadith and Tafseer",
    subtitleAr: "انغمس في الحديث والتفسير",
    category: "Hadith",
  },
  {
    videoUrl: "/banner-video3.mp4",
    imageUrl: "/images/images (3).jfif",
    alt: "Fiqh and Aqeedah books",
    title: "Strengthen Your Faith",
    titleAr: "قوّي إيمانك",
    subtitle: "Explore Fiqh and Aqeedah",
    subtitleAr: "استكشف الفقه والعقيدة",
    category: "Fiqh",
  },
];

export default function HomePage() {
  const [books, setBooks] = useState<FeaturedBook[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [current, setCurrent] = useState(0);


  // Fetch books
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        setError(null);
        const apiUrl =
          "https://frontend-rho-jet-76.vercel.app/api/booklibrary?featured=true";
        const res = await fetch(apiUrl, { cache: "no-store" });
        const data = await res.json();

        if (!res.ok) throw new Error(data.message || `HTTP error! status: ${res.status}`);
        if (Array.isArray(data)) setBooks(data);
        else {
          setBooks([]);
          setError("Invalid data received.");
        }
     } catch (err: unknown) {
  if (err instanceof Error) {
    console.error(err.message);
  } else {
    console.error("An unknown error occurred.");
  }
}
 finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

   
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bannerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white text-gray-800">
  <div className="relative w-full h-[75vh] overflow-hidden mt-8 rounded-3xl shadow-2xl border border-gray-200">
    {bannerImages.map((img, index) => (
      <div
        key={index}
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          index === current ? "opacity-100 z-10" : "opacity-0 z-0"
        }`}
      >
        {/* Background Image */}
        <img
          src={img.imageUrl}
          alt={img.alt}
          className="w-full h-full object-cover object-center brightness-90 contrast-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />

        {/* Text Content */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight animate-fade-in-up drop-shadow-2xl">
            Timeless Islamic Wisdom
          </h1>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 drop-shadow-md animate-fade-in-up"
            dir="rtl"
          >
            الحكمة الإسلامية الخالدة
          </h2>
          <p className="mt-4 text-lg sm:text-xl max-w-2xl font-medium animate-fade-in-up text-white/90">
            Curated books to inspire faith and knowledge
          </p>
          <p
            className="text-lg sm:text-xl mt-2 max-w-2xl font-medium animate-fade-in-up text-white/80"
            dir="rtl"
          >
            كتب مختارة لإلهام الإيمان والمعرفة
          </p>

          {/* CTA Button */}
         
        </div>
      </div>
    ))}
</div>
    
      {/* Books Section */}
      <section
        id="books-section"
        className="container mx-auto px-4 py-12 w-full max-w-7xl"
      >
        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center justify-center min-h-[40vh] text-gray-600">
            <Loader2 className="h-10 w-10 animate-spin text-teal-600" />
            <p className="mt-4 font-medium">Loading books...</p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="flex flex-col items-center justify-center min-h-[40vh] text-red-600">
            <TriangleAlert className="h-10 w-10" />
            <p className="mt-4 text-lg">Something went wrong</p>
            <p className="text-sm text-red-400">{error}</p>
          </div>
        )}

        {/* No Books */}
        {!loading && !error && books.length === 0 && (
          <div className="flex flex-col items-center justify-center min-h-[40vh] text-gray-600">
            <p className="text-lg font-medium">No featured books available</p>
            <p className="text-sm text-gray-500">Check back later!</p>
          </div>
        )}

        {/* Books Grid */}
        {!loading && !error && books.length > 0 && (
          <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {books.map((book) => (
              <div
                key={book._id}
                className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 group"
              >
                {book.promoImageUrl ? (
                  <img
                    src={book.promoImageUrl}
                    alt={book.title}
                    className="w-full h-64 object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-500">
                    <BookOpen className="w-16 h-16" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-sm font-semibold truncate">{book.title}</p>
                </div>
              </div>
            ))}
          </section>
        )}
      </section>

      {/* Styles */}
      <style jsx>{` @import url('https://fonts.googleapis.com/css2?family=Inter:wght@800&family=Amiri:wght@400;700&display=swap');
        .english-text {
          font-family: 'Inter', Italic;
          color: #F9E9;
        }
        .arabic-text {
          font-family: 'Amiri', serif;
          line-height: 2;
             color: #1E293B;
        }
        .shadow-3xl {
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5);
        }
        .animate-fade-scale {
          animation: fade-scale 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .animate-fade-scale-delayed {
          animation: fade-scale 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.5s forwards;
        }
        .animate-fade-in-up-delayed {
          animation: fade-in-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.7s forwards;
        }
        .animate-glow-pulse {
          animation: glow-pulse 3s ease-in-out infinite;
        }
        @keyframes fade-scale {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes glow-pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 10px 20px rgba(183, 110, 121, 0.4);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 15px 30px rgba(183, 110, 121, 0.6);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-scale,
          .animate-fade-scale-delayed,
          .animate-fade-in-up,
          .animate-fade-in-up-delayed,
          .animate-glow-pulse {
            animation: none;
            transform: none;
            opacity: 1;
          }
        }
      `}</style>
    </div>
  
  );
}
