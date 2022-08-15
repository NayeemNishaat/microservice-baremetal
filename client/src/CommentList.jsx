const CommentList = ({ comments }) => {
  // Important: Now to making any extra requests to get the comments.
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>{comment.content}</li>
      ))}
    </ul>
  );
};

export default CommentList;
