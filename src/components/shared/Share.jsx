import React from "react";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";

export default function Share() {
  return (
    <div className="share w-full h-[170px] shadow-xl rounded-sm border">
      <div className="shareWrapper p-2">
        <div className="shareTop flex items-center">
          <img
            src="/assets/person/6.jpeg"
            alt=""
            className="shareprofilePicture w-16 h-16 rounded-full object-cover mr-4"
          />
          <input
            type="text"
            className="shareInput border-none w-3/4 focus:outline-none"
            placeholder="Whats in you mind Roronoa?"
          />
        </div>
        <hr className="shareHr m-5" />
        <div className="shareBottom flex items-center content-between m-4">
          <div className="shareOptions flex items-center">
            <div className="shareoption flex items-center mr-4 cursor-pointer">
              <PermMedia htmlColor="tomato" className="text-lg mr-1" />
              <span className="ShareOption ml-1 text-sm">Photo or Video</span>
            </div>
            <div className="shareoption flex items-center mr-4 cursor-pointer">
              <Label htmlColor="blue" className="text-lg mr-1" />
              <span className="ShareOption ml-1 text-sm">Tag</span>
            </div>
            <div className="shareoption flex items-center mr-4 cursor-pointer">
              <Room htmlColor="green" className="text-lg mr-1" />
              <span className="ShareOption ml-1 text-sm">Location</span>
            </div>
            <div className="shareoption flex items-center mr-4 cursor-pointer">
              <EmojiEmotions htmlColor="goldenrod" className="text-lg mr-1" />
              <span className="ShareOption ml-1 text-sm">Feelings</span>
            </div>
          </div>
          <button className="shareButton bg-green-500 text-white font-medium border-none p-2 rounded-md ml-20">
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
