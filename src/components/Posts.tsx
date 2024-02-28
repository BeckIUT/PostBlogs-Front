import "./posts.css";

function Posts() {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Title</h3>
        <p className="card-description">Description</p>
        <div>
          <div className="card-content">
            <p>Body</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
