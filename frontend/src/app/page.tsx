import Image from "next/image";
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Pricing from '@/components/sections/Pricing';
import FAQs from '@/components/sections/FAQs';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <FAQs />
    </>
  );
}
