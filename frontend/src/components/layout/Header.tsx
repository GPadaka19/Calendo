'use client';

import Link from 'next/link';

export default function Header() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      const headerOffset = -110; // Sesuaikan dengan tinggi header Anda
      const elementPosition = pricingSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-indigo-600">Calendo</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={scrollToPricing}
              className="text-gray-600 hover:text-gray-900"
            >
              Pricing
            </button>
            <Link href="mailto:support@calendo.gpadaka.com" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
            <Link 
              href="/login" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
} 