import Link from 'next/link'
import { getPost } from '@/app/actions/post'
import { Button } from '@/components/ui/button'
import { Edit } from 'lucide-react'

export default async function post({ params }: { params: { id: string } }) {

    const { id } = await params
    const { post } = await getPost(id)

    console.log(post)

    return (
        <div className='px-4'>
            <div className='border-b border-white-800 mb-2'>
                <div className='flex gap-3 justify-between items-center mt-4'>
                    <h1 className='text-3xl font-bold mb-2 line-clamp-3'>{post.title}</h1>
                    <Button asChild size={'sm'} variant={'ghost'}>
                        <Link href="/"><Edit /> Edit</Link>
                    </Button>
                </div>
                <p className=" text-xs font-light text-white/50 italic mb-2">Created at {new Date(post.createdAt).toLocaleString()}{' '}</p>
            </div>
            <p>
                {post.content}
            </p>
        </div>
    )
}