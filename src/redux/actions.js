export const updateData = (payload) => {
  return { type: "UPDATE_DATA", payload };
};

export const updateLikes = () => {
  return { type: "UPDATE_LIKES" };
};

export const updateReposts = () => {
  return { type: "UPDATE_REPOSTS" };
};

export const updateComments = () => {
  return { type: "UPDATE_COMMENTS" };
};
