import Layout from '../componentns/Layout';
import Link from 'next/link';

const PostLink = ({title}) => (
  <li>
    <Link href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);

const BlogPage = () => {
  return (
    <Layout title="My Blog">
      <ul>
        <PostLink title="react" />
        <PostLink title="angular" />
        <PostLink title="vue" />
      </ul>
    </Layout>
  )
};

export default BlogPage;