import BuildYourOwn from '@/ui/BuildYourOwn';
import HeroSection from "@/ui/Hero";
import About from '@/ui/About';
import OurProducts from '@/ui/OurProducts';
import Services from '@/ui/Services';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <About/>
      <OurProducts/>
      <Services/>
      {/* <BuildYourOwn /> */}
    </div>
  );
}
