import React from 'react'
import {Search,Person,Chat,Notifications} from '@mui/icons-material'
import "./topbar.css"


export default function Topbar() {
  return (
    <div className="h-14 w-full bg-[#1877f2] flex items-center sticky top-0  ">
      <div className="topbarLeft">
        <div className='logo text-white pl-3 text-2xl font-bold cursor-pointer'>
        LamaSocial
        </div>
      </div>
      <div className="topbarCenter">
        <div className="Searchbar flex w-full h-8 bg-white rounded-lg items-center ">
          <Search className='m-4'/>
          <input placeholder='Search here' className="TopbarSearch border-none w-2/3" />
        </div>
      </div>
      <div className="topbarRight flex items-center justify-around text-white">
        <div className="topbarLinks flex text-md cursor-pointer">
          <div className="topbarLink mr-2">Homepage</div>
          <div className="topbarLink mr-2">Timeline</div>
        </div>
        <div className="topbarIcons flex">
          <div className="topbarIconItem mr-4 cursor-pointer relative ">
            <Person/>
            <span className="topbarIconBadge w-4 h-4 bg-red-600 rounded-full text-white absolute top-[-5px] right-[-5px] items-center justify-center flex  text-sm">1</span>
          </div>
          <div className="topbarIconItem mr-4 cursor-pointer relative ">
            <Chat/>
            <span className="topbarIconBadge w-4 h-4 bg-red-600 rounded-full text-white absolute top-[-5px] right-[-5px] items-center justify-center flex text-sm">1</span>
          </div>
          <div className="topbarIconItem mr-4 cursor-pointer relative ">
            <Notifications/>
            <span className="topbarIconBadge w-4 h-4 bg-red-600 rounded-full text-white absolute top-[-5px] right-[-5px] items-center justify-center flex text-sm">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg w-8 h-8 rounded-full object-cover " />
      </div>
    </div>
  )
}
