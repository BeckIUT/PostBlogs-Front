type PostProps = {
  id: string;
  title: string;
  body: string;
  description: string;
};

function Post({ id, title, description, body }: PostProps) {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div>
          <div className="card-content">
            <p className="card-body">{body}</p>
          </div>
        </div>
        <div>
          <button className="btn btn--alt">Update</button>
          <button className="btn">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Post;
