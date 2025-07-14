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

"use client";

import { useEffect, useState } from "react";

import { Card, CardContent, } from "@/components/ui/card";
import Image from "next/image";


interface FeaturedBook {
  _id?: string;
  title: string;
  author: string;
 
  promoImageUrl: string;
  isFeatured: boolean;
}

export default function HomePage() {
 
 const [books, setBooks] = useState<FeaturedBook[]>([]);

 useEffect(() => {
  const fetchBooks = async () => {
    try {
      const res = await fetch("https://frontend-rho-jet-76.vercel.app/api/booklibrary?featured=true");
      const data = await res.json();
      if (Array.isArray(data)) {
        setBooks(data);
      } else {
        console.error("⚠️ Invalid API response:", data);
        setBooks([]);
      }
    } catch (err) {
      console.error("❌ Fetch error:", err);
      setBooks([]);
    }
  };
  fetchBooks();
}, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {books.map((book) => (
            <Card key={book._id}>
    {book.promoImageUrl ? (
  <Image
    src={book.promoImageUrl}
    alt={book.title}
    width={500}
    height={300}
  />
) : (
  <Image
    src="/default.jpg"
    alt="Default"
    width={500}
    height={300}
  />
)}
              <CardContent>
                <h3 className="text-lg font-bold mt-2">{book.title}</h3>
                <p className="text-sm text-muted-foreground">{book.author}</p>

               
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
