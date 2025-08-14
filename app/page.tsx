import Image from "next/image";

import BuildYourOwn from '@/ui/BuildYourOwn';
import HeroSection from "@/ui/Hero";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BuildYourOwn />
    </div>
  );
}
