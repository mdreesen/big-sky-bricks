import Hero from "@/ui/Hero";
import About from '@/ui/About';
import Collections from '@/ui/Collections';
import Services from '@/ui/Services';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <div>
      <Hero />
      <About/>
      <Collections/>
      <Services/>
    </div>
  );
}
