import { api } from "../api";
import BlogDataInstance from "../instance";

export default async function deleteBlog(blogId: string) {
  await BlogDataInstance.delete(api.deleteBlog, {
    params: { blogId },
    withCredentials: true,
  });
}
