import Layout from '../componentns/Layout';

const ErrorPage = ({ statusCode }) => {
  const errorMsg = statusCode ? 
  `Could not load your user data: Status Code ${statusCode}`
  : `Could not get that page, sorry!`;
  return (
    <Layout title="Error">
      <p>{errorMsg}</p>
    </Layout>
  )
};

export default ErrorPage;