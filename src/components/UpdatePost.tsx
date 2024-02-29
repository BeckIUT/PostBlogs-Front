type PostProps = {
  id: string;
  title: string;
  body: string;
  description: string;
};

function UpdatePost({ id, title, body, description }: PostProps) {
  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault();
  }
  return <form className="form" onSubmit={submitHandler}></form>;
}

export default UpdatePost;
