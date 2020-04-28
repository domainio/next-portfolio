import Layout from '../componentns/Layout';

const PostPage = ({ url }) => {
  return (
    <Layout title={url.query.title}>
      <p>
        post 1
      </p>
    </Layout>
  )
};

export default PostPage;