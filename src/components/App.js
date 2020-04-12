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
    return (
      <div className="container-fluid">
        <div className="row pt-2">
          <div className="col-6">
            <Form />
          </div>
          <div className="col-6">
            <Post />
          </div>
        </div>
      </div>
    );
  }
}
