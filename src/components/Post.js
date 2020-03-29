import React from "react";
import { Card, CardText, CardBody } from "reactstrap";
import like from "../img/like.png";
import share from "../img/share.png";
import comment from "../img/comment.png";

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
            <img src={ANAKIN_IMAGE} alt="img" className="col-3" />
            <CardText className="col-9 text-justify">
              Anakin Skywalker
              <p>WTF? Who is Ray? Why she is Skywalker? Luke...?</p>
            </CardText>
          </div>
        </CardBody>
        <img width="80%" src={RAY_IMAGE} alt="img" className="main-img" />
        <CardBody>
          <div className="footer">
            <img src={like} alt="img" className="icons" />
            <img src={comment} alt="img" className="icons" />
            <img src={share} alt="img" className="icons" />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
