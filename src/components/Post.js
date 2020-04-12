import React from "react";

import like from "../img/like.png";
import share from "../img/share.png";
import comment from "../img/comment.png";
import { store } from "../redux/store";
import { updateLikes, updateReposts, updateComments } from "../redux/actions";

export const Post = (props) => {
  const {
    author,
    autorSrc,
    nickname,
    date,
    postText,
    postSrc,
    likes,
    comments,
    reposts,
  } = store.getState();

  return (
    <div
      className="post-container"
      style={{
        backgroundColor: "darkolivegreen",
        color: "white",
        padding: "30px 20px",
        fontSize: "14px",
      }}
    >
      <div className="row">
        <img
          src={autorSrc}
          alt="img"
          className="col-3 rounded-circle"
          style={{ height: "100px" }}
        />
        <div className="col-9">
          <p>
            <b className="mr-2">{author}</b>
            <span className="mr-2">{nickname}</span>
            <span>{date}</span>
          </p>
          <p>{postText}</p>
        </div>
      </div>
      <img
        src={postSrc}
        alt="img"
        className="my-3"
        style={{
          display: "block",
          width: "80%",
          margin: "auto",
          height: "180px",
        }}
      />
      <div className="footer d-flex justify-content-around">
        <div className="d-flex align-items-center">
          <img
            src={like}
            alt="img"
            className="icons"
            onClick={() => store.dispatch(updateLikes())}
          />
          <span>{likes}</span>
        </div>
        <div className="d-flex align-items-center">
          <img
            src={comment}
            alt="img"
            className="icons"
            onClick={() => store.dispatch(updateComments())}
          />
          <span>{comments}</span>
        </div>
        <div className="d-flex align-items-center">
          <img
            src={share}
            alt="img"
            className="icons"
            onClick={() => store.dispatch(updateReposts())}
          />
          <span>{reposts}</span>
        </div>
      </div>
    </div>
  );
};
