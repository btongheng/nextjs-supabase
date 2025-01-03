"use client"
import { useActionState } from 'react'
import { createPost } from '@/app/actions/post'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { Loader2 } from 'lucide-react'

export default function NewPost() {

  const initialState = {
    formFields: {
      title: '',
      content: '',
      isPublic: false,
    },
    error: '',
  }

  const [state, formAction, isPanding] = useActionState(
    createPost,
    initialState,
  )

  const { error, formFields } = state || {}

  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold'>New Post</h1>
      <form action={formAction} className="w-2/3 space-y-2">
        <div>
          <Label htmlFor="title">Title</Label>
          <Label htmlFor="title" className='text-red-500'>*</Label>
          <Input type="text" name="title" placeholder="what's title" required />
        </div>
        <div>
          <Label htmlFor="title">Content</Label>
          <Label htmlFor="title" className='text-red-500'>*</Label>
          <Textarea placeholder="what's the content" name="content" />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox name="isPublic" id='isPublic' />
          <label
            htmlFor="isPublic"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Public
          </label>
        </div>
        <div className='py-2 w-full grid'>
          <Button
            type='submit'
            disabled={isPanding}
          >
            {isPanding ? (
              <>
                <Loader2 className="animate-spin" />
                Please wait
              </>
            ) : "Create Post"}
          </Button>
        </div>
        <div>
          {error && (
            <div>
              <span>{error}</span>
            </div>
          )}
        </div>
      </form>
    </div>
  )
}