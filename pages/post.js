import Layout from '../componentns/Layout';
import { withRouter } from 'next/router';

const PostPage = ({ router }) => {
  return (
    <Layout title={router.query.title}>
      <p>
        post 1
      </p>
    </Layout>
  )
};

export default withRouter(PostPage);