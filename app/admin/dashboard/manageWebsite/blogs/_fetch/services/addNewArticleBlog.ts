import { api } from "../api";
import BlogDataInstance from "../instance";



export default async function addNewArticleBlog(data: BlogTypes.addNewArticleBlog) {
  await BlogDataInstance.post(
    api.addNewArticle,
    { data },
    { withCredentials: true }
  );
  return true;
}
