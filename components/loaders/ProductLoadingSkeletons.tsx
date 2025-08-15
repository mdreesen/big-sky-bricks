// src/app/products/loading.tsx
import { FaTh, FaList } from 'react-icons/fa';

/**
 * A single skeleton card component that mimics the layout of a product card.
 */
const SkeletonCard = () => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="w-full h-64 bg-gray-300" />
        <div className="p-6">
            <div className="h-4 bg-gray-300 rounded w-1/3 mb-2" />
            <div className="h-6 bg-gray-300 rounded w-3/4 mb-4" />
            <div className="h-6 bg-gray-300 rounded w-1/2" />
        </div>
    </div>
);

/**
 * A loading skeleton page for the product catalog.
 * This component will be automatically rendered by Next.js when navigating to the /products route.
 */
export function ProductsLoadingSkeleton() {
    return (
        <div className="bg-gray-50 animate-pulse">
            <header className="bg-white shadow-md">
                <div className="container mx-auto px-6 py-12 text-center">
                    <div className="h-10 md:h-14 bg-gray-300 rounded w-1/2 mx-auto mb-4" />
                    <div className="h-6 bg-gray-300 rounded w-1/3 mx-auto" />
                </div>
            </header>

            <main className="container mx-auto px-6 py-12">
                {/* Filter and Sort Controls Skeleton */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                        <div className="h-9 bg-gray-300 rounded-full w-20" />
                        <div className="h-9 bg-gray-300 rounded-full w-28" />
                        <div className="h-9 bg-gray-300 rounded-full w-24" />
                        <div className="h-9 bg-gray-300 rounded-full w-20" />
                    </div>
                    <div className="h-9 bg-gray-300 rounded-full w-48" />
                </div>

                {/* Products Grid Skeleton */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <SkeletonCard key={index} />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default ProductsLoadingSkeleton;