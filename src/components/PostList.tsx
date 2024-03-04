import { useState } from "react";
import Post from "./Post";
import UpdatePost from "./UpdatePost";
type PostProps = {
  id: string;
  title: string;
  body: string;
  description: string;
};

type PostListProps = {
  posts: PostProps[];
  onChange: () => void;
};

function PostList({ posts, onChange }: PostListProps) {
  const [updateId, setUpdateId] = useState<string>();

  function onUpdate(id: string) {
    setUpdateId(id);
  }

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
            onPostChange={() => {
              setUpdateId(undefined);
              onChange();
            }}
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
