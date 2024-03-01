import { useState } from "react";

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

  const [enteredBody, setEnteredBody] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");

  setEnteredBody(body);
  setEnteredDescription(description);
  setEnteredTitle(title);
  return (
    <form className="form" onSubmit={submitHandler}>
      <p>
        <label htmlFor="title">Title</label>
        <textarea id="title" onChange={changeTitleHandler} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" onChange={changeDescriptionHandler} />
      </p>
      <p>
        <label htmlFor="body">Body</label>
        <textarea id="body" onChange={changeBodyHandler} />
      </p>
      <p className="actions">
        <button type="button">Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default UpdatePost;
