import Products from "@/ui/Products";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Lego Products',
};

export default function Page() {
  return (
    <div>
      <Products />
    </div>
  );
}
