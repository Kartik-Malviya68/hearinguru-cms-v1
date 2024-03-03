import { dummyData } from "../../_components/BlogTable/DummyData";
import { api } from "../api";
import BlogDataInstance from "../instance";



export default async function fetchBlogData(): Promise<BlogTypes.BlogTable[]> {
    return dummyData;
    
    //   return (
    //     await BlogDataInstance.get<BlogTable>(api.getBlogData, {
    //       withCredentials: true,
    //     })
    //   ).data;
}


