"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

export default function Navigation() {

    const pathname = usePathname()

  return (
    <nav className='flex items-center'>
        <Link
        href={"/"}
        className={pathname === "/" ? "font-bold mx-2" : "text-blue-500 mx-2"}>
            Home
        </Link>
        <Link
        href={"/about"}
        className={pathname === "/about" ? "font-bold mx-2" : "text-blue-500 mx-2"}>
            About Us
        </Link>
        <Link
        href={"/products/1"}
        className={pathname.startsWith("/products") ? "font-bold mx-2" : "text-blue-500 mx-2"}>
            Product
        </Link>
        <Link
        href={"/user-client"}
        className={pathname.startsWith("/user-client") ? "font-bold mx-2" : "text-blue-500 mx-2"}>
            user-client
        </Link>
        <Link
        href={"/user-server"}
        className={pathname.startsWith("/user-server") ? "font-bold mx-2" : "text-blue-500 mx-2"}>
            user-server
        </Link>
        <Link
        href={"/mock-users"}
        className={pathname.startsWith("/mock-users") ? "font-bold mx-2" : "text-blue-500 mx-2"}>
            mock-users
        </Link>
        <div className='flex items-center gap-4 mx-4'>
        <SignedOut>
        <SignInButton mode='modal' />
        </SignedOut>
        <SignedIn>
        <UserButton />
        </SignedIn>
        </div>
    </nav>
)
}
