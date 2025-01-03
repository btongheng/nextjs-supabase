"use server"
// import { default as createClientForServer } from '@/app/utils/supabase/server'
import { createClientForServer } from "@/app/utils/supabase/server"
import { redirect } from "next/navigation"

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

    redirect(`/post/${data[0].id}`)
}
export { createPost }