'use client'

import {useState, useEffect} from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Profile from '@components/Profile'

const ProfilePage = () => {
  const {data: session} = useSession()
  const [posts, setPosts] = useState([])
  const router = useRouter()
  async function fecthPosts() {
    const res = await fetch(`/api/users/${session?.user.id}/posts`)
    const posts = await res.json()
    setPosts(posts)
  }
  const handleEdit = (id) => {
    router.push(`/edit-prompt/${id}`)
  }
  const handleDelete = async (id) => {
    const confirmed = confirm('Are you sure to delete this post?')
    if(confirmed) {
      try {
        await fetch(`/api/prompt/${id}`, {
          method: 'delete',
        })
        fecthPosts()
      } catch (error) {
        console.log(error)
      }
    }

  }

  useEffect(() => {
    if(session?.user.id) {
      fecthPosts()
    }
  }, [session])


  return (
    <Profile
      name='my'
      desc='desc'
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    ></Profile>
  )
}

export default ProfilePage