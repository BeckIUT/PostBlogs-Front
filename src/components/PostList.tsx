import Post from "./Post";

type PostProps = {
  id: string;
  title: string;
  body: string;
  description: string;
};

type PostListProps = {
  posts: PostProps[];
};

function PostList({ posts }: PostListProps) {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          description={post.description}
          body={post.body}
        />
      ))}
    </div>
  );
}

export default PostList;
