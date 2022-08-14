import PostCreate from "./PostCreate";
import PostList from "./PostList";

const App = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl">Create Post</h1>
      <PostCreate />
      <hr className="mt-5" />
      <h1 className="font-black text-4xl mb-5">Posts</h1>
      <PostList />
    </div>
  );
};

export default App;
