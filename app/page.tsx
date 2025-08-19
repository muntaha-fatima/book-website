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





// import { useEffect, useState } from "react"
// import { Loader2, TriangleAlert } from "lucide-react"

"use client"

import { useEffect, useState } from "react"
import { Loader2, TriangleAlert } from "lucide-react"
import Image from "next/image"

interface PromoItem {
  _id?: string // Added to match backend Promo interface
  promoImageUrl: string
  isActive: boolean // Added to match backend Promo interface
  title?: string // Added to match backend Promo interface
  contentType: "image" // Added for clarity, though filtered by API
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
]

export default function HomePage() {
  const [promoImages, setPromoImages] = useState<PromoItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const fetchPromo = async () => {
      try {
        // Ensure the correct API endpoint is used for promo images
        console.log(
          "📡 Fetching promo images from https://frontend-rho-jet-76.vercel.app/api/booklibrary?purpose=promo",
        )
        const response = await fetch("https://frontend-rho-jet-76.vercel.app/api/booklibrary?purpose=promo")

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.message || "Failed to fetch promo images")
        }

        const data = await response.json()
        console.log("✅ Raw promo data fetched from API:", data)

        // Assuming backend now correctly filters, no need for client-side filter here
        const cleaned = Array.isArray(data)
          ? data.map((item: any) => ({
              ...item,
              promoImageUrl: item.promoImageUrl?.trim().replace(/^"|"$/g, ""),
            }))
          : []

        setPromoImages(cleaned)
        console.log("✅ Cleaned promo images for display:", cleaned)
      } catch (error: any) {
        console.error("Promo fetch error:", error)
        setError(error.message || "Failed to load promos")
      } finally {
        setLoading(false)
      }
    }
    fetchPromo()
  }, [])
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bannerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  if (loading)
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh] text-gray-600">
        <Loader2 className="h-10 w-10 animate-spin text-teal-600" />
        <p className="mt-4 font-medium">Loading promos...</p>
      </div>
    )

  if (error)
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh] text-red-600">
        <TriangleAlert className="h-10 w-10" />
        <p className="mt-4 text-lg">Something went wrong</p>
        <p className="text-sm text-red-400">{error}</p>
      </div>
    )

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
        <Image
          src={img.imageUrl}
          alt={img.alt}
          className="w-full h-full object-cover object-center brightness-90 contrast-110"
        />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10" />
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
              <p className="text-lg sm:text-xl mt-2 max-w-2xl font-medium animate-fade-in-up text-white/80" dir="rtl">
                كتب مختارة لإلهام الإيمان والمعرفة
              </p>
            </div>
          </div>
        ))}
      </div>
      <section className="container mx-auto px-4 py-12 w-full max-w-7xl">
        {!loading && !error && promoImages.length === 0 && (
          <div className="flex flex-col items-center justify-center min-h-[40vh] text-gray-600">
            <p className="text-lg font-medium">No promo images available</p>
            <p className="text-sm text-gray-500">Check back later!</p>
          </div>
        )}
        {!loading && !error && promoImages.length > 0 && (
          <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {promoImages.map(
              (item) =>
                (
                  <img
                  key={item._id} 
                  src={item.promoImageUrl }
                  alt={item.title || `Promo ${item._id}`}
                  className="w-full h-auto rounded shadow"
                />
                ),
            )}
          </section>
        )}
      </section>
    </div>
  )
}
