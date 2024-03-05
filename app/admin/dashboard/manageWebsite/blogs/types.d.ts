namespace BlogTypes {
  interface BlogTable {
    title: string;
    slug: string;
    date: Date;
    category: 'Hear Loss' | 'Types And Causes' | 'Symptoms' | 'Prevention';
    mainImage: string;
  }


  interface addNewArticleBlog {
    title: string;
    subtitle: string;
    slug: string;
    date: Date;
    category: string;
    preference: string;
    message: string;
    authorName: string;
    aboutAuthor: string;
  }
  interface State {
    loading: Record<string, AsyncState>;
    blogData: BlogTable[];
    addNewArticleData: addNewArticleBlog;
  }
}
