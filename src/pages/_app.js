import Head from 'next/head'; // 1. Head ko import karein
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Ye tag ab aapke saare pages (Home, About, Privacy etc.) par dikhega */}
        <meta name="google-site-verification" content="hEGXcxltxQUp9y4oYGnaIR1QsAAqkhU0EIV4gOwZKkk" />
      </Head>
      
      <Component {...pageProps} />
    </>
  );
}
