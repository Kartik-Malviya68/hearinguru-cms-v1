namespace BlogTypes {
  interface BlogTable {
    title: string;
    slug: string;
    date: Date;
    category: 'Hear Loss' | 'Types And Causes' | 'Symptoms' | 'Prevention';
    mainImage: string;
  }
  interface State {
    loading: Record<string, AsyncState>;
    data: BlogTable[];
  }
}
