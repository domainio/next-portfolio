import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = (url) => {
  console.log('onROuteChangeStart ', url);
  NProgress.start();
}


Router.onRouteChangeComplete = (url) => {
  console.log('onRouteChangeComplete ', url);
  NProgress.done();
}

Router.onROuteChangeError = (url) => {
  console.log('onROuteChangeError ', url);
  NProgress.remove();
}

const Layout = ({ children, title }) => (
  <div className="root">
    <header>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/hireme">Hire Me</Link>
    </header>
    <h1>{title}</h1>
    <div>{children}</div>
    <footer>&copy; {new Date().getFullYear()}</footer>
    <style jsx>{`
      .root {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      header {
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding: 1em;
        font-size: 1.2rem;
        background: indigo;
      }
      header a {
        color: darkgray;
        text-decoration: none;
      }
      header a:hober {
        font-weight: bold;
        color: lightgray;    
      }
      footer {
        padding: 1em;
      }
    `}</style>
    <style global jsx>{`
      body {
        margin: 0;
        font-size: 110%;
        background: #f0f0f0;
      }
    `}</style>
  </div>
)

export default Layout;