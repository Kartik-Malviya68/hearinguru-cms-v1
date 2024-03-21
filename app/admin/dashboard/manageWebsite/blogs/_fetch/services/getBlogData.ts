// import { dummyData } from "../../_components/BlogTable/DummyData";
import { api } from "../api";
import BlogDataInstance from "../instance";

export default async function fetchBlogData(): Promise<BlogTypes.BlogTable[]> {
  return (
    await BlogDataInstance.get<BlogTypes.BlogTable[]>(api.getBlogList, {
      withCredentials: true,
    })
  ).data;
}
