import Contact from "@/ui/Contact";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Us',
};

export default function Page() {
  return (
    <div>
      <Contact />
    </div>
  );
}
