



export function Footer() {
return(

   <footer className="bg-emerald-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">درسی کتب</h3>
              <p className="text-emerald-200">
                A comprehensive digital library of Islamic educational texts for students and scholars.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-emerald-200">
                <li>Fiqh & Usool al-Fiqh</li>
                <li>Hadith & Tafseer</li>
                <li>Arabic Grammar</li>
                <li>Aqeedah & Tasawwuf</li>
              </ul>
            </div>
            <div className="text-right" dir="rtl">
              <h3 className="text-lg font-semibold mb-4">رابطہ</h3>
              <p className="text-emerald-200">اسلامی تعلیمی کتابوں کا جامع ڈیجیٹل کتب خانہ</p>
            </div>
          </div>
          <div className="border-t border-emerald-700 mt-8 pt-8 text-center">
            <p className="text-emerald-200">© 2024 Islamic Educational Books. All rights reserved.</p>
          </div>
        </div>
      </footer>
    
  )
}
