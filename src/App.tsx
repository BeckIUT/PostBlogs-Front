import PostList from "./components/PostList";
import { useEffect, useState } from "react";
import { getPostList } from "./rest/PostsApi";
import { GetPostResponse } from "./rest/Responses/GetPostResponse";
import AddPost from "./components/AddPost";

function App() {
  const [posts, setPosts] = useState<GetPostResponse[]>([]);
  const [isRender, setIsRender] = useState<boolean>(false);
  const [addPost, setAddPost] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      await getLatestData();
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [isRender]);

  const onChange = () => {
    setIsRender(!isRender);
  };

  const addPostHandler = () => {
    setAddPost(!addPost);
  }

  const onAdd = (render: boolean=false) => {
    setAddPost(!addPost);
    setIsRender(render);
  }

  const getLatestData = async () => {
    try {
      const response = await getPostList();
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div>
      <h2>Posts</h2>
      <PostList posts={posts} onChange={onChange} />
      {!addPost && <button className="btn" onClick={addPostHandler}>Add Post</button>}
      {addPost && <AddPost onPostAdd={onAdd}/>}
    </div>
  );
}

export default App;
