"use server"
// import { default as createClientForServer } from '@/app/utils/supabase/server'
import { createClientForServer } from "@/app/utils/supabase/server"
import { redirect } from "next/navigation"

const getAllPosts = async () => {
    const supabase = await createClientForServer()

    const { data, error } = await supabase
    .from('posts')
    // .select('id, title, content, isPublic, created_at')
    .select('*')

    return {
        error: error?.message,
        posts: data,
    }
}

const getPost = async (id: string) => {
    const supabase = await createClientForServer()

    const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .single()

    return {
        error: error?.message,
        post: data,
    }
}

const createPost = async (prev: any, formData: FormData) => {

    const supabase = await createClientForServer()

    const formFields = {
        title: formData.get('title'),
        content: formData.get('content'),
        isPublic: formData.get('isPublic') === 'on',
    }

    const payload = {
        ... formFields,
    }
    
    const { data, error } = await supabase
    .from('posts')
    .insert(payload)
    .select()

    console.log(data, error)

    if (error) {
        return {
            error: error.message,
            formFields
        }
    }

    redirect(`/`)
    // redirect(`/post/${data[0].id}`)
}
export { createPost, getAllPosts, getPost }