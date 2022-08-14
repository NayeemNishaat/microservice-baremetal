import { useState, useEffect } from "react";

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
        <h2 className="text-xl font-bold" key={post.id}>
          {post.title}
        </h2>
      ))}
    </>
  );
};

export default PostList;
