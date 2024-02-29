import { useState } from "react";
import UpdatePost from "./UpdatePost";

type PostProps = {
  id: string;
  title: string;
  body: string;
  description: string;
};

function Post({ id, title, description, body }: PostProps) {
  const [isEditing, setIsEditing] = useState(false);

  const OnUpdateHandler = () => {
    setIsEditing(true);
  };

  const OnDeleteHandler = () => {};

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
          <button className="btn btn--alt" onClick={OnUpdateHandler}>
            Update
          </button>
          <button className="btn" onClick={OnDeleteHandler}>
            Delete
          </button>
          {isEditing && (
            <UpdatePost
              key={id}
              id={id}
              title={title}
              description={description}
              body={body}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Post;
