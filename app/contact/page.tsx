// "use client"

// import { useState } from "react"
// import { Mail, Phone, MapPin, Send, Globe, CheckCircle } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"


// const contactInfo = [
//   {
//     icon: Mail,
//     title: "Email Us",
//     titleAr: "ای میل کریں",
//     value: "info@darsibooks.com",
//     description: "Send us your questions anytime",
//     color: "from-blue-500 to-cyan-500",
//   },
//   {
//     icon: Phone,
//     title: "Call Us",
//     titleAr: "فون کریں",
//     value: "+92 300 1234567",
//     description: "Available 9 AM - 6 PM (PKT)",
//     color: "from-emerald-500 to-teal-500",
//   },
//   {
//     icon: MapPin,
//     title: "Visit Us",
//     titleAr: "ملاقات کریں",
//     value: "Karachi, Pakistan",
//     description: "Islamic Educational Center",
//     color: "from-purple-500 to-pink-500",
//   },
//   {
//     icon: Globe,
//     title: "Website",
//     titleAr: "ویب سائٹ",
//     value: "www.darsibooks.com",
//     description: "24/7 Online Access",
//     color: "from-orange-500 to-red-500",
//   },
// ]

// const faqs = [
//   {
//     question: "How can I access the books?",
//     questionAr: "ک��ابوں تک کیسے رسائی حاصل کروں؟",
//     answer: "All books are freely available online. Simply browse our library and click on any book to start reading.",
//   },
//   {
//     question: "Are the books authentic?",
//     questionAr: "کیا یہ کتابیں معتبر ہیں؟",
//     answer:
//       "Yes, all our books are from verified Islamic scholars and authentic sources. We ensure quality and authenticity.",
//   },
//   {
//     question: "Can I download books for offline reading?",
//     questionAr: "کیا میں آف لائن پڑھنے کے لیے کتابیں ڈاؤن لوڈ کر سکتا ہوں؟",
//     answer: "Yes, most books are available for download in PDF format for offline reading and study.",
//   },
//   {
//     question: "How can I contribute or suggest books?",
//     questionAr: "میں کتابوں کا تعاون یا تجویز کیسے دے سکتا ہوں؟",
//     answer: "You can contact us through this form or email to suggest new books or contribute to our collection.",
//   },
// ]



// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [isSubmitted, setIsSubmitted] = useState(false)

//   const handleSubmit = async (e: { preventDefault: () => void }) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     // Simulate form submission
//     await new Promise((resolve) => setTimeout(resolve, 2000))

//     setIsSubmitting(false)
//     setIsSubmitted(true)
//     setFormData({ name: "", email: "", subject: "", message: "" })

//     // Reset success message after 5 seconds
//     setTimeout(() => setIsSubmitted(false), 5000)
//   }

//   const handleChange = (
//   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
// ) => {
//   setFormData({
//     ...formData,
//     [e.target.name]: e.target.value,
//   });
// };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
     

//       {/* Header Section */}
//       <section className="pt-32 pb-16 bg-gradient-to-r from-emerald-600/10 via-blue-600/10 to-purple-600/10">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-6xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
//             Contact Us
//           </h1>
//           <h2 className="text-4xl font-bold text-slate-800 mb-4" dir="rtl">
//             ہم سے رابطہ کریں
//           </h2>
//           <p className="text-xl text-slate-600 max-w-2xl mx-auto">
//             We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
//           </p>
//         </div>
//       </section>

//       {/* Contact Info Cards */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
//             {contactInfo.map((info, index) => {
//               const IconComponent = info.icon
//               return (
//                 <Card
//                   key={index}
//                   className="group relative bg-white/90 backdrop-blur-lg border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 rounded-2xl overflow-hidden"
//                   style={{
//                     animationDelay: `${index * 150}ms`,
//                     animation: "fadeInUp 0.6s ease-out forwards",
//                   }}
//                 >
//                   <div
//                     className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
//                   />

//                   <CardHeader className="relative text-center pb-4">
//                     <div
//                       className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
//                     >
//                       <IconComponent className="w-8 h-8 text-white" />
//                     </div>
//                     <CardTitle className="text-xl font-bold text-slate-800 mb-1">{info.title}</CardTitle>
//                     <CardDescription className="text-lg font-semibold text-slate-600" dir="rtl">
//                       {info.titleAr}
//                     </CardDescription>
//                   </CardHeader>

//                   <CardContent className="relative text-center">
//                     <p className="font-bold text-slate-800 mb-2">{info.value}</p>
//                     <p className="text-sm text-slate-600">{info.description}</p>
//                   </CardContent>
//                 </Card>
//               )
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Contact Form & FAQ Section */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 ">
//             {/* Contact Form */}
//             <div>
//               <Card className="bg-white/90 backdrop-blur-lg border justify-between border-white/20 shadow-2xl rounded-3xl overflow-hidden">
//                 <CardHeader className="bg-gradient-to-r from-emerald-50 to-blue-50 p-8 ">
//                   <CardTitle className="text-3xl font-bold text-slate-800 mb-2">Send Message</CardTitle>
//                   <CardDescription className="text-lg text-slate-600" dir="rtl">
//                     پیغام بھیجیں
//                   </CardDescription>
//                 </CardHeader>

//                 <CardContent className="p-8">
//                   {isSubmitted && (
//                     <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center space-x-3">
//                       <CheckCircle className="w-6 h-6 text-emerald-600" />
//                       <div>
//                         <p className="font-semibold text-emerald-800">Message Sent Successfully!</p>
//                         <p className="text-sm text-emerald-600">We&apos;ll get back to you soon.</p>
//                       </div>
//                     </div>
//                   )}

//                   <form onSubmit={handleSubmit} className="space-y-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <div>
//                         <label className="block text-sm font-semibold text-slate-700 mb-2">Name / نام</label>
//                         <Input
//                           type="text"
//                           name="name"
//                           value={formData.name}
//                           onChange={handleChange}
//                           placeholder="Your full name"
//                           required
//                           className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all duration-200"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-semibold text-slate-700 mb-2">Email / ای میل</label>
//                         <Input
//                           type="email"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleChange}
//                           placeholder="your.email@example.com"
//                           required
//                           className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all duration-200"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-semibold text-slate-700 mb-2">Subject / موضوع</label>
//                       <Input
//                         type="text"
//                         name="subject"
//                         value={formData.subject}
//                         onChange={handleChange}
//                         placeholder="What is this about?"
//                         required
//                         className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all duration-200"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-semibold text-slate-700 mb-2">Message / پیغام</label>
//                       <Textarea
//                         name="message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         placeholder="Write your message here..."
//                         required
//                         rows={6}
//                         className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all duration-200 resize-none"
//                       />
//                     </div>

//                     <Button
//                       type="submit"
//                       disabled={isSubmitting}
//                       className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
//                     >
//                       {isSubmitting ? (
//                         <div className="flex items-center space-x-2">
//                           <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                           <span>Sending...</span>
//                         </div>
//                       ) : (
//                         <div className="flex items-center space-x-2">
//                           <Send className="w-5 h-5" />
//                           <span>Send Message</span>
//                         </div>
//                       )}
//                     </Button>
//                   </form>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* FAQ Section */}
//             <div>
//               <div className="mb-8">
               
//               </div>

             

            
//             </div>
//           </div>
//         </div>
//       </section>

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
//       `}</style>
//     </div>
//   )
// }
















"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Book, Leaf } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Optionally clear the form
    setFormData({ name: "", email: "", message: "" });

    // Add backend API call here if needed
  };

  return (


    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-3xl mx-auto py-20 px-6"
    >
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">📩 Contact Us</h1>
        <p className="text-muted-foreground">We'd love to hear from you.</p>
      </div>
      

      <Separator className="mb-8" />

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Message</label>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message here..."
            rows={5}
            required
          />
        </div>

        <Button type="submit" className="w-full">
          Send Message
        </Button>

        {submitted && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-600 text-center mt-4 font-semibold"
          >
            ✅ Your message has been sent successfully!
          </motion.p>
        )}
      </form>

      
    </motion.div>
  );
}
