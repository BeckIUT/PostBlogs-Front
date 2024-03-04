import React, {useState} from "react";
import {addPost} from "../rest/PostsApi";

type PostProps = {
    onPostAdd: (isRender: boolean) => void;
}

function AddPost({onPostAdd}: PostProps) {
    function cancelHandler() {
        onPostAdd(false);
    }
    function submitHandler(event: React.FormEvent<HTMLFormElement>){
        event?.preventDefault();
        try{
            const data = {
                title: enteredTitle,
                body: enteredBody,
                description: enteredDescription
            }
            addPost(data).then(() => {
                onPostAdd(true);
            })
        }catch (error){
            console.error("Error adding data:", error);
        }
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

    const [enteredBody, setEnteredBody] = useState<string>();
    const [enteredTitle, setEnteredTitle] = useState<string>();
    const [enteredDescription, setEnteredDescription] = useState<string>();

    return (
        <div className="card-list">
            <div className="card">
                <form className="form" onSubmit={submitHandler}>
                    <p>
                        <label htmlFor="title">Title</label>
                        <textarea
                            id="title"
                            value={enteredTitle}
                            onChange={changeTitleHandler}
                            placeholder="Enter some title"
                        />
                    </p>
                    <p>
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            value={enteredDescription}
                            onChange={changeDescriptionHandler}
                            placeholder="Enter some description"
                        />
                    </p>
                    <p>
                        <label htmlFor="body">Body</label>
                        <textarea
                            id="body"
                            value={enteredBody}
                            onChange={changeBodyHandler}
                            placeholder="Enter some body"
                        />
                    </p>
                    <p className="actions">
                        <button onClick={cancelHandler}>
                            Cancel
                        </button>
                        <button>Submit</button>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default AddPost;