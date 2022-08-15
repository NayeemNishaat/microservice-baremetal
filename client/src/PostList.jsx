import { useState, useEffect } from "react";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = () => {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:8000/post");

      const data = await res.json();
      setPosts(data);
    })();
  }, []);

  return (
    <div className="flex gap-5 items-start">
      {Object.values(posts).map((post) => (
        <div key={post.id}>
          <h2 className="font-bold text-xl">{post.title}</h2>
          <CommentList comments={post.comments} />
          <CommentCreate postId={post.id} />
        </div>
      ))}
    </div>
  );
};

export default PostList;
