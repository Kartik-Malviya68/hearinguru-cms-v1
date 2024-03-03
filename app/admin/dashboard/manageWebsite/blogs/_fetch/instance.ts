import AxiosFactory from '@/modules/axios/AxiosFactory';

const BlogDataInstance = AxiosFactory.createInstance({
  baseURL: '',
});

export default BlogDataInstance;