type PostProps = {
  id: string;
  title: string;
  body: string;
  description: string;
  onUpdate: (id: string) => void;
  onDelete: (id: string) => void;
};

function Post({ id, title, description, body, onUpdate, onDelete }: PostProps) {
  //
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
          <button className="btn btn--alt" onClick={() => onUpdate(id)}>
            Update
          </button>
          <button className="btn" onClick={() => onDelete(id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Post;
