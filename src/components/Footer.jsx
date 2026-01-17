
export default function Footer() {
    return (
      <footer className="bg-rif-charcoal text-rif-offwhite py-8 mt-auto">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <span className="font-display font-bold text-lg uppercase tracking-tight">Rif Burger Lab</span>
                    <p className="text-sm text-gray-400 mt-1">Two Labs. One Standard.</p>
                </div>
                <div className="flex space-x-6 text-sm text-gray-400">
                    <a href="/menu" className="hover:text-white transition-colors">Menu</a>
                    <a href="/order" className="hover:text-white transition-colors">Order</a>
                    <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Location</a>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 text-center text-xs text-gray-500">
                &copy; 2024 Rif Burger Lab. Chefchaouen, Morocco.
            </div>
        </div>
      </footer>
    )
  }
