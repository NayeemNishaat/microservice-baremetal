import { useState } from "react";

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    await fetch("http://post.com/post/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title })
    });

    setTitle("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="">
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            placeholder="Title"
            className="outline-none border mt-4 px-1.5 py-0.5 rounded"
          />
        </div>
        <button className="border mt-4 border-blue-700 py-0.5 px-1 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostCreate;
