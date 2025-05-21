import Image from 'next/image';

const testimonials = [
  {
    content: "Calendo has been a game-changer for my academic life. The Google Calendar sync is seamless, and I never miss a class anymore!",
    author: {
      name: "Muhammad Naafi Ilalang",
      role: "22.11.5011",
      image: "https://fotomhs.amikom.ac.id/2022/22_11_5011.jpg",
    },
  },
  {
    content: "As someone who takes classes across multiple departments, Calendo's schedule management is exactly what I needed. The conflict detection feature is brilliant.",
    author: {
      name: "Gusti Padaka",
      role: "22.11.5020",
      image: "https://fotomhs.amikom.ac.id/2022/22_11_5020.jpg",
    },
  },
  {
    content: "The CSV upload feature saved me so much time. I just downloaded my schedule from my university portal and uploaded it to Calendo. Everything was set up in minutes!",
    author: {
      name: "Faruq Putra Ahmadi",
      role: "22.11.5047",
      image: "https://fotomhs.amikom.ac.id/2022/22_11_5047.jpg",
    },
  },
];

export default function Testimonials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Loved by students worldwide
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-gray-100 p-8 text-sm leading-6 h-[250px] flex flex-col">
                  <blockquote className="text-gray-900 flex-grow">
                    <p>{`"${testimonial.content}"`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden">
                      <Image
                        className="rounded-full object-cover"
                        src={testimonial.author.image}
                        alt={testimonial.author.name}
                        width={40}
                        height={40}
                        style={{
                          objectPosition: 'center 20%',
                        }}
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                      <div className="text-gray-600">{testimonial.author.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 