import Link from 'next/link';
import Layout from '../componentns/Layout';
import fetch from 'isomorphic-unfetch';

const About = ({ user }) => {
  console.log(user);
  return (
    <Layout title="About">
      <p>{user.name}</p>
      <img src={user.avatar_url} alt="Erez Zohar" />
    </Layout>
  );
}

About.getInitialProps = async () => {
  const res = await fetch('https://api.github.com/users/domainio');
  const user = await res.json();
  return {
    user
  }
}

export default About;