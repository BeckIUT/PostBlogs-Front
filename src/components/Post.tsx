import "./post.css";
import "./button.css";

function Post(props) {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-description">{props.description}</p>
        <div>
          <div className="card-content">
            <p className="card-body">{props.body}</p>
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
