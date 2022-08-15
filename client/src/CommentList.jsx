const CommentList = ({ comments }) => {
  // Important: Now to making any extra requests to get the comments.
  return (
    <ul className="list-disc list-inside">
      {comments.map((comment) => {
        let content;

        switch (comment.status) {
          case "approved":
            content = comment.content;
            break;
          case "pending":
            content = "Awaiting approval!";
            break;
          case "rejected":
            content = "Comment has been rejected!";
            break;
          default:
            content = "Awaiting approval!";
            break;
        }

        return <li key={comment.id}>{content}</li>;
      })}
    </ul>
  );
};

export default CommentList;
