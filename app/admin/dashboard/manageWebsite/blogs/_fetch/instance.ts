import AxiosFactory from "@/modules/axios/AxiosFactory";

const BlogDataInstance = AxiosFactory.createInstance({
  baseURL: "admin/blogs/",
});

export default BlogDataInstance;
