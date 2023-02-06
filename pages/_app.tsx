import Head from 'next/head';

import '@/css/tailwind.css';

import Analytics from '@/components/analytics';

import Layout from '@/components/layout';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </>
  );
}
