namespace BlogTypes {
  interface BlogTable {
    blogId: string;
    title: string;
    slug: string;
    date: Date;
    category: "Hear Loss" | "Types And Causes" | "Symptoms" | "Prevention";
    mainImage: string;
  }

  interface addNewArticleBlog {
    title: string;
    subtitle: string;
    slug: string;
    createdDate: Date;
    category: string;
    image: string;
    message: string;
    prefrence: string;
    author: {
      name: string;
      about: string;
    };
  }
  interface State {
    loading: Record<string, AsyncState>;
    blogData: BlogTable[];
    addNewArticleData: addNewArticleBlog;
  }
}
