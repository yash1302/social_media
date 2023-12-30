import React from 'react'
import {MoreVert} from "@mui/icons-material";

export default function Post({posts}) {
  // console.log(posts)
  return (
    <div className='post w-full rounded-lg shadow-xl my-8'>
      <div className="postWrapper p-3">
        <div className="postTop flex items-center justify-between">
            <div className="postTopLeft flex items-center">
                <img src="/assets/person/8.jpeg" className='postProfileImg w-8 h-8 rounded-full object-cover' />
                <span className="postUsername text-lg font-semibold mx-3  ">Dani Daniels</span>
                <span className="postDate text-sm">{posts.date}</span>
            </div>
            <div className="postTopRight">
                <MoreVert/>
            </div>
        </div>
        <div className="postCenter my-5">
            <span className="postText">{posts?.desc}</span>
            <img src={posts.photo} className='postImg mt-5 w-full max-h-[500px] object-contain' alt="" />
        </div>
        <div className="postBottom flex justify-between items-center">
            <div className="postBottomLeft flex items-center mx-3">
                <img src="/assets/like.png" className='likeIcon w-8 h-8 cursor-pointer' alt="" />
                <img src="/assets/heart.png" className='heartIcon w-8 h-8 mx-3 cursor-pointer' alt="" />
                <span className="postLikeCounter">{posts.like} People like it</span>
            </div>

            <div className="postBottomRight">
                <span className="postCommentCounter cursor-pointer border-dashed border-gray-400 border-b-2">{posts.comment} Comments</span>
            </div>
        </div>
      </div>
    </div>
  )
}
