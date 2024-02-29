import { useEffect, useState } from "react";
import PostList from "./components/PostList";
import { getPostList } from "./rest/PostsApi";
import { GetPostResponse } from "./rest/Responses/GetPostResponse";

function App() {
  const [posts, setPosts] = useState<GetPostResponse[]>([]);
  const url = (path: string) => `http://localhost:9999${path}`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPostList();
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h2>Posts</h2>
      <PostList posts={posts} />
    </div>
  );
}

export default App;
