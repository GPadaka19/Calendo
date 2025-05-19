import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your Class Schedule,<br />
            <span className="text-indigo-600">Simplified</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Upload your class schedule once, and let Calendo handle the rest. 
            Sync with Google Calendar, get reminders, and never miss a class again.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="/signup"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get Started
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              View Pricing <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <Image
              src="/hero-image.svg"
              alt="Calendar preview"
              width={800}
              height={600}
              className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
} 