import { api } from "../api";
import BlogDataInstance from "../instance";

export default async function addNewAuthor(data: BlogTypes.AddNewAuthor) {
  await BlogDataInstance.post(
    api.createBlogAuthor,
    { ...data },
    { withCredentials: true }
  );
}
