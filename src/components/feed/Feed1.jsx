import React from 'react'
import "./feed1.css"
import Share from '../shared/Share'
import { Posts } from '../../dummyData'
import Post from '../posts/Post'

export default function Feed1() {
  return (
    <div className='feed'>
      <div className="feedWrapper p-5">
      <Share/>
      {Posts.map((p)=>(
        <Post key={p.id} posts={p}/>
      ))}
      </div>
    </div>
  )
}
