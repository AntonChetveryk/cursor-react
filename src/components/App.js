import React, { Component } from "react";
import { Post } from "./Post";
import "../styles/post.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Post />
        <Post />
        <Post />
      </div>
    );
  }
}
