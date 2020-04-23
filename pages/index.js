import Link from 'next/link';

const Index = () => (
  <div>
    <h1>Home</h1>
    <Link href="/about">
      <a>About</a>
    </Link>
    <p>hi world</p>
  </div>
);

export default Index;