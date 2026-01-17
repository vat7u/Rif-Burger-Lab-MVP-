
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 py-20 md:py-32 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-rif-charcoal dark:text-rif-offwhite mb-4 uppercase tracking-tight">
            Rif Burger <span className="text-rif-blue">Lab</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-light max-w-2xl mx-auto">
            Two labs. One standard. <span className="block mt-2 font-medium text-rif-charcoal dark:text-rif-offwhite">The Science of Flavor in Chefchaouen.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a 
                href="https://wa.me/212600000000?text=Hi%20Rif%20Burger%20Lab,%20I%20want%20to%20order..." 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rif-blue hover:bg-opacity-90 shadow-sm transition-all hover:shadow-md"
            >
                Order via WhatsApp
            </a>
            <Link 
                to="/menu"
                className="inline-flex items-center justify-center px-8 py-3 border border-rif-charcoal dark:border-white text-base font-medium rounded-md text-rif-charcoal dark:text-white bg-transparent hover:bg-rif-charcoal hover:text-white dark:hover:bg-white dark:hover:text-rif-charcoal transition-all"
            >
                See Menu
            </Link>
        </div>
      </section>

      {/* Split Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full min-h-[500px]">
        {/* Green Lab */}
        <div className="bg-rif-green/20 dark:bg-rif-green/10 relative group p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-rif-charcoal/10 dark:border-white/5 transition-colors hover:bg-rif-green/30 dark:hover:bg-rif-green/20">
             <div className="text-center">
                <span className="text-4xl mb-4 block">🌱</span>
                <h2 className="text-3xl font-display font-bold text-rif-green mb-2">Green Lab</h2>
                <p className="text-rif-charcoal/80 dark:text-gray-200 max-w-xs mx-auto">Plant-based experiments. Fresh from the Rif mountains.</p>
                <Link to="/menu" className="mt-6 inline-block text-sm font-bold uppercase tracking-wider text-rif-green border-b-2 border-rif-green pb-1">Explore Green</Link>
             </div>
        </div>

        {/* Meat Lab */}
        <div className="bg-rif-rust/20 dark:bg-rif-rust/10 relative group p-8 flex flex-col items-center justify-center transition-colors hover:bg-rif-rust/30 dark:hover:bg-rif-rust/20">
            <div className="text-center">
                <span className="text-4xl mb-4 block">🥩</span>
                <h2 className="text-3xl font-display font-bold text-rif-rust mb-2">Meat Lab</h2>
                <p className="text-rif-charcoal/80 dark:text-gray-200 max-w-xs mx-auto">Premium Angus beef. Precision grilled. No compromise.</p>
                <Link to="/menu" className="mt-6 inline-block text-sm font-bold uppercase tracking-wider text-rif-rust border-b-2 border-rif-rust pb-1">Explore Meat</Link>
            </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-white dark:bg-white/5 py-16 px-4 border-t border-rif-charcoal/10 dark:border-white/10">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
            <div>
                <h3 className="text-lg font-bold uppercase tracking-wider mb-2 text-rif-charcoal dark:text-white">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">
                    Avenue Hassan II<br />
                    Chefchaouen, Morocco 91000
                </p>
                <a href="#" className="text-rif-blue text-sm underline mt-2 inline-block">View Map</a>
            </div>
            <div className="md:text-right">
                <h3 className="text-lg font-bold uppercase tracking-wider mb-2 text-rif-charcoal dark:text-white">Opening Hours</h3>
                <p className="text-gray-600 dark:text-gray-300">
                    Daily: 12:00 PM - 11:00 PM<br />
                    <span className="text-green-600 dark:text-green-400 font-medium">● Open Now</span>
                </p>
            </div>
        </div>
      </section>
    </div>
  )
}
