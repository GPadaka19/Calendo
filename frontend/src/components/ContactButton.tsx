"use client";

import { EnvelopeIcon } from '@heroicons/react/24/outline';

export default function ContactButton() {
  return (
    <a
      href="mailto:support@calendo.gpadakacom"
      className="fixed bottom-8 right-8 z-50 flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-indigo-500 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
      Contact Us
    </a>
  );
} 