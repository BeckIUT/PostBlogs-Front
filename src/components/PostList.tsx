import { useState } from "react";
import Post from "./Post";
import UpdatePost from "./UpdatePost";
import DeletePost from "./DeletePost";
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
  const [deleteId, setDeleteId] = useState<string>();

  function onDelete(id: string){
    setDeleteId(id);
  }

  function onPostDelete(isRender: boolean = false){
    setDeleteId(undefined);
    if(isRender){
      onChange();
    }
  }

  function onUpdate(id: string) {
    setUpdateId(id);
  }

  function onPostChange(isRender: boolean = false){
    setUpdateId(undefined);
    if(isRender){
      onChange();
    }
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
            onPostChange={onPostChange}
          />
        ) : deleteId === post.id ? (
              <DeletePost
                  key={post.id}
                  id={post.id}
                  onConfirm={onPostDelete}
                  onCancel={() => setDeleteId(undefined)}
              />
            ) : (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.description}
            body={post.body}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        )
      )}
    </div>
  );
}

export default PostList;
