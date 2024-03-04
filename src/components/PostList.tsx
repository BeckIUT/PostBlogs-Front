import {useEffect, useState} from "react";
import Post from "./Post";
import UpdatePost from "./UpdatePost";
import {GetPostResponse} from "../rest/Responses/GetPostResponse";
import {getPostList} from "../rest/PostsApi";
type PostProps = {
  id: string;
  title: string;
  body: string;
  description: string;
};

type PostListProps = {
  posts: PostProps[];
};

function PostList() {
  const [updateId, setUpdateId] = useState<string>();
  const [posts, setPosts] = useState<GetPostResponse[]>([]);

  function onUpdate(id: string) {
    setUpdateId(id);
    fetchData().then();
  }

  useEffect(() => {
    fetchData().then();
  })

  const fetchData = async () => {
    try {
      const response = await getPostList();
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="card-list">
      {posts.map((post) =>
        updateId === post.id ? (
          <UpdatePost
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.description}
            body={post.body}
            onSubmit={() => setUpdateId(undefined)}
            onClose={() => setUpdateId(undefined)}
          />
        ) : (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.description}
            body={post.body}
            onUpdate={onUpdate}
          />
        )
      )}
    </div>
  );
}

export default PostList;
