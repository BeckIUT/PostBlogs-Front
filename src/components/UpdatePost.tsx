type PostProps = {
  id: string;
  title: string;
  body: string;
  description: string;
};

function UpdatePost({ id, title, body, description }: PostProps) {
  return (
    <div>
      <p>{id}</p>
    </div>
  );
}

export default UpdatePost;
