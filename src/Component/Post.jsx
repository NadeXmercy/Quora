import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
// import CloseIcon from '@mui/icons-material/Close';
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import CachedSharpIcon from "@mui/icons-material/CachedSharp";
import { deepOrange } from "@mui/material/colors";
const Post = () => {
  return (
    <>
      <div className="p-infos">
        <div className="p-info">
          <Avatar sx={{ bgcolor: deepOrange[500] }}> J</Avatar>
          <h5>Jason</h5>
          <a href="#">Follow</a>
          <div className="close"></div>
        </div>
        <div className="p-time">
          <p>Answered by Jason </p>
          <small> 5 min ago</small>
        </div>
        <div className="quetion">
          <h4>What is your Question ?</h4>
        </div>
        <div className="para">
          <p>* Your Answer</p>
        </div>
        <div className="imgs">
          <img
            src="https://img.freepik.com/free-photo/peacock-with-colorful-tail-is-shown-with-gold-background_1340-24427.jpg?size=626&ext=jpg&ga=GA1.2.1064803549.1677387636&semt=robertav1_2_sidr"
            alt="Peacock"
          />
        </div>
        <div className="votes">
          <div className="u-vote">
            <ArrowUpwardIcon />
            <p>Upvote.7.7k</p>

            <ArrowDownwardIcon />
          </div>

          <div className="comment">
            <ModeCommentOutlinedIcon />
            <p>400</p>
          </div>
          <div className="reply">
            <CachedSharpIcon />
            <p>302</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
