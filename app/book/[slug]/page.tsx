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

import { useState, useEffect } from "react";
import { toast } from "sonner";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Search, BookOpen, Book, Heart, GraduationCap, Filter, X, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Define the Book type
type Book = {
  _id?: string;
  title: string;
  author: string;
  description: string;
  imageUrl: string;
  pdfUrl: string;
  category?: string;
  categoryAr?: string;
  titleAr?: string;
  descriptionAr?: string;
  content?: string;
};

// Define categories
const categories = [
  { name: "All", nameAr: "تمام", icon: BookOpen, color: "from-blue-500 to-purple-600" },
  { name: "Fiqh", nameAr: "فقہ", icon: Book, color: "from-emerald-500 to-teal-600" },
  { name: "Hadith", nameAr: "حدیث", icon: Heart, color: "from-rose-500 to-pink-600" },
  { name: "Arabic Grammar", nameAr: "عربی گرامر", icon: GraduationCap, color: "from-amber-500 to-orange-600" },
  { name: "Tafseer", nameAr: "تفسیر", icon: BookOpen, color: "from-indigo-500 to-blue-600" },
  { name: "Aqeedah", nameAr: "عقیدہ", icon: Heart, color: "from-violet-500 to-purple-600" },
  { name: "Tasawwuf", nameAr: "تصوف", icon: Heart, color: "from-cyan-500 to-blue-600" },
  { name: "Logic", nameAr: "منطق", icon: GraduationCap, color: "from-slate-500 to-gray-600" },
  { name: "Usool al-Fiqh", nameAr: "اصول الفقہ", icon: Book, color: "from-green-500 to-emerald-600" },
];

export default function BooksPage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Fixed typo
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 12;

  // Fetch books from API
  const fetchBooks = async () => {
    try {
      const res = await fetch("https://frontend-rho-jet-76.vercel.app/api/booklibrary");
      if (!res.ok) {
        const text = await res.text();
        console.error("❌ Response not OK:", text);
        throw new Error(`Request failed with status ${res.status}`);
      }
      const data = await res.json();
      console.log("📚 Data:", data);
      setBooks(data.reverse());
    } catch (err) {
      console.error("🚨 Fetch Error:", err);
      toast.error("Failed to fetch books");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // Filter books based on search term and category
  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (book.titleAr && book.titleAr.includes(searchTerm)) ||
      (book.descriptionAr && book.descriptionAr.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination logic
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
    toast.error("📚 Book content not available.");
  }
};

  const closeBook = () => {
    setIsBookOpen(false);
    setSelectedBook(null);
  };

  const getCategoryColor = (categoryName?: string) => {
    const category = categories.find((cat) => cat.name === categoryName);
    return category?.color || "from-gray-500 to-gray-600";
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Section */}
        <section className="pt-32 pb-16 bg-gradient-to-r from-emerald-600/10 via-blue-600/10 to-purple-600/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Library
              </h1>
              <h2 className="text-4xl font-bold text-slate-800 mb-4" dir="rtl">
                کتب خانہ
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Browse our comprehensive collection of Islamic educational books
              </p>
            </div>

            {/* Search and Filter Section */}
            <div className="max-w-4xl mx-auto">
              {/* Search Bar */}
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl blur opacity-20" />
                <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20">
                  <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-slate-400 w-6 h-6" />
                  <Input
                    type="text"
                    placeholder="Search books by title, author, or category... / کتابیں تلاش کریں"
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="pl-16 pr-20 py-6 w-full bg-transparent border-0 text-lg placeholder:text-slate-400 focus:ring-0 focus:outline-none"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2"
                    onClick={() => setShowFilters(!showFilters)}
                  >
                    <Filter className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Category Filters */}
              <div
                className={`transition-all duration-500 overflow-hidden ${
                  showFilters ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
                } transform origin-top`}
              >
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 mb-8">
                  <h3 className="text-lg font-semibold text-slate-700 mb-4">Filter by Category</h3>
                  <div className="flex flex-wrap gap-3">
                    {categories.map((category) => {
                      const IconComponent = category.icon;
                      const isSelected = selectedCategory === category.name;
                      return (
                        <Button
                          key={category.name}
                          variant="ghost"
                          onClick={() => {
                            setSelectedCategory(category.name);
                            setCurrentPage(1);
                          }}
                          className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                            isSelected
                              ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg"
                              : "bg-white/50 hover:bg-white/80 text-slate-700"
                          }`}
                        >
                          <IconComponent className="w-4 h-4" />
                          <span>{category.name}</span>
                          <span className="text-xs">({category.nameAr})</span>
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Books Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-800">
                  {selectedCategory === "All" ? "All Books" : selectedCategory}
                </h3>
                <p className="text-slate-600">{filteredBooks.length} books found</p>
              </div>
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="bg-white/80 backdrop-blur-sm"
              >
                <Filter className="w-4 h-4 mr-2" />
                {showFilters ? "Hide Filters" : "Show Filters"}
              </Button>
            </div>

            {loading ? (
              <p className="text-center text-slate-600 text-lg animate-pulse">Loading books...</p>
            ) : filteredBooks.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {currentBooks.map((book, index) => (
                    <Card
                      key={book._id}
                      className="group relative bg-white/90 backdrop-blur-lg border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden rounded-2xl"
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animation: "fadeInUp 0.6s ease-out forwards",
                      }}
                      onClick={() => openBook(book)}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(book.category)} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                      />
                      <CardHeader className="relative pb-4">
                        <div className="flex items-start justify-between mb-4">
                          <Badge
                            className={`bg-gradient-to-r ${getCategoryColor(book.category)} text-white border-0 shadow-lg px-3 py-1 rounded-full`}
                          >
                            {book.categoryAr || book.category || "Unknown"}
                          </Badge>
                          <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                            <BookOpen className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <CardTitle
                          className="text-lg leading-relaxed text-right font-bold text-slate-800 group-hover:text-emerald-700 transition-colors duration-300 mb-2"
                          dir="rtl"
                        >
                          {book.titleAr || book.title}
                        </CardTitle>
                        <CardDescription className="text-sm font-semibold text-slate-600 mb-2">
                          {book.title}
                        </CardDescription>
                        <p className="text-xs text-slate-500 text-right font-medium" dir="rtl">
                          مصنف: {book.author}
                        </p>
                      </CardHeader>
                      <CardContent className="relative">
                        {book.imageUrl && (
                          <img
                            src={book.imageUrl}
                            alt={book.title}
                            className="w-full h-40 object-cover rounded-md mb-4"
                          />
                        )}
                        <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                          {book.description}
                        </p>
                        {book.pdfUrl && (
                          <p className="text-sm text-slate-500 text-right mb-4 line-clamp-2" dir="rtl">
                            {book.descriptionAr}
                          </p>
                        )}
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 rounded-xl"
                            onClick={(e) => {
                              e.stopPropagation();
                              openBook(book);
                            }}
                          >
                            <Eye className="w-3 h-3 mr-1" />
                            پڑھیں
                          </Button>
                          {book.pdfUrl && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-xl transition-all duration-200 bg-transparent"
                              asChild
                            >
                              <a href={book.pdfUrl} target="_blank" rel="noopener noreferrer">
                                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20h9" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                                Download
                              </a>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                {totalPages > 1 && (
                  <div className="flex justify-center mt-8 space-x-2">
                    <Button
                      variant="outline"
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((prev) => prev - 1)}
                      className="bg-white/80 backdrop-blur-sm"
                    >
                      Previous
                    </Button>
                    <span className="text-slate-600 self-center">
                      Page {currentPage} of {totalPages}
                    </span>
                    <Button
                      variant="outline"
                      disabled={currentPage === totalPages}
                      onClick={() => setCurrentPage((prev) => prev + 1)}
                      className="bg-white/80 backdrop-blur-sm"
                    >
                      Next
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-20">
                <div className="w-32 h-32 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl">
                  <BookOpen className="w-16 h-16 text-slate-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-600 mb-4">No books found</h3>
                <p className="text-slate-400 text-lg">کوئی کتاب نہیں ملی</p>
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                    setCurrentPage(1);
                    fetchBooks();
                  }}
                  className="mt-6 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl px-6 py-2"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Book Reader Modal */}
        <Dialog open={isBookOpen} onOpenChange={setIsBookOpen}>
          <DialogContent
            className="max-w-6xl max-h-[95vh] p-0 bg-white/95 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl overflow-hidden"
            aria-describedby="dialog-description"
            aria-label={selectedBook ? `Read ${selectedBook.title}` : "Book Reader"}
          >
            <DialogHeader className="p-8 pb-4 border-b border-slate-200/50 bg-gradient-to-r from-slate-50 to-blue-50">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <DialogTitle className="text-3xl text-right font-bold text-slate-800 mb-2" dir="rtl">
                    {selectedBook?.titleAr || selectedBook?.title}
                  </DialogTitle>
                  <DialogDescription id="dialog-description" className="text-lg text-emerald-600 font-semibold mb-1">
                    {selectedBook ? `${selectedBook.title} by ${selectedBook.author}` : "Book details"}
                  </DialogDescription>
                  <p className="text-sm text-slate-500 text-right font-medium" dir="rtl">
                    مصنف: {selectedBook?.author}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeBook}
                  className="h-12 w-12 p-0 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors duration-200"
                  aria-label="Close dialog"
                >
                  <X className="h-6 w-6 text-slate-600" />
                </Button>
              </div>
            </DialogHeader>
            <div className="flex-1 p-8 overflow-y-auto">
              <div className="prose prose-xl max-w-none">
                <div
                  className="text-right leading-loose"
                  dir="rtl"
                  style={{
                    fontFamily: "system-ui, -apple-system, sans-serif",
                    lineHeight: "2.2",
                    fontSize: "18px",
                  }}
                >
                  {selectedBook?.content ? (
                    selectedBook.content.split("\n").map((line, index) => {
                      if (line.startsWith("# ")) {
                        return (
                          <h1
                            key={index}
                            className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-8 mt-12 text-center"
                          >
                            {line.substring(2)}
                          </h1>
                        );
                      } else if (line.startsWith("## ")) {
                        return (
                          <h2
                            key={index}
                            className="text-2xl font-bold text-slate-700 mb-6 mt-10 border-b-2 border-emerald-200 pb-2"
                          >
                            {line.substring(3)}
                          </h2>
                        );
                      } else if (line.startsWith("### ")) {
                        return (
                          <h3 key={index} className="text-xl font-semibold text-emerald-600 mb-4 mt-8">
                            {line.substring(4)}
                          </h3>
                        );
                      } else if (line.startsWith("**") && line.endsWith("**")) {
                        return (
                          <p
                            key={index}
                            className="font-bold text-slate-800 mb-4 bg-emerald-50 p-4 rounded-xl border-l-4 border-emerald-400"
                          >
                            {line.substring(2, line.length - 2)}
                          </p>
                        );
                      } else if (line.trim() === "") {
                        return <div key={index} className="h-4" />;
                      } else {
                        return (
                          <p key={index} className="mb-4 text-slate-700 leading-relaxed">
                            {line}
                          </p>
                        );
                      }
                    })
                  ) : (
                    <p className="text-slate-600">No content available for this book.</p>
                  )}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </main>
  );
}