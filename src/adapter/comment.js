const changeComment = (commentData) => {
  return {
    id: commentData.id,
    date: new Date(commentData.date),
    description: commentData.description,
    nameUser: commentData.name,
  };
};

export const adapterComment = (commentsApi) => {
  return commentsApi.map((commentApi) => changeComment(commentApi));
};