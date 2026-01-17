
export default function Order() {
    const defaultMessage = "Hi Rif Burger Lab, I want to order...";
    const whatsappUrl = `https://wa.me/212600000000?text=${encodeURIComponent(defaultMessage)}`;
  
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-rif-charcoal dark:text-rif-offwhite mb-6 uppercase">Ready to Order?</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-lg">
          The fastest way to get your burger is via WhatsApp. No accounts, no hassle.
        </p>
  
        <div className="space-y-4 w-full max-w-sm">
          <a 
            href={whatsappUrl}
            target="_blank" 
            rel="noreferrer"
            className="w-full flex items-center justify-center gap-3 px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-green-500 hover:bg-green-600 shadow-md transition-all hover:shadow-lg hover:-translate-y-1"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
               <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.091-.458.058-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            Send WhatsApp Message
          </a>
  
          <div className="relative flex py-5 items-center">
             <div className="flex-grow border-t border-gray-300"></div>
             <span className="flex-shrink-0 mx-4 text-gray-400 text-sm uppercase">OR</span>
             <div className="flex-grow border-t border-gray-300"></div>
          </div>
  
          <a 
            href="#"
            className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            Order via Glovo/Jumia
          </a>
        </div>
      </div>
    )
  }
