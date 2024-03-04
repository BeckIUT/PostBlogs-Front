import React, { useState } from "react";
import { updatePost } from "../rest/PostsApi";

type PostProps = {
  id: string;
  title: string;
  body: string;
  description: string;
  onSubmit: () => void;
  onClose: () => void;
};

function UpdatePost({ id, title, body, description, onSubmit, onClose }: PostProps) {
  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    try {
      const data = {
        id: id,
        title: enteredTitle,
        body: enteredBody,
        description: enteredDescription,
      };
        updatePost(data).then();
     // updatePost(data).then((response: AxiosResponse<UpdatePostResponse, any>) => {
     //    const data: UpdatePostResponse = response.data
     //    console.info("Updated post: ", data);
     //  });
    } catch (error) {
      console.error("Error updating data:", error);
    }
    onSubmit();
  }

  function changeTitleHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setEnteredTitle(event.target.value);
  }

  function changeBodyHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setEnteredBody(event.target.value);
  }

  function changeDescriptionHandler(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setEnteredDescription(event.target.value);
  }

  const [enteredBody, setEnteredBody] = useState(body);
  const [enteredTitle, setEnteredTitle] = useState(title);
  const [enteredDescription, setEnteredDescription] = useState(description);

  return (
    <form className="form" onSubmit={submitHandler}>
      <p>
        <label htmlFor="title">Title</label>
        <textarea id="title" value={enteredTitle} onChange={changeTitleHandler} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" value={enteredDescription} onChange={changeDescriptionHandler} />
      </p>
      <p>
        <label htmlFor="body">Body</label>
        <textarea id="body" value={enteredBody} onChange={changeBodyHandler} />
      </p>
      <p className="actions">
        <button type="button" onClick={onClose}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default UpdatePost;
