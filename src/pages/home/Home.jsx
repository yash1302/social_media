import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed1 from "../../components/feed/Feed1";

export default function Home() {
  return (
    <div>
      <Topbar />
      <div className="homeContainer flex w-full">
        <Sidebar />
        <Feed1 />
        <Rightbar />
      </div>
    </div>
  );
}
