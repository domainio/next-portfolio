import Link from 'next/link';

const About = () => (
  <div>
    <h1>About</h1>
    <Link href="/">
      <a>Home</a>
    </Link>
    <p>A javascript proj</p>
    <img src="/static/smart-guy.jpeg" alt="Smart Guy" />
  </div>
);

export default About;