import Link from 'next/link';

const Layout = ({ children, title }) => (
  <div>
    <header>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/hireme">Hire Me</Link>
    </header>
    <h1>{title}</h1>
    {children}
    <footer>&copy; {new Date().getFullYear()}</footer>
  </div>
)

export default Layout;