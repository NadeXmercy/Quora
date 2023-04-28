import React from 'react'
import { Avatar  } from '@mui/material'
// import { EditNoteTwoToneIcon } from '@mui/material'
import EditNoteTwoToneIcon from "@mui/icons-material/EditNoteTwoTone";
import QuizTwoToneIcon from '@mui/icons-material/QuizTwoTone';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import './AskQuetion.css'
import Ritik from "./Ritik.jpg"

const Post = () => {
  return (
    <>
          <div className='p-sections'>
              <div className="p-sectionA">
                  <Avatar sx={{fontSize:'20'}} src={Ritik} alt="Ritik"/>
                  
              </div> 
              <div className='p-sectionIn'>
              <input type="text"  placeholder='what do you want to ask or share ?'/>
              </div>
              
      </div>
      <div className='p-sectionP'>

      <div className="p-section">
                 <QuizTwoToneIcon/>
                  <p>Ask</p>
              </div>
              <div className="p-section">
                  <EditNoteTwoToneIcon />
                  <p>Answer</p>
              </div>
              <div className="p-section">
                  <CreateOutlinedIcon />
                  <p>Post</p>
              </div>
      </div>
    </>
  )
}

export default Post
