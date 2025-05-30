'use client';

import Image from 'next/image';
import { scrollToSection } from '@/utils/scrollUtils';

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Your Class Schedule,
            <span className="text-indigo-600 block">Simplified</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Upload your class schedule once, and let Calendo handle the rest. 
            Sync with Google Calendar, get reminders, and never miss a class again.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <button
              onClick={() => scrollToSection('features-section')}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
            >
              Get Started
            </button>
            <button
              onClick={() => scrollToSection('pricing-section')}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 cursor-pointer"
            >
              View Pricing <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="relative w-[76rem]">
            {/* Gambar Background */}
            <Image
              src="/hero-image.svg"
              alt="Calendar background"
              width={800}
              height={600}
              className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
              priority
            />
            {/* Gambar Overlay - Posisi di tengah */}
            <Image
              src="/hero-calendar.svg"
              alt="Calendar overlay"
              width={800}
              height={600}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[65rem] rounded-md"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
} 