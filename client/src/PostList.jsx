import { useState, useEffect } from "react";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";

const PostList = () => {
  const [posts, setPosts] = useState({});

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:4000/post");

      const data = await res.json();
      setPosts(data);
    })();
  }, []);

  return (
    <>
      {Object.values(posts).map((post) => (
        <div className="text-xl font-bold" key={post.id}>
          <h2>{post.title}</h2>
          <CommentList postId={post.id} />
          <CommentCreate postId={post.id} />
        </div>
      ))}
    </>
  );
};

export default PostList;
