



export function Footer() {
return(

 <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
  <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    
    {/* Logo & Tagline */}
    <div>
      <h2 className="text-2xl font-bold text-white">Noor-e-Kitab</h2>
      <p className="mt-2 text-sm">A library of light, guiding souls with sacred words.</p>
    </div>

    {/* Quick Links */}
    <div>
      <h3 className="text-white font-semibold mb-2">Quick Links</h3>
      <ul className="space-y-1 text-sm">
        <li><a href="/" className="hover:text-white">Home</a></li>
        <li><a href="/books" className="hover:text-white">Books</a></li>
        <li><a href="/about" className="hover:text-white">About</a></li>
        <li><a href="/contact" className="hover:text-white">Contact</a></li>
      </ul>
    </div>

    {/* Follow Us */}
    <div>
      <h3 className="text-white font-semibold mb-2">Follow Us</h3>
      <ul className="space-y-1 text-sm">
        <li><a href="#" className="hover:text-white">Instagram</a></li>
        <li><a href="#" className="hover:text-white">YouTube</a></li>
        <li><a href="#" className="hover:text-white">Telegram</a></li>
      </ul>
    </div>

    {/* Du'a Section */}
    <div>
      <h3 className="text-white font-semibold mb-2">Make Du'a</h3>
      <p className="text-sm">May Allah ﷻ make this effort a source of Sadaqah Jariyah. Ameen.</p>
    </div>
  </div>

  {/* Bottom Copyright */}
  <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
    © {new Date().getFullYear()} Noor-e-Kitab. All rights reserved.
  </div>
</footer>
)}