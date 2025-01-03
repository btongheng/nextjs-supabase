import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default async function Navbar() {

    const session = {}

    return (
        <nav className='flex justify-between items-center mb-5 p-4 h-14 border-b '>
            <Link className='text-xl font-bold' href='/'>
                capyBARA
            </Link>

            <Button asChild size={"sm"} variant={"outline"}>
            <Link href="/new-post"><Plus />New Post</Link>
            </Button>
        </nav>
    )
}