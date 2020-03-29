import React from "react";
import { Card, CardText, CardBody } from "reactstrap";
import Like from "../img/Like.jpg";

const ANAKIN_IMAGE =
  "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";

const RAY_IMAGE =
  "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

export const Post = props => {
  return (
    <div className="container">
      <Card className="mt-4 card">
        <CardBody>
          <div className="row">
            <img src={ANAKIN_IMAGE} alt="img" className="col-2" />
            <CardText className="col-10 text-justify">
              Anakin Skywalker
            </CardText>
          </div>
        </CardBody>
        <img width="80%" src={RAY_IMAGE} alt="img" className="main-img" />
        <CardBody>
          <div className="footer">
            <img src={Like} alt="img" className="like" />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
