const PostCreate = () => {
  return (
    <div>
      <form>
        <div className="">
          <input
            type="text"
            placeholder="Title"
            className="outline-none border mt-4 "
          />
        </div>
        <button className="border mt-4 border-blue-700 p-0.5 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostCreate;
