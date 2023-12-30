import React from 'react'
import "./sidebar.css"
import {RssFeed, Chat, PlayCircle, Group , Bookmark, HelpOutline, Work , Event, School} from '@mui/icons-material'

export default function Sidebar() {
  return (
    <div className='sidebar overflow-y-scroll'>
      <div className="sidebarWrapper p-5  ">
        <ul className="sidebarList p-0 m-0">
            <li className="sidebarListitem flex items-center pb-5">
                <RssFeed className='sidebarIcon mr-4'/>
                <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sidebarListitems flex items-center pb-5">
                <Chat className='sidebarIcon mr-4'/>
                <span className="sidebarListItemText">Chat</span>
            </li>
            <li className="sidebarListitems flex items-center pb-5">
                <PlayCircle className='sidebarIcon mr-4'/>
                <span className="sidebarListItemText">Videos</span>
            </li>
            <li className="sidebarListitems flex items-center pb-5">
                <Group className='sidebarIcon mr-4'/>
                <span className="sidebarListItemText">Groups</span>
            </li>
            <li className="sidebarListitems flex items-center pb-5">
                <Bookmark className='sidebarIcon mr-4'/>
                <span className="sidebarListItemText">Bookmarks</span>
            </li>
            <li className="sidebarListitems flex items-center pb-5">
                <HelpOutline className='sidebarIcon mr-4'/>
                <span className="sidebarListItemText">Questions</span>
            </li>
            <li className="sidebarListitems flex items-center pb-5">
                <Work className='sidebarIcon mr-4'/>
                <span className="sidebarListItemText">Jobs</span>
            </li>
            <li className="sidebarListitems flex items-center pb-5">
                <Event className='sidebarIcon mr-4'/>
                <span className="sidebarListItemText">Events</span>
            </li>
            <li className="sidebarListitems flex items-center pb-5">
                <School className='sidebarIcon mr-4'/>
                <span className="sidebarListItemText">Courses</span>
            </li>
        </ul>
        <button className='sidebarButton p-3 w-[160px] font-medium rounded-md border-none bg-slate-100 '>Show More</button>
        <hr className='my-5'/>
        <ul className="sidebarfriendList p-0 m-0 ">
            <li className='sidebarFriend flex items-center mb-4'>
                <img src="/assets/person/2.jpeg" alt="" className='sidebarFriendImg rounded-full w-8 h-8 object-cover mr-5 ' />
                <span className="sidebarfriendName">Yash Jadhav</span>
            </li>
            <li className='sidebarFriend flex items-center mb-4'>
                <img src="/assets/person/3.jpeg" alt="" className='sidebarFriendImg rounded-full w-8 h-8 object-cover mr-5 ' />
                <span className="sidebarfriendName">Janell Shrum</span>
            </li>
            <li className='sidebarFriend flex items-center mb-4'>
                <img src="/assets/person/4.jpeg" alt="" className='sidebarFriendImg rounded-full w-8 h-8 object-cover mr-5 ' />
                <span className="sidebarfriendName">Joe Daniel</span>
            </li>
            <li className='sidebarFriend flex items-center mb-4'>
                <img src="/assets/person/5.jpeg" alt="" className='sidebarFriendImg rounded-full w-8 h-8 object-cover mr-5 ' />
                <span className="sidebarfriendName">Monkey D Luffy</span>
            </li>
            <li className='sidebarFriend flex items-center mb-4'>
                <img src="/assets/person/6.jpeg" alt="" className='sidebarFriendImg rounded-full w-8 h-8 object-cover mr-5 ' />
                <span className="sidebarfriendName">Roronoa Zoro</span>
            </li>
            <li className='sidebarFriend flex items-center mb-4'>
                <img src="/assets/person/3.jpeg" alt="" className='sidebarFriendImg rounded-full w-8 h-8 object-cover mr-5 ' />
                <span className="sidebarfriendName">Janell Shrum</span>
            </li>
            <li className='sidebarFriend flex items-center mb-4'>
                <img src="/assets/person/4.jpeg" alt="" className='sidebarFriendImg rounded-full w-8 h-8 object-cover mr-5 ' />
                <span className="sidebarfriendName">Joe Daniel</span>
            </li>
            <li className='sidebarFriend flex items-center mb-4'>
                <img src="/assets/person/5.jpeg" alt="" className='sidebarFriendImg rounded-full w-8 h-8 object-cover mr-5 ' />
                <span className="sidebarfriendName">Monkey D Luffy</span>
            </li>
            <li className='sidebarFriend flex items-center mb-4'>
                <img src="/assets/person/6.jpeg" alt="" className='sidebarFriendImg rounded-full w-8 h-8 object-cover mr-5 ' />
                <span className="sidebarfriendName">Roronoa Zoro</span>
            </li>
            <li className='sidebarFriend flex items-center mb-4'>
                <img src="/assets/person/3.jpeg" alt="" className='sidebarFriendImg rounded-full w-8 h-8 object-cover mr-5 ' />
                <span className="sidebarfriendName">Janell Shrum</span>
            </li>
            <li className='sidebarFriend flex items-center mb-4'>
                <img src="/assets/person/4.jpeg" alt="" className='sidebarFriendImg rounded-full w-8 h-8 object-cover mr-5 ' />
                <span className="sidebarfriendName">Joe Daniel</span>
            </li>
            <li className='sidebarFriend flex items-center mb-4'>
                <img src="/assets/person/5.jpeg" alt="" className='sidebarFriendImg rounded-full w-8 h-8 object-cover mr-5 ' />
                <span className="sidebarfriendName">Monkey D Luffy</span>
            </li>
            <li className='sidebarFriend flex items-center mb-4'>
                <img src="/assets/person/6.jpeg" alt="" className='sidebarFriendImg rounded-full w-8 h-8 object-cover mr-5 ' />
                <span className="sidebarfriendName">Roronoa Zoro</span>
            </li>
        </ul>
      </div>
    </div>
  )
}
