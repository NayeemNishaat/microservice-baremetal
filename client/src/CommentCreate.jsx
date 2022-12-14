import { useState } from "react";

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    await fetch(`http://post.com/post/${postId}/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ content })
    });

    setContent("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <input
            className="outline-none border mt-4 px-1.5 py-0.5 rounded"
            placeholder="New Comment"
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className="border mt-4 border-blue-700 py-0.5 px-1 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentCreate;
