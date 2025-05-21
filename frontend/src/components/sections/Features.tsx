import { 
  CloudArrowUpIcon, 
  PencilSquareIcon, 
  CalendarIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'CSV Upload',
    description: 'Upload your class schedule in CSV format. We support all major university schedule formats.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Manual Entry',
    description: 'Prefer to enter your schedule manually? Our intuitive interface makes it quick and easy.',
    icon: PencilSquareIcon,
  },
  {
    name: 'Google Calendar Sync',
    description: 'Automatically sync your classes with Google Calendar. Get reminders and never miss a class.',
    icon: CalendarIcon,
  },
];

export default function Features() {
  return (
    <div id="features-section" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Streamline Your Schedule
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to manage your classes
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Calendo makes it easy to organize your academic life. Upload your schedule once, and we&apos;ll handle the rest.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 