import axios from "axios";
import { AddPostRequest } from "./Requests/AddPostRequest";
import { AddPostResponse } from "./Responses/AddPostResponse";
import { GetPostResponse } from "./Responses/GetPostResponse";
import { UpdatePostRequest } from "./Requests/UpdatePostRequest";
import { UpdatePostResponse } from "./Responses/UpdatePostResponse";

const url = (path: string) => `http://localhost:9999${path}`;

export const addPost = (params: {
  title: string | undefined;
  body: string | undefined;
  description: string | undefined;
}) => {
  const query = params as AddPostRequest;

  return axios.post<AddPostResponse>(url("/posts"), query);
};

export const updatePost = (params: {
  id: string;
  title: string;
  body: string;
  description: string;
}) => {
  const query = params as UpdatePostRequest;

  return axios.put<UpdatePostResponse>(url(`/posts/${params.id}`), query);
};

export const getPostList = () => {
  return axios.get<GetPostResponse[]>(url("/posts/list"));
};

export const deletePost = (postId : string) => {
  return axios.delete(url(`/posts/${postId}`));
}
