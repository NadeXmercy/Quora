import React from 'react'
import AskQuetion from './AskQuetion.jsx'
import Post from "./Post"

const Feed = () => {
  return (
    <>
          <div className="f-feed">
        <AskQuetion />
        <Post/>
          </div> 
    </>
  )
}

export default Feed
