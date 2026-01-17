
export default function About() {
    return (
      <div className="py-20 px-4 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-display font-bold text-rif-charcoal dark:text-rif-offwhite uppercase mb-8">Small Place. Big Flavor.</h1>
        
        <div className="prose prose-lg mx-auto text-gray-600 dark:text-gray-300 leading-relaxed">
          <p className="mb-6">
            Rif Burger Lab isn't a traditional restaurant. It's an ongoing experiment in Chefchaouen to perfect the art of the burger.
          </p>
          <p className="mb-6">
            We operate two distinct labs under one roof:
          </p>
          <ul className="text-left list-none space-y-4 bg-gray-50 dark:bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-white/10 mb-8">
            <li className="flex items-start">
               <span className="text-2xl mr-3">🌱</span>
               <div>
                  <strong className="text-rif-green block font-display uppercase">Green Lab</strong>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Dedication to plant-based flavor, not just "meat alternatives."</span>
               </div>
            </li>
            <li className="flex items-start">
               <span className="text-2xl mr-3">🥩</span>
               <div>
                  <strong className="text-rif-rust block font-display uppercase">Meat Lab</strong>
                  <span className="text-sm text-gray-700 dark:text-gray-300">High-quality Angus beef, precision-grilled for maximum juice and crust.</span>
               </div>
            </li>
          </ul>
          <p>
            No long stories. Just good food, made right here in the Blue City.
          </p>
        </div>
      </div>
    )
  }
