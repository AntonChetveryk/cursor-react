import { store } from "../redux/store";

const initialState = {
  author: "Anakin Skywalker",
  autorSrc:
    "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",
  nickname: "@dart_vader",
  date: "26 febr",
  postText: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
  postSrc:
    "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
  likes: 0,
  comments: 0,
  reposts: 0,
};

export const reducer = (state = initialState, action) => {
  let { likes, comments, reposts } = state;

  switch (action.type) {
    case "UPDATE_DATA":
      return {
        ...state,
        postText: action.payload.postText || initialState.postText,
        postSrc: action.payload.postSrc || initialState.postSrc,
        autorSrc: action.payload.autorSrc,
      };
    case "UPDATE_LIKES":
      return { ...state, likes: ++likes };
    case "UPDATE_REPOSTS":
      return { ...state, reposts: ++reposts };
    case "UPDATE_COMMENTS":
      return { ...state, comments: ++comments };
  }
  return state;
};
