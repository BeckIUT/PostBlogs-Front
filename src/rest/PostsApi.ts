import axios from "axios";
import { AddPostRequest } from "./Requests/AddPostRequest";
import { AddPostResponse } from "./Responses/AddPostResponse";
import { GetPostResponse } from "./Responses/GetPostResponse";

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

export const getPostList = () => {
  return axios.get<GetPostResponse[]>(url("/posts/list"));
};
