'use client'

import { useState, useEffect } from "react"
import PromptCard from "./PromptCard"

const PromptCardList = ({data, hanleTagClick}) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map(post => (
        <PromptCard 
          key={post._id}
          post={post}
          hanleTagClick={hanleTagClick}
        />
      )
      )}
    </div>
  )
}

const Feed = () => {
  const [posts, setPosts] = useState([])
  const [searchText, setSearchText] = useState('')
  const hanleSearch = function(e) {
    setSearchText(e.target.value)
  }



  useEffect(() => {
    async function fecthData() {
      const res = await fetch(`/api/prompt?t=${new Date().getTime()}`)
      const posts = await res.json()
      setPosts(posts)
    }

    fecthData()
  }, [])

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input 
          type="text" 
          className="search_input peer"
          placeholder="Search for a tag or a username" 
          value={searchText}
          onChange={hanleSearch}
        />
      </form>

      <PromptCardList data={posts} hanleTagClick={() => {}}/>

    </section>

  )
}

export default Feed