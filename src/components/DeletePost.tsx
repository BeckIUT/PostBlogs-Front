import {deletePost} from "../rest/PostsApi";

type PostProps = {
    id: string;
    onConfirm: (isRender: boolean) => void;
    onCancel: () => void;
}

function DeletePost({id, onConfirm, onCancel} : PostProps) {
  const deleteHandler = () => {
      try{
          deletePost(id).then(() => {
              onConfirm(true);
          });
      }
      catch (error){
          console.error("Error deleting data:", error);
      }
  }

    return <div className="confirmation">
      <p>Are you sure you want to delete this post?</p>
      <button onClick={deleteHandler}>Yes</button>
      <button onClick={onCancel}>No</button>
  </div>;
}

export default DeletePost;
