import React from "react";
import "./Header.css";
import logo from "./Quora-logo.png";
import HomeIcon from "@mui/icons-material/Home";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import EditNoteTwoToneIcon from "@mui/icons-material/EditNoteTwoTone";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import Avatar from "@mui/material/Avatar";
import Ritik from "./Ritik.jpg";
import  { useState } from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");


const Header = () => {
  const [IsmodalOpen, setIsModalOpen] = useState(false);
  const [input, setInput] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const questionName = input;
  const handleQuestion = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    setInput("");
    setInputUrl("");
  };
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-icons">
          <div className="nav-icon">
            <HomeIcon />
          </div>
          <div className="nav-icon">
            <FeaturedPlayListIcon />
          </div>
          <div className="nav-icon">
            <EditNoteTwoToneIcon />
          </div>
          <div className="nav-icon">
            <GroupsRoundedIcon />
          </div>
          <div className="nav-icon">
            <NotificationsNoneRoundedIcon />
          </div>
        </div>
        <div className="nav-input">
          <SearchTwoToneIcon />
          <input type="text" placeholder="Search Quora" />
        </div>

        <div className="nav-avatar">
          <Avatar src={Ritik} alt="Ritik" />
        </div>
        < div className="nav-add">
          <button onClick={() => setIsModalOpen(true)}>Add Question</button>
          <KeyboardArrowDownIcon />

          <Modal
          isOpen={IsmodalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          shouldCloseOnOverlayClick={false}
          style={{
            overlay: {
              width: 700,
              height: 600,
              backgroundColor: "rgba(0,0,0,0.8)",
              zIndex: "1000",
              top: "50%",
              left: "50%",
              marginTop: "-300px",
              marginLeft: "-350px",
            },
          }}
        >
          <div className="modal__title">
            <h5>Add Question</h5>
            <h5>Create Post</h5>
          </div>
          <div className="modal__info">
            <Avatar
              className="avatar"
              
            />
            
            <div className="modal__scope">

              <PeopleAltIcon/>
              <p>Public</p>
              <ExpandMoreRoundedIcon/>
            </div>
          </div>
          <div className="modal__Field">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Start your question with 'What', 'How', 'Why', etc. "
            />
            <div className="modal__fieldLink">
              Link
              <input
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                type="text"
                placeholder="Optional: inclue a link that gives context"
              ></input>
            </div>
          </div>
          <div className="modal__buttons">
            <button className="cancle" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
            <button type="sumbit" onClick={handleQuestion} className="add">
              Add Question
            </button>
          </div>
        </Modal>

       </div>
      </div>
    </>
  );
};

export default Header;
