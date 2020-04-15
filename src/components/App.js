import React, { Component } from "react";
import { Post } from "./Post";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/post.css";

import Form from "./MyForm";
import { store } from "../redux/store";

export default class App extends Component {
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  render() {
    const { posts } = store.getState();
    return (
      <div className="container">
        <div className="row pt-2">
          <div className="col-5 mx-2 mt-2">
            <Form />
          </div>
          {posts.map((post) => (
            <Post
              postText={post.postText}
              postSrc={post.postSrc}
              autorSrc={post.autorSrc}
            />
          ))}
        </div>
      </div>
    );
  }
}
