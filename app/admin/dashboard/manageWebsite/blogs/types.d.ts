namespace BlogTypes {
  interface BlogTable {
    blogId: string;
    title: string;
    slug: string;
    date: Date;
    category: "Hear Loss" | "Types And Causes" | "Symptoms" | "Prevention";
    mainImage: string;
  }
  interface AddNewAuthor {
    name: string;
    about: string;
  }
  interface getAuthorList {
    authorId: string;
    name: string;
    about: string;
  }
  interface addNewArticleBlog {
    authorId: string;
    title: string;
    subtitle: string;
    slug: string;
    body: string;
    createdDate: Date;
    category: BlogCategory;
    message: string;
    image?: string;
    prefrence?: string;
  }
  interface State {
    loading: Record<string, AsyncState>;
    blogData: BlogTable[];
    authorList: getAuthorList[];
    addNewArticleData: addNewArticleBlog;
    addNewAuthorData: AddNewAuthor;
  }
}
