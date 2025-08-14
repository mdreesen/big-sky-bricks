import Image from "next/image";
import Link from "next/link";
import { Disclosure } from '@headlessui/react'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default async function Navigation() {

    const navigation = [
        { name: 'Main', href: '/dashboard', current: false },
        { name: 'Body', href: '/dashboard/body', current: false },
        { name: 'Mind', href: '/dashboard/mind', current: false },
        { name: 'Spirit', href: '/dashboard/spirit', current: false },
    ]

    return (
        <Disclosure as="nav" className="bg-transparent hidden md:block lg:block">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div>
                    <div className="flex h-16 items-center justify-between px-4 sm:px-0">
                        <div className="flex items-center">
                            <div className="shrink-0">
                                <Link href={'/dashboard'}>
                                    <div className="flex items-center h-[40px] text-2xl font-bold">
                                        <Image
                                            alt="Big Sky Bricks Logo"
                                            width={150}
                                            height={150}
                                            priority
                                            src={'/assets/logo.webp'}
                                            className="opacity-60 relative rounded-full object-cover scale-75"
                                        />
                                    </div>
                                </Link>
                            </div>
                            {navigation.map((item) => (
                                <div
                                    key={item.name}
                                    className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        <a
                                            href={item.href}
                                            aria-current={item.name ? 'page' : undefined}
                                            className={classNames(
                                                'hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium',
                                            )}
                                        >
                                            {item.name}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Disclosure>
    )
}