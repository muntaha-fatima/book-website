// 'use client'
// import { useRouter } from 'next/navigation'
// import { bookData } from '@/lib/book'
// import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'
// import { Eye, Download } from 'lucide-react'

// export default function BookLibrary() {
//   const router = useRouter()

//   return (
//     <div className="p-10">
//       <h1 className="text-3xl font-bold text-center mb-8">📚 کتب خانہ</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {bookData.map((book) => (
//           <Card key={book.slug}>
//             <CardHeader>
//               <CardTitle>{book.title}</CardTitle>
//               <p className="text-sm text-slate-500">{book.titleEn}</p>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <p className="text-sm text-slate-600">مصنف: {book.author}</p>
//               <img src={book.cover} alt={book.title} className="rounded-md w-full h-48 object-cover" />
//               <div className="flex gap-2">
//                 <Button onClick={() => router.push(`/book/${book.slug}`)}>
//                   <Eye className="w-4 h-4 mr-1" />
//                   Read
//                 </Button>
//                 <Button variant="outline" onClick={() => window.open(book.pdf, '_blank')}>
//                   <Download className="w-4 h-4 mr-1" />
//                   Download
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   )
// }
