import { Suspense } from "react";
import Products from "@/ui/Products";
import { ProductsLoadingSkeleton } from '@/components/loaders/ProductLoadingSkeletons';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Lego Products',
};

export default function Page() {
  return (
    <div>
      <Suspense fallback={<ProductsLoadingSkeleton/>}>
        <Products />
      </Suspense>
    </div>
  );
}
