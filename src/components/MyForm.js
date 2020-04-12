import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { store } from "../redux/store";
import { updateData } from "../redux/actions";

class MyForm extends React.Component {
  state = {
    postText: "",
    postSrc: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onClick = (e) => {
    const { postText, postSrc } = this.state;
    e.preventDefault();
    store.dispatch(updateData({ postText, postSrc }));
  };

  render() {
    return (
      <div
        className="form-container"
        style={{
          border: "1px solid grey",
          borderRadius: "3px",
          padding: "20px",
        }}
      >
        <Form>
          <FormGroup>
            <Label for="postText">Post text</Label>
            <Input
              type="text"
              name="postText"
              id="postText"
              placeholder="Post text"
              value={this.state.postText}
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="link">Link to img</Label>
            <Input
              type="text"
              name="postSrc"
              id="postSrc"
              placeholder="Link to img"
              value={this.state.postSrc}
              onChange={this.onChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Select</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>

          <Button onClick={this.onClick}>Add new data</Button>
        </Form>
      </div>
    );
  }
}

export default MyForm;
