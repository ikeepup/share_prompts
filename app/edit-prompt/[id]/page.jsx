'use client'
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import Form from '@components/Form'

const EditPrompt = ({params}) => {
  const {data: session} = useSession()
  const router = useRouter()

  const [submitting, setSubmitting] = useState(false)
  const [post, setPost] = useState({
    prompt: '',
    tag: ''
  })
  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`/api/prompt/${params.id}`, {
        method: 'GET'
      })
      const post = await res.json()
      setPost({
        prompt: post.prompt,
        tag: post.tag,
      })
    }
    fetchPost()
  }, [])

  const editPrompt = async (e) =>{
    e.preventDefault()
    setSubmitting(true)

    try {
      const response = await fetch(`/api/prompt/${params.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag
        })
      })

      if(response.ok) {
        router.push('/profile')
      }
    } catch (error) {
      setSubmitting(false)

      console.log(error)
    }

  }

  return (
    <Form 
      type='Edit'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={editPrompt}
    ></Form>
  )
}

export default EditPrompt