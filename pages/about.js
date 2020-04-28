import Link from 'next/link';
import Layout from '../componentns/Layout';
import fetch from 'isomorphic-unfetch';
import ErrorPage from './_error';

const About = ({ user, statusCode }) => {
  if (statusCode) {
    return <ErrorPage statusCode={statusCode} />
  }
  console.log(user);
  return (
    <Layout title="About">
      <p>{user.name}</p>
      <img src={user.avatar_url} alt="Erez Zohar" />
    </Layout>
  );
}

About.getInitialProps = async () => {
  const res = await fetch('https://api.github.com/users/domainio2xx');
  const statusCode = res.status > 200 ? res.status : false;
  const user = await res.json();
  return {
    user, statusCode
  }
}

export default About;