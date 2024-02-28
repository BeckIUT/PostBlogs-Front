import Post from "./Post";

function PostList(props) {
  return (
    <div>
      {props.posts.map((post) => {
        <Post
          id={post.id}
          title={post.title}
          description={post.description}
          body={post.body}
        />;
      })}
    </div>
  );
}

export default PostList;
