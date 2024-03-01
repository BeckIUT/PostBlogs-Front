import axios from "axios";
import { AddPostRequest } from "./Requests/AddPostRequest";
import { AddPostResponse } from "./Responses/AddPostResponse";
import { GetPostResponse } from "./Responses/GetPostResponse";
import { UpdatePostRequest } from "./Requests/UpdatePostRequest";
import { UpdatePostResponse } from "./Responses/UpdatePostResponse";

const url = (path: string) => `http://localhost:9999${path}`;

export const addPost = (params: {
  title: string;
  body: string;
  description: string;
}) => {
  const query = <AddPostRequest>{
    ...params,
  };

  return axios.post<AddPostResponse>(url("/posts"), query);
};

export const updatePost = (params: {
  id: string;
  title: string;
  body: string;
  description: string;
}) => {
  const query = <UpdatePostRequest>{
    ...params,
  };

  return axios.post<UpdatePostResponse>(url(`/posts/${params.id}`), query);
};

export const getPostList = () => {
  return axios.get<GetPostResponse[]>(url("/posts/list"));
};
