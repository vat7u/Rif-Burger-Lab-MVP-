import { Link } from 'react-router-dom'

export default function Footer() {
    return (
      <footer className="bg-rif-charcoal border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-8 md:mb-0">
                    <h3 className="text-xl font-display font-bold text-white uppercase tracking-wider">Rif Burger Lab</h3>
                    <p className="text-sm text-gray-400 mt-1">Two Labs. One Standard.</p>
                </div>
                <div className="flex space-x-6 text-sm text-gray-400">
                    <Link to="/menu" className="hover:text-white transition-colors">Menu</Link>
                    <Link to="/order" className="hover:text-white transition-colors">Order</Link>
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
