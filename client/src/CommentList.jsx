import { useState, useEffect } from "react";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:5000/post/${postId}/comment`);

      const data = await res.json();
      setComments(data);
    })();
  }, [postId]);

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>{comment.content}</li>
      ))}
    </ul>
  );
};

export default CommentList;
