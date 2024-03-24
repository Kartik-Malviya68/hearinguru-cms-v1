// import { dummyData } from "../../_components/BlogTable/DummyData";
import { api } from "../api";
import BlogDataInstance from "../instance";

export default async function getAuthorList(): Promise<
  BlogTypes.getAuthorList[]
> {
  return (
    await BlogDataInstance.get<BlogTypes.getAuthorList[]>(api.blogAuthorList, {
      withCredentials: true,
    })
  ).data;
}
