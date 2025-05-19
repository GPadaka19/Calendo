import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const faqs = [
  {
    question: 'How does the CSV upload work?',
    answer: 'Simply download our CSV template, fill in your class schedule details, and upload it to Calendo. We support most university schedule formats and will automatically detect the structure of your CSV file.',
  },
  {
    question: 'Can I sync with Google Calendar?',
    answer: 'Yes! With our Student+ and Pro plans, you can automatically sync your class schedule with Google Calendar. This includes class times, locations, and any schedule updates.',
  },
  {
    question: 'What happens if my schedule changes?',
    answer: "You can easily update your schedule at any time. Just upload a new CSV file or make manual changes, and we'll automatically update your calendar and send notifications about the changes.",
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We take data security seriously. All data is encrypted in transit and at rest. We never share your information with third parties, and you can delete your data at any time.',
  },
  {
    question: 'Can I use Calendo on my phone?',
    answer: 'Yes! Calendo is fully responsive and works great on all devices. You can access your schedule, make changes, and receive notifications on your phone, tablet, or computer.',
  },
  {
    question: 'What if I need help?',
    answer: 'We offer email support for all users, with priority support for Student+ and Pro subscribers. Our support team typically responds within 24 hours, and we have a comprehensive help center with guides and tutorials.',
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq, index) => (
              <div key={index} className="pt-6">
                <dt>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between text-left text-gray-900"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="text-base font-semibold leading-7">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <ChevronDownIcon
                        className={`h-6 w-6 transform transition-transform duration-200 ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </span>
                  </button>
                </dt>
                <dd
                  className={`mt-2 pr-12 transition-all duration-200 ${
                    openIndex === index ? 'block' : 'hidden'
                  }`}
                >
                  <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 