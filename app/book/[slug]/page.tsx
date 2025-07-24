// 'use client'

// import { useEffect, useState } from 'react'
// import { Navigation } from '@/components/nevigation'
// import {
//   Book,
//   BookOpen,
//   Download,
//   Eye,
//   Filter,
//   GraduationCap,
//   Heart,
//   Search
// } from 'lucide-react'
// import { Input } from '@/components/ui/input'
// import { Button } from '@/components/ui/button'
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle
// } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

// import { db } from '../../../lib/firebase'
// import { collection, getDocs } from 'firebase/firestore'


// export default function BookDetail() {
//   const categories = [
//     { name: 'All', nameAr: 'تمام', icon: BookOpen, color: 'from-blue-500 to-purple-600' },
//     { name: 'Fiqh', nameAr: 'فقہ', icon: Book, color: 'from-emerald-500 to-teal-600' },
//     { name: 'Hadith', nameAr: 'حدیث', icon: Heart, color: 'from-rose-500 to-pink-600' },
//     { name: 'Logic', nameAr: 'منطق', icon: GraduationCap, color: 'from-slate-500 to-gray-600' },
//     { name: 'Usool al-Fiqh', nameAr: 'اصول الفقہ', icon: Book, color: 'from-green-500 to-emerald-600' }
//   ]

//   const [books, setBooks] = useState<any[]>([])
//   const [loading, setLoading] = useState(true)
//   const [searchTerm, setSearchTerm] = useState('')
//   const [selectedCategory, setSelectedCategory] = useState('All')
//   const [showFilters, setShowFilters] = useState(false)
//   const [selectedBook, setSelectedBook] = useState<any | null>(null)
//   const [isBookOpen, setIsBookOpen] = useState(false)

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, 'books'))
//         const booksData = querySnapshot.docs.map(doc => ({
//           id: doc.id,
//           ...doc.data()
//         }))
//         setBooks(booksData)
//       } catch (error) {
//         console.error('Error fetching books:', error)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchBooks()
//   }, [])

//   const filteredBooks = books.filter((book) => {
//     const matchesSearch =
//       book.title?.includes(searchTerm) ||
//       book.titleEn?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       book.description?.toLowerCase().includes(searchTerm.toLowerCase())
//     const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory
//     return matchesSearch && matchesCategory
//   })

//   function getCategoryColor(category: string) {
//     const found = categories.find((c) => c.name === category)
//     return found ? found.color : 'from-slate-400 to-gray-500'
//   }

//   function openBook(book: any) {
//     setSelectedBook(book)
//     setIsBookOpen(true)
//   }

//   function closeBook() {
//     setSelectedBook(null)
//     setIsBookOpen(false)
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
//       <section
//         className="pt-32 pb-16 text-white min-w-full min-h-[100vh] bg-cover bg-center"
//         style={{ backgroundImage: `url('/image/book-759873_1280.jpg')` }}
//       >
//         {/* Optional Header */}
//       </section>

//       <Navigation />

//       {/* Search & Filter */}
//       <section className="max-w-4xl mx-auto px-4 mt-12">
//         <div className="relative mb-8">
//           <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl blur opacity-20" />
//           <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20">
//             <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-slate-400 w-6 h-6" />
//             <Input
//               type="text"
//               placeholder="Search books... / کتابیں تلاش کریں"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="pl-16 pr-20 py-6 w-full bg-transparent border-0 text-lg placeholder:text-slate-400 focus:ring-0 focus:outline-none"
//             />
//             <Button
//               variant="ghost"
//               size="sm"
//               className="absolute right-4 top-1/2 transform -translate-y-1/2"
//               onClick={() => setShowFilters(!showFilters)}
//             >
//               <Filter className="w-5 h-5" />
//             </Button>
//           </div>
//         </div>

//         {showFilters && (
//           <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 mb-8">
//             <h3 className="text-lg font-semibold text-slate-700 mb-4">Filter by Category</h3>
//             <div className="flex flex-wrap gap-3">
//               {categories.map((category) => {
//                 const IconComponent = category.icon
//                 const isSelected = selectedCategory === category.name
//                 return (
//                   <Button
//                     key={category.name}
//                     variant="ghost"
//                     onClick={() => setSelectedCategory(category.name)}
//                     className={`flex items-center space-x-2 px-4 py-2 rounded-xl ${
//                       isSelected
//                         ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white'
//                         : 'bg-white/50 hover:bg-white/80 text-slate-700'
//                     }`}
//                   >
//                     <IconComponent className="w-4 h-4" />
//                     <span>{category.name}</span>
//                     <span className="text-xs">({category.nameAr})</span>
//                   </Button>
//                 )
//               })}
//             </div>
//           </div>
//         )}
//       </section>

//       {/* Books Grid */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           {loading ? (
//             <p className="text-center text-slate-500">Loading books...</p>
//           ) : filteredBooks.length === 0 ? (
//             <div className="text-center">
//               <p className="text-slate-600 text-xl">کوئی کتاب نہیں ملی</p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//               {filteredBooks.map((book, index) => (
//                 <Card
//                   key={book.id}
//                   className="group relative bg-white/90 backdrop-blur-lg border border-white/20 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden rounded-2xl"
//                 >
//                   <CardHeader className="relative pb-4">
//                     <div className="flex items-start justify-between mb-4">
//                       <Badge
//                         className={`bg-gradient-to-r ${getCategoryColor(
//                           book.category
//                         )} text-white border-0 shadow-lg px-3 py-1 rounded-full`}
//                       >
//                         {book.categoryAr}
//                       </Badge>
//                       <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
//                         <BookOpen className="w-4 h-4 text-white" />
//                       </div>
//                     </div>
//                     <CardTitle
//                       className="text-lg leading-relaxed text-right font-bold text-slate-800 group-hover:text-emerald-700 transition-colors duration-300 mb-2"
//                       dir="rtl"
//                     >
//                       {book.title}
//                     </CardTitle>
//                     <CardDescription className="text-sm font-semibold text-slate-600 mb-2">
//                       {book.titleEn}
//                     </CardDescription>
//                     <p className="text-xs text-slate-500 text-right font-medium" dir="rtl">
//                       مصنف: {book.author}
//                     </p>
                
// <img
//   src={book.imageUrl}
//   alt="Preview"
//   className="w-60 h-40 object-cover rounded"
// />

//                   </CardHeader>
//                   <CardContent>
//                     <p className="text-sm text-slate-600 mb-3 line-clamp-2">{book.description}</p>
//                     <div className="flex space-x-2">
//                       <Button
//                         size="sm"
//                         className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl"
//                         onClick={() => openBook(book)}
//                       >
//                         <Eye className="w-4 h-4 mr-1" />
//                         پڑھیں
//                       </Button>
//                       <Button
//                         size="sm"
//                         variant="outline"
//                         className="flex-1"
//                         onClick={() => window.open(book.pdf, '_blank')}
//                       >
//                         <Download className="w-4 h-4 mr-1" />
//                         Download
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* PDF Dialog */}
//       <Dialog open={isBookOpen} onOpenChange={setIsBookOpen}>
//         <DialogContent className="max-w-5xl bg-white rounded-2xl shadow-xl">
//           <DialogHeader>
//             <div className="flex justify-between items-center">
//               <DialogTitle className="text-2xl font-bold">{selectedBook?.title}</DialogTitle>
//               <Button variant="ghost" onClick={closeBook}>
//                 Close
//               </Button>
//             </div>
//             <p className="text-sm text-slate-500">{selectedBook?.titleEn}</p>
//           </DialogHeader>

//           <div className="mt-4">
//             {selectedBook?.pdf ? (
//               <iframe
//                 src={selectedBook.pdf}
//                 className="w-full h-[70vh] rounded-xl border"
//                 title={selectedBook.titleEn}
//               />
//             ) : (
//               <p className="text-center text-slate-500">پی ڈی ایف دستیاب نہیں</p>
//             )}
//           </div>
//         </DialogContent>
//       </Dialog>
//     </div>
//   )
// }




// "use client"

// import { useState } from "react"
// import { Search, Book, BookOpen, GraduationCap, Heart, X, Eye, Download, Filter } from "lucide-react"
// import { Input } from "@/components/ui/input"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { booksData } from "@/data/books-data"
// import { Navigation } from "@/components/navigation"

// const categories = [
//   { name: "All", nameAr: "تمام", icon: BookOpen, color: "from-blue-500 to-purple-600" },
//   { name: "Fiqh", nameAr: "فقہ", icon: Book, color: "from-emerald-500 to-teal-600" },
//   { name: "Hadith", nameAr: "حدیث", icon: Heart, color: "from-rose-500 to-pink-600" },
//   { name: "Arabic Grammar", nameAr: "عربی گرامر", icon: GraduationCap, color: "from-amber-500 to-orange-600" },
//   { name: "Tafseer", nameAr: "تفسیر", icon: BookOpen, color: "from-indigo-500 to-blue-600" },
//   { name: "Aqeedah", nameAr: "عقیدہ", icon: Heart, color: "from-violet-500 to-purple-600" },
//   { name: "Tasawwuf", nameAr: "تصوف", icon: Heart, color: "from-cyan-500 to-blue-600" },
//   { name: "Logic", nameAr: "منطق", icon: GraduationCap, color: "from-slate-500 to-gray-600" },
//   { name: "Usool al-Fiqh", nameAr: "اصول الفقہ", icon: Book, color: "from-green-500 to-emerald-600" },
// ]

// export default function LibraryPage() {
//   const [searchTerm, setSearchTerm] = useState("")
//   const [selectedCategory, setSelectedCategory] = useState("All")
//   const [selectedBook, setSelectedBook] = useState(null)
//   const [isBookOpen, setIsBookOpen] = useState(false)
//   const [showFilters, setShowFilters] = useState(false)

//   const filteredBooks = booksData.filter((book) => {
//     const matchesSearch =
//       book.title.includes(searchTerm) ||
//       book.titleEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       book.description.toLowerCase().includes(searchTerm.toLowerCase())
//     const matchesCategory = selectedCategory === "All" || book.category === selectedCategory
//     return matchesSearch && matchesCategory
//   })

//   const openBook = (book) => {
//     setSelectedBook(book)
//     setIsBookOpen(true)
//   }

//   const closeBook = () => {
//     setIsBookOpen(false)
//     setSelectedBook(null)
//   }

//   const getCategoryColor = (categoryName) => {
//     const category = categories.find((cat) => cat.name === categoryName)
//     return category?.color || "from-gray-500 to-gray-600"
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
//       <Navigation />

//       {/* Header Section */}
//       <section className="pt-32 pb-16 bg-gradient-to-r from-emerald-600/10 via-blue-600/10 to-purple-600/10">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h1 className="text-6xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
//               Library
//             </h1>
//             <h2 className="text-4xl font-bold text-slate-800 mb-4" dir="rtl">
//               کتب خانہ
//             </h2>
//             <p className="text-xl text-slate-600 max-w-2xl mx-auto">
//               Browse our comprehensive collection of Islamic educational books
//             </p>
//           </div>

//           {/* Search and Filter Section */}
//           <div className="max-w-4xl mx-auto">
//             {/* Search Bar */}
//             <div className="relative mb-8">
//               <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl blur opacity-20" />
//               <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20">
//                 <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-slate-400 w-6 h-6" />
//                 <Input
//                   type="text"
//                   placeholder="Search books by title, author, or category... / کتابیں تلاش کریں"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="pl-16 pr-20 py-6 w-full bg-transparent border-0 text-lg placeholder:text-slate-400 focus:ring-0 focus:outline-none"
//                 />
//                 <Button
//                   variant="ghost"
//                   size="sm"
//                   className="absolute right-4 top-1/2 transform -translate-y-1/2"
//                   onClick={() => setShowFilters(!showFilters)}
//                 >
//                   <Filter className="w-5 h-5" />
//                 </Button>
//               </div>
//             </div>

//             {/* Category Filters */}
//             <div
//               className={`transition-all duration-500 overflow-hidden ${showFilters ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
//             >
//               <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 mb-8">
//                 <h3 className="text-lg font-semibold text-slate-700 mb-4">Filter by Category</h3>
//                 <div className="flex flex-wrap gap-3">
//                   {categories.map((category) => {
//                     const IconComponent = category.icon
//                     const isSelected = selectedCategory === category.name
//                     return (
//                       <Button
//                         key={category.name}
//                         variant="ghost"
//                         onClick={() => setSelectedCategory(category.name)}
//                         className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
//                           isSelected
//                             ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg"
//                             : "bg-white/50 hover:bg-white/80 text-slate-700"
//                         }`}
//                       >
//                         <IconComponent className="w-4 h-4" />
//                         <span>{category.name}</span>
//                         <span className="text-xs">({category.nameAr})</span>
//                       </Button>
//                     )
//                   })}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Books Grid */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="mb-8 flex items-center justify-between">
//             <div>
//               <h3 className="text-2xl font-bold text-slate-800">
//                 {selectedCategory === "All" ? "All Books" : selectedCategory}
//               </h3>
//               <p className="text-slate-600">{filteredBooks.length} books found</p>
//             </div>
//             <Button
//               variant="outline"
//               onClick={() => setShowFilters(!showFilters)}
//               className="bg-white/80 backdrop-blur-sm"
//             >
//               <Filter className="w-4 h-4 mr-2" />
//               {showFilters ? "Hide Filters" : "Show Filters"}
//             </Button>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//             {filteredBooks.map((book, index) => (
//               <Card
//                 key={book.id}
//                 className="group relative bg-white/90 backdrop-blur-lg border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden rounded-2xl"
//                 onClick={() => openBook(book)}
//                 style={{
//                   animationDelay: `${index * 100}ms`,
//                   animation: "fadeInUp 0.6s ease-out forwards",
//                 }}
//               >
//                 {/* Gradient Overlay */}
//                 <div
//                   className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(book.category)} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
//                 />

//                 <CardHeader className="relative pb-4">
//                   <div className="flex items-start justify-between mb-4">
//                     <Badge
//                       className={`bg-gradient-to-r ${getCategoryColor(book.category)} text-white border-0 shadow-lg px-3 py-1 rounded-full`}
//                     >
//                       {book.categoryAr}
//                     </Badge>
//                     <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
//                       <BookOpen className="w-4 h-4 text-white" />
//                     </div>
//                   </div>
//                   <CardTitle
//                     className="text-lg leading-relaxed text-right font-bold text-slate-800 group-hover:text-emerald-700 transition-colors duration-300 mb-2"
//                     dir="rtl"
//                   >
//                     {book.title}
//                   </CardTitle>
//                   <CardDescription className="text-sm font-semibold text-slate-600 mb-2">
//                     {book.titleEn}
//                   </CardDescription>
//                   {book.author && (
//                     <p className="text-xs text-slate-500 text-right font-medium" dir="rtl">
//                       مصنف: {book.authorAr || book.author}
//                     </p>
//                   )}
//                 </CardHeader>

//                 <CardContent className="relative">
//                   <p className="text-sm text-slate-600 mb-3 line-clamp-2">{book.description}</p>
//                   <p className="text-sm text-slate-500 text-right mb-4 line-clamp-2" dir="rtl">
//                     {book.descriptionAr}
//                   </p>

//                   {book.pages && (
//                     <div className="flex items-center justify-between mb-4 text-xs text-slate-400">
//                       <span>📄 {book.pages} pages</span>
//                       <span>⭐ 4.8/5</span>
//                     </div>
//                   )}

//                   <div className="flex space-x-2">
//                     <Button
//                       size="sm"
//                       className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 rounded-xl"
//                       onClick={(e) => {
//                         e.stopPropagation()
//                         openBook(book)
//                       }}
//                     >
//                       <Eye className="w-3 h-3 mr-1" />
//                       پڑھیں
//                     </Button>
//                     <Button
//                       size="sm"
//                       variant="outline"
//                       className="flex-1 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-xl transition-all duration-200 bg-transparent"
//                       onClick={(e) => e.stopPropagation()}
//                     >
//                       <Download className="w-3 h-3 mr-1" />
//                       Download
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           {filteredBooks.length === 0 && (
//             <div className="text-center py-20">
//               <div className="w-32 h-32 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl">
//                 <BookOpen className="w-16 h-16 text-slate-400" />
//               </div>
//               <h3 className="text-2xl font-bold text-slate-600 mb-4">No books found</h3>
//               <p className="text-slate-400 text-lg">کوئی کتاب نہیں ملی</p>
//               <Button
//                 onClick={() => {
//                   setSearchTerm("")
//                   setSelectedCategory("All")
//                 }}
//                 className="mt-6 bg-gradient-to-r from-emerald-500 to-teal-600 text-white"
//               >
//                 Clear Filters
//               </Button>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Book Reader Modal */}
//       <Dialog open={isBookOpen} onOpenChange={setIsBookOpen}>
//         <DialogContent className="max-w-6xl max-h-[95vh] p-0 bg-white/95 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl overflow-hidden">
//           <DialogHeader className="p-8 pb-4 border-b border-slate-200/50 bg-gradient-to-r from-slate-50 to-blue-50">
//             <div className="flex items-center justify-between">
//               <div className="flex-1">
//                 <DialogTitle className="text-3xl text-right font-bold text-slate-800 mb-2" dir="rtl">
//                   {selectedBook?.title}
//                 </DialogTitle>
//                 <p className="text-lg text-emerald-600 font-semibold mb-1">{selectedBook?.titleEn}</p>
//                 {selectedBook?.author && (
//                   <p className="text-sm text-slate-500 text-right font-medium" dir="rtl">
//                     مصنف: {selectedBook.authorAr || selectedBook.author}
//                   </p>
//                 )}
//               </div>
//               <Button
//                 variant="ghost"
//                 size="sm"
//                 onClick={closeBook}
//                 className="h-12 w-12 p-0 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors duration-200"
//               >
//                 <X className="h-6 w-6 text-slate-600" />
//               </Button>
//             </div>
//           </DialogHeader>

//           <ScrollArea className="flex-1 p-8">
//             <div className="prose prose-xl max-w-none">
//               <div
//                 className="text-right leading-loose"
//                 dir="rtl"
//                 style={{
//                   fontFamily: "system-ui, -apple-system, sans-serif",
//                   lineHeight: "2.2",
//                   fontSize: "18px",
//                 }}
//               >
//                 {selectedBook?.content.split("\n").map((line, index) => {
//                   if (line.startsWith("# ")) {
//                     return (
//                       <h1
//                         key={index}
//                         className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-8 mt-12 text-center"
//                       >
//                         {line.substring(2)}
//                       </h1>
//                     )
//                   } else if (line.startsWith("## ")) {
//                     return (
//                       <h2
//                         key={index}
//                         className="text-2xl font-bold text-slate-700 mb-6 mt-10 border-b-2 border-emerald-200 pb-2"
//                       >
//                         {line.substring(3)}
//                       </h2>
//                     )
//                   } else if (line.startsWith("### ")) {
//                     return (
//                       <h3 key={index} className="text-xl font-semibold text-emerald-600 mb-4 mt-8">
//                         {line.substring(4)}
//                       </h3>
//                     )
//                   } else if (line.startsWith("**") && line.endsWith("**")) {
//                     return (
//                       <p
//                         key={index}
//                         className="font-bold text-slate-800 mb-4 bg-emerald-50 p-4 rounded-xl border-l-4 border-emerald-400"
//                       >
//                         {line.substring(2, line.length - 2)}
//                       </p>
//                     )
//                   } else if (line.trim() === "") {
//                     return <div key={index} className="h-4" />
//                   } else {
//                     return (
//                       <p key={index} className="mb-4 text-slate-700 leading-relaxed">
//                         {line}
//                       </p>
//                     )
//                   }
//                 })}
//               </div>
//             </div>
//           </ScrollArea>
//         </DialogContent>
//       </Dialog>

//       <style jsx>{`
//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </div>
//   )
// }



"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { toast } from "sonner";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Search, BookOpen, Book, Heart, GraduationCap, Filter, X, Eye, ShoppingCart, Star, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface Book {
  _id?: string;
  title: string;
  author: string;
  description: string;
  imageUrl?: string;
  pdfUrl?: string;
  category?: string;
  categoryAr?: string;
  titleAr?: string;
  descriptionAr?: string;
  content?: string;
  price?: number;
  rating?: number;
}

const categories = [
  { name: "All", nameAr: "تمام", icon: BookOpen, color: "bg-teal-600" },
  { name: "Fiqh", nameAr: "فقہ", icon: Book, color: "bg-coral-500" },
  { name: "Hadith", nameAr: "حدیث", icon: Heart, color: "bg-amber-500" },
  { name: "Arabic Grammar", nameAr: "عربی گرامر", icon: GraduationCap, color: "bg-indigo-500" },
  { name: "Tafseer", nameAr: "تفسير", icon: BookOpen, color: "bg-teal-600" },
  { name: "Aqeedah", nameAr: "عقيدة", icon: Heart, color: "bg-coral-500" },
  { name: "Tasawwuf", nameAr: "تصوف", icon: Heart, color: "bg-amber-500" },
  { name: "Logic", nameAr: "منطق", icon: GraduationCap, color: "bg-indigo-500" },
  { name: "Usool al-Fiqh", nameAr: "اصول الفقہ", icon: Book, color: "bg-teal-600" },
];

export default function BooksPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<{ title: string; type: string; imageUrl?: string }[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cart, setCart] = useState<Book[]>([]);
  const booksPerPage = 12;
  const searchInputRef = useRef<HTMLInputElement>(null);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("https://frontend-rho-jet-76.vercel.app/api/booklibrary", {
        cache: "no-store",
      });
      if (!res.ok) throw new Error(`Failed to fetch books: ${res.statusText}`);
      const data = await res.json();
      if (!Array.isArray(data)) throw new Error("Invalid data format");
      setBooks(data.reverse());
    } catch (err) {
      const message = err instanceof Error ? err.message : "An error occurred";
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const suggestionsMemo = useMemo(() => {
    if (!searchTerm) return [];
    return books
      .filter(
        (book) =>
          (book.title?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false) ||
          (book.author?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false) ||
          (book.titleAr?.includes(searchTerm) ?? false) ||
          (book.category?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false)
      )
      .map((book) => ({
        title: book.title || book.titleAr || "Untitled",
        type: book.title.toLowerCase().includes(searchTerm.toLowerCase())
          ? "Book"
          : book.author.toLowerCase().includes(searchTerm.toLowerCase())
          ? "Author"
          : "Category",
        imageUrl: book.imageUrl,
      }))
      .slice(0, 8);
  }, [searchTerm, books]);

  useEffect(() => {
    const debounce = setTimeout(() => setSuggestions(suggestionsMemo), 200);
    return () => clearTimeout(debounce);
  }, [suggestionsMemo]);

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const matchesSearch =
        (book.title?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false) ||
        (book.author?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false) ||
        (book.description?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false) ||
        (book.titleAr?.includes(searchTerm) ?? false) ||
        (book.descriptionAr?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false) ||
        (book.category?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false);
      const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [books, searchTerm, selectedCategory]);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  const openBook = (book: Book) => {
    if (book.content) {
      setSelectedBook(book);
      setIsBookOpen(true);
    } else if (book.pdfUrl) {
      window.open(book.pdfUrl, "_blank");
    } else {
      toast.error("Book content not available.");
    }
  };

  const closeBook = () => {
    setIsBookOpen(false);
    setSelectedBook(null);
  };

  const addToCart = (book: Book, e: React.MouseEvent) => {
    e.stopPropagation();
    setCart((prev) => [...prev, book]);
    toast.success(`${book.title || "Book"} added to cart!`);
    setShowCart(true);
  };

  const shareBook = (book: Book) => {
    const shareUrl = `${window.location.origin}/books/${book._id || book.title.toLowerCase().replace(/\s+/g, "-")}`;
    navigator.clipboard.writeText(shareUrl);
    toast.success("Book link copied to clipboard!");
  };

  const getCategoryColor = (categoryName?: string) => {
    const category = categories.find((cat) => cat.name === categoryName);
    return category?.color || "bg-teal-600";
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setCurrentPage(1);
    setSuggestions([]);
    if (searchInputRef.current) searchInputRef.current.focus();
  };

  return (
    <main className="min-h-screen bg-cream-100 py-8 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-700 to-teal-900 text-white py-28 px-4 mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/books-bg.jpg')] bg-cover bg-center opacity-15 mix-blend-overlay"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl font-extrabold english-text mb-4 tracking-tighter drop-shadow-md">Bettywrites</h1>
          <h2 className="text-3xl sm:text-5xl font-bold arabic-text mb-8" dir="rtl">بيتي رايتس</h2>
          <p className="text-lg sm:text-xl english-text mb-10 max-w-3xl mx-auto opacity-90 font-medium">
            Explore a curated collection of Islamic books to enrich your soul and mind.
          </p>
          <div className="relative max-w-4xl mx-auto group">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-cream-100 w-8 h-8 transition-transform duration-300 group-focus-within:scale-125 group-focus-within:text-coral-400" />
            <Input
              ref={searchInputRef}
              type="text"
              placeholder="Search books, authors, or categories... / ابحث عن الكتب أو المؤلفين أو الفئات"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-20 pr-20 py-9 bg-white/90 text-slate-900 rounded-full focus:ring-4 focus:ring-coral-400 focus:border-transparent english-text shadow-2xl text-lg font-medium transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(244,114,182,0.6)] backdrop-blur-md"
              aria-label="Search books, authors, or categories"
            />
            {searchTerm && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-6 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-coral-600"
                onClick={() => setSearchTerm("")}
                aria-label="Clear search"
              >
                <X className="w-7 h-7" />
              </Button>
            )}
            {suggestions.length > 0 && (
              <div className="absolute w-full mt-4 bg-white/90 rounded-3xl shadow-2xl z-50 border border-teal-100/30 max-h-[400px] overflow-y-auto backdrop-blur-md animate-slide-in">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
              
                    tabIndex={0}
                    className="px-6 py-4 text-slate-700 hover:bg-teal-50/80 cursor-pointer transition-all duration-200 flex items-center gap-4 group"
                    onClick={() => {
                      setSearchTerm(suggestion.title);
                      setSuggestions([]);
                      setCurrentPage(1);
                    }}
                    onKeyDown={(e) => e.key === "Enter" && setSearchTerm(suggestion.title)}
                  >
                    {suggestion.imageUrl ? (
                      <Image
                        src={suggestion.imageUrl}
                        alt={suggestion.title}
                        className="w-12 h-12 object-contain rounded-lg border border-teal-100/50 group-hover:scale-110 transition-transform duration-200"
                        loading="lazy"
                      />
                    ) : (
                      <BookOpen className="w-8 h-8 text-teal-600 group-hover:scale-110 transition-transform duration-200" />
                    )}
                    <div className="flex-1">
                      <span className="english-text font-semibold text-base">{suggestion.title}</span>
                      <Badge className="ml-3 bg-teal-100/80 text-teal-700 text-xs font-semibold tracking-wide">{suggestion.type}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Filters and Books */}
      <section className="max-w-7xl mx-auto py-12 space-y-12">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 english-text tracking-tight">Browse by Category</h3>
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="sm:hidden bg-white/90 border-teal-200 text-teal-600 hover:bg-teal-50 btn-neumorphic rounded-full px-5 py-3"
            aria-label="Toggle filters"
          >
            <Filter className="w-6 h-6 mr-2" />
            Filters
          </Button>
        </div>
        <div
          className={`filter-panel sm:flex transition-all duration-600 ease-in-out ${
            showFilters ? "opacity-100 max-h-screen py-6" : "opacity-0 max-h-0 sm:opacity-100 sm:max-h-screen sm:py-0"
          } bg-white/90 border border-teal-100/30 rounded-3xl sm:border-0 shadow-xl sm:shadow-none backdrop-blur-md overflow-x-auto`}
        >
          <div className="flex gap-4 whitespace-nowrap px-4 sm:px-0">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "outline"}
                onClick={() => {
                  setSelectedCategory(category.name);
                  setCurrentPage(1);
                }}
                className={`flex items-center gap-3 px-6 py-3 rounded-full btn-neumorphic transition-all duration-300 ${
                  selectedCategory === category.name
                    ? category.color + " text-white shadow-lg"
                    : "bg-white/80 border-teal-200/50 text-teal-700 hover:bg-teal-50/80 hover:shadow-md"
                }`}
                aria-label={`Filter by ${category.name}`}
              >
                <category.icon className="w-6 h-6" />
                <span className="english-text text-sm font-bold">{category.name}</span>
                <span className="text-xs arabic-text">({category.nameAr})</span>
              </Button>
            ))}
            {selectedCategory !== "All" || searchTerm ? (
              <Button
                variant="outline"
                onClick={clearFilters}
                className="bg-white/80 border-coral-200 text-coral-600 hover:bg-coral-50 btn-neumorphic rounded-full px-6 py-3"
                aria-label="Clear all filters"
              >
                <X className="w-6 h-6 mr-2" />
                Clear All
              </Button>
            ) : null}
          </div>
        </div>

        <div className="mb-8 flex items-center justify-between">
          <div>
            <h3 className="text-4xl sm:text-5xl font-bold text-slate-900 english-text tracking-tight">
              {selectedCategory === "All" ? "All Books" : selectedCategory}
            </h3>
            <p className="text-slate-600 english-text text-base mt-2 font-medium">{filteredBooks.length} books found</p>
          </div>
          <div className="relative">
            <Button
              variant="outline"
              onClick={() => setShowCart(!showCart)}
              className="bg-white/90 border-teal-200 text-teal-600 hover:bg-teal-50 btn-neumorphic rounded-full px-6 py-3 shadow-lg hover:shadow-xl"
              aria-label={`Cart with ${cart.length} items`}
            >
              <ShoppingCart className="w-7 h-7 mr-2" />
              Cart
              {cart.length > 0 && (
                <Badge className="absolute -top-3 -right-3 bg-coral-600 text-white text-xs px-3 py-1.5 rounded-full animate-pulse">
                  {cart.length}
                </Badge>
              )}
            </Button>
            {showCart && cart.length > 0 && (
              <div className="absolute right-0 mt-4 w-96 bg-white/90 rounded-3xl shadow-2xl z-50 border border-teal-100/30 p-6 backdrop-blur-md animate-slide-in">
                <h4 className="text-base font-bold text-slate-900 english-text mb-4">Cart ({cart.length})</h4>
                {cart.slice(0, 4).map((item, index) => (
                  <div key={index} className="flex items-center gap-4 py-3 border-b border-teal-100/30">
                    {item.imageUrl ? (
                      <Image src={item.imageUrl} alt={item.title} className="w-14 h-14 object-contain rounded-lg" loading="lazy" />
                    ) : (
                      <BookOpen className="w-8 h-8 text-teal-600" />
                    )}
                    <div className="flex-1">
                      <span className="text-sm text-slate-700 english-text font-medium line-clamp-1">{item.title || "Untitled"}</span>
                      <p className="text-xs text-slate-500 english-text">{item.author || "Unknown"}</p>
                    </div>
                  </div>
                ))}
                <Button
                  className="w-full mt-4 bg-teal-600 hover:bg-teal-700 text-white rounded-full btn-neumorphic py-3 font-semibold"
                  onClick={() => toast.info("Full cart view coming soon!")}
                >
                  View Cart
                </Button>
              </div>
            )}
          </div>
        </div>

        {error ? (
          <div className="text-center py-28 bg-white/90 border border-teal-100/30 rounded-3xl shadow-xl backdrop-blur-md">
            <BookOpen className="w-24 h-24 text-teal-200 mx-auto mb-6 animate-bounce" />
            <h3 className="text-3xl font-bold text-slate-900 english-text mb-4">Failed to Load Books</h3>
            <p className="text-slate-600 english-text mb-4 text-lg">Something went wrong. Please try again.</p>
            <p className="text-slate-600 arabic-text mb-6 text-lg" dir="rtl">حدث خطأ ما. حاول مرة أخرى.</p>
            <Button
              onClick={fetchBooks}
              className="bg-teal-600 hover:bg-teal-700 text-white rounded-full btn-neumorphic px-8 py-3 font-semibold"
              aria-label="Retry loading books"
            >
              Retry
            </Button>
          </div>
        ) : loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 9 }).map((_, index) => (
              <div key={index} className="bg-white/90 border border-teal-100/30 rounded-3xl p-6 animate-pulse shadow-lg">
                <div className="h-72 bg-teal-100/30 rounded-2xl mb-4"></div>
                <div className="h-6 bg-teal-100/30 rounded w-3/4 mb-2"></div>
                <div className="h-5 bg-teal-100/30 rounded w-1/2 mb-4"></div>
                <div className="h-10 bg-teal-100/30 rounded-2xl"></div>
              </div>
            ))}
          </div>
        ) : filteredBooks.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentBooks.map((book, index) => (
                <Card
                  key={book._id || index}
                  role="button"
                  aria-label={`View ${book.title || "Untitled"} by ${book.author || "Unknown"}`}
                  tabIndex={0}
                  
                  className="bg-white/90 border border-teal-100/30 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-3xl overflow-hidden group backdrop-blur-md"
                  style={{ animationDelay: `${index * 120}ms` }}
                  
                >
                  <CardHeader className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <Badge className={`${getCategoryColor(book.category)} text-white px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide shadow-sm`}>
                        {book.categoryAr || book.category || "Unknown"}
                      </Badge>
                      <BookOpen className="w-8 h-8 text-teal-600 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-2xl arabic-text font-bold text-slate-900 group-hover:text-teal-600 transition-colors duration-200" dir="rtl">
                      {book.titleAr || book.title || "Untitled"}
                    </CardTitle>
                    <CardDescription className="text-base english-text text-slate-600 font-semibold">
                      {book.author || "Unknown"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    {book.imageUrl ? (
                      <Image
                        src={book.imageUrl}
                        alt={`Cover of ${book.title || "Untitled"} by ${book.author || "Unknown"}`}
                        className="w-full h-72 object-contain rounded-2xl mb-4 bg-cream-50 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-2"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-72 bg-cream-50 rounded-2xl mb-4 flex items-center justify-center">
                        <BookOpen className="w-20 h-20 text-teal-200" />
                      </div>
                    )}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        {book.rating ? (
                          <>
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-6 h-6  "text-amber-400 fill-amber-400" : "text-slate-200"}`}
                              />
                            ))}
                            <span className="text-sm text-slate-600 english-text ml-2 font-medium">({book.rating})</span>
                          </>
                        ) : (
                          <span className="text-sm text-slate-600 english-text font-medium">No ratings yet</span>
                        )}
                      </div>
                      {book.price && (
                        <span className="text-base font-bold text-teal-600 english-text">${book.price.toFixed(2)}</span>
                      )}
                    </div>
                    <p className="text-sm text-slate-600 english-text mb-3 line-clamp-2 font-medium">
                      {book.description || "No description available"}
                    </p>
                    <p className="text-sm text-slate-600 arabic-text mb-4 line-clamp-2 font-medium" dir="rtl">
                      {book.descriptionAr || book.description || "لا يوجد وصف متاح"}
                    </p>
                    <div className="flex justify-between items-center gap-4">
                      <Button
                        className="flex-1 bg-teal-600 hover:bg-teal-700 text-white rounded-full btn-neumorphic py-3 font-bold"
                        onClick={(e) => {
                          e.stopPropagation();
                          openBook(book);
                        }}
                      >
                        <Eye className="w-6 h-6 mr-2" />
                        Preview
                      </Button>
                      <Button
                        variant="outline"
                        className="flex-1 bg-white/90 border-coral-200 text-coral-600 hover:bg-coral-50 btn-neumorphic py-3 font-bold"
                        onClick={(e) => addToCart(book, e)}
                      >
                        <ShoppingCart className="w-6 h-6 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-12 gap-4">
                <Button
                  variant="outline"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                  className="bg-white/90 border-teal-200 text-teal-600 hover:bg-teal-50 btn-neumorphic rounded-full px-6 py-3 font-semibold"
                  aria-label="Previous page"
                >
                  Previous
                </Button>
                {totalPages <= 5 ? (
                  Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      onClick={() => setCurrentPage(page)}
                      className={currentPage === page ? "bg-teal-600 text-white rounded-full btn-neumorphic" : "bg-white/90 border-teal-200 text-teal-600 hover:bg-teal-50 btn-neumorphic rounded-full"}
                      aria-label={`Page ${page}`}
                    >
                      {page}
                    </Button>
                  ))
                ) : (
                  <>
                    <Button
                      variant={currentPage === 1 ? "default" : "outline"}
                      onClick={() => setCurrentPage(1)}
                      className={currentPage === 1 ? "bg-teal-600 text-white rounded-full btn-neumorphic" : "bg-white/90 border-teal-200 text-teal-600 hover:bg-teal-50 btn-neumorphic rounded-full"}
                      aria-label="First page"
                    >
                      1
                    </Button>
                    {currentPage > 3 && <span className="text-slate-600 text-lg">...</span>}
                    {Array.from({ length: 3 }, (_, i) => currentPage - 1 + i).map((page) => (
                      page > 1 && page < totalPages && (
                        <Button
                          key={page}
                          variant={currentPage === page ? "default" : "outline"}
                          onClick={() => setCurrentPage(page)}
                          className={currentPage === page ? "bg-teal-600 text-white rounded-full btn-neumorphic" : "bg-white/90 border-teal-200 text-teal-600 hover:bg-teal-50 btn-neumorphic rounded-full"}
                          aria-label={`Page ${page}`}
                        >
                          {page}
                        </Button>
                      )
                    ))}
                    {currentPage < totalPages - 2 && <span className="text-slate-600 text-lg">...</span>}
                    <Button
                      variant={currentPage === totalPages ? "default" : "outline"}
                      onClick={() => setCurrentPage(totalPages)}
                      className={currentPage === totalPages ? "bg-teal-600 text-white rounded-full btn-neumorphic" : "bg-white/90 border-teal-200 text-teal-600 hover:bg-teal-50 btn-neumorphic rounded-full"}
                      aria-label="Last page"
                    >
                      {totalPages}
                    </Button>
                  </>
                )}
                <Button
                  variant="outline"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                  className="bg-white/90 border-teal-200 text-teal-600 hover:bg-teal-50 btn-neumorphic rounded-full px-6 py-3 font-semibold"
                  aria-label="Next page"
                >
                  Next
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-28 bg-white/90 border border-teal-100/30 rounded-3xl shadow-xl backdrop-blur-md">
            <BookOpen className="w-24 h-24 text-teal-200 mx-auto mb-6 animate-bounce" />
            <h3 className="text-3xl font-bold text-slate-900 english-text mb-4">No Books Found</h3>
            <p className="text-slate-600 english-text mb-4 text-lg">Try a different search or explore our top categories.</p>
            <p className="text-slate-600 arabic-text mb-8 text-lg" dir="rtl">جرب بحثًا مختلفًا أو استكشف الفئات الشائعة</p>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.slice(0, 4).map((category) => (
                <Button
                  key={category.name}
                  variant="outline"
                  onClick={() => {
                    setSelectedCategory(category.name);
                    setCurrentPage(1);
                  }}
                  className="bg-white/90 border-teal-200 text-teal-600 hover:bg-teal-50 btn-neumorphic rounded-full px-6 py-3 font-semibold"
                  aria-label={`Explore ${category.name}`}
                >
                  <category.icon className="w-6 h-6 mr-2" />
                  <span className="english-text text-base font-bold">{category.name}</span>
                </Button>
              ))}
            </div>
            <Button
              onClick={clearFilters}
              className="mt-8 bg-teal-600 hover:bg-teal-700 text-white rounded-full btn-neumorphic px-8 py-3 font-semibold"
              aria-label="Clear search and filters"
            >
              Clear Search
            </Button>
          </div>
        )}

        <Dialog open={isBookOpen} onOpenChange={setIsBookOpen}>
          <DialogContent className="max-w-6xl sm:max-w-[95vw] h-[90vh] bg-white/90 rounded-3xl overflow-hidden sm:rounded-none sm:h-full backdrop-blur-md">
            <DialogHeader className="sticky top-0 z-10 bg-white/90 border-b border-teal-100/30 p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <DialogTitle className="text-3xl sm:text-4xl arabic-text font-bold text-slate-900" dir="rtl">
                    {selectedBook?.titleAr || selectedBook?.title || "Untitled"}
                  </DialogTitle>
                  <DialogDescription className="text-base sm:text-lg english-text text-teal-600 font-semibold">
                    {selectedBook?.title || "Untitled"} by {selectedBook?.author || "Unknown"}
                  </DialogDescription>
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => document.documentElement.requestFullscreen()}
                    aria-label="Toggle fullscreen"
                    className="hover:bg-teal-50 rounded-full"
                  >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4h4m8 0h4v4m-4 8h4v4m-8-4v4h-4" />
                    </svg>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => document.body.classList.toggle("dark")}
                    aria-label="Toggle dark mode"
                    className="hover:bg-teal-50 rounded-full"
                  >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => shareBook(selectedBook!)}
                    aria-label="Share book"
                    className="hover:bg-teal-50 rounded-full"
                  >
                    <Share2 className="w-7 h-7 text-slate-600" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={closeBook} aria-label="Close dialog" className="hover:bg-teal-50 rounded-full">
                    <X className="w-7 h-7 text-slate-600" />
                  </Button>
                </div>
              </div>
            </DialogHeader>
            <div className="p-8 sm:p-10 overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                <div className="md:col-span-2">
                  {selectedBook?.imageUrl ? (
                    <Image
                      src={selectedBook.imageUrl}
                      alt={`Cover of ${selectedBook.title || "Untitled"}`}
                      className="w-full h-96 object-contain rounded-2xl bg-cream-50 shadow-xl transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-96 bg-cream-50 rounded-2xl flex items-center justify-center shadow-xl">
                      <BookOpen className="w-24 h-24 text-teal-200" />
                    </div>
                  )}
                  <div className="mt-6 flex items-center gap-2">
                    {selectedBook?.rating ? (
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-7 h-7  "text-amber-400 fill-amber-400" : "text-slate-200"}`}
                          />
                        ))}
                        <span className="text-base text-slate-600 english-text ml-3 font-semibold">({selectedBook.rating})</span>
                      </div>
                    ) : (
                      <span className="text-base text-slate-600 english-text font-semibold">No ratings yet</span>
                    )}
                  </div>
                  <p className="mt-4 text-base text-slate-600 english-text font-medium">
                    Category: {selectedBook?.category || "Unknown"}
                  </p>
                  <p className="text-base text-slate-600 arabic-text font-medium" dir="rtl">
                    الفئة: {selectedBook?.categoryAr || "غير معروف"}
                  </p>
                  {selectedBook?.price && (
                    <p className="mt-2 text-lg font-bold text-teal-600 english-text">${selectedBook.price.toFixed(2)}</p>
                  )}
                </div>
                <div className="md:col-span-3">
                  <div className="flex justify-between items-center mb-8 gap-4">
                    <Button
                      className="flex-1 bg-coral-500 hover:bg-coral-600 text-white rounded-full btn-neumorphic px-8 py-3 font-bold"
                      onClick={(e) => addToCart(selectedBook!, e)}
                    >
                      <ShoppingCart className="w-6 h-6 mr-2" />
                      Add to Cart
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 bg-white/90 border-teal-200 text-teal-600 hover:bg-teal-50 btn-neumorphic px-8 py-3 font-bold"
                      onClick={() => toast.info("Sample content preview coming soon!")}
                    >
                      Read Sample
                    </Button>
                  </div>
                  <div className="prose max-w-none">
                    <p className="text-lg text-slate-600 english-text mb-6 font-medium">
                      {selectedBook?.description || "No description available"}
                    </p>
                    <p className="text-lg text-slate-600 arabic-text mb-8 font-medium" dir="rtl">
                      {selectedBook?.descriptionAr || selectedBook?.description || "لا يوجد وصف متاح"}
                    </p>
                    {selectedBook?.content ? (
                      selectedBook.content.split("\n").map((line, index) => {
                        if (line.startsWith("# ")) {
                          return <h1 key={index} className="text-3xl font-bold text-teal-600 mb-8 mt-10">{line.substring(2)}</h1>;
                        } else if (line.startsWith("- ")) {
                          return <li key={index} className="ml-8 text-slate-700 arabic-text text-lg font-medium">{line.substring(2)}</li>;
                        } else if (line.startsWith("> ")) {
                          return <blockquote key={index} className="border-l-4 border-teal-200 pl-6 text-slate-700 italic text-lg font-medium">{line.substring(2)}</blockquote>;
                        } else if (line.trim() === "") {
                          return <div key={index} className="h-8" />;
                        } else {
                          return <p key={index} className="mb-6 text-slate-700 arabic-text leading-relaxed text-lg font-medium">{line}</p>;
                        }
                      })
                    ) : (
                      <p className="text-slate-600 english-text text-lg font-medium">No content available for this book.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Poppins:wght@400;500;600;700;800;900&display=swap');
        .arabic-text {
          font-family: 'Amiri', serif;
          line-height: 2.5;
          color: #1E293B;
        }
        .english-text {
          font-family: 'Poppins', sans-serif;
          color: #1E293B;
        }
        .card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .card:hover {
          transform: translateY(-8px) rotate(2deg);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2);
        }
        .btn-neumorphic {
          position: relative;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.1), -4px -4px 12px rgba(255, 255, 255, 0.8);
        }
        .btn-neumorphic:active {
          transform: scale(0.95);
          box-shadow: inset 2px 2px 8px rgba(0, 0, 0, 0.1), inset -2px -2px 8px rgba(255, 255, 255, 0.8);
        }
        .btn-neumorphic:hover {
          box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.15), -6px -6px 16px rgba(255, 255, 255, 0.9);
        }
        .btn-neumorphic:after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.5s ease, height 0.5s ease;
        }
        .btn-neumorphic:hover:after {
          width: 200%;
          height: 200%;
        }
        .filter-panel {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: top;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateY(-12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </main>
  );
}
