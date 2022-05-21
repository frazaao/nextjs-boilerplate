import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from 'styles/globalStyle';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next.JS Boilerplate</title>
        <link rel="shortcut icon" href="img/reactIcon.svg" />
        <link rel="apple-touch-icon" href="img/reactIcon.svg" />
        <link rel="manifest" href="manifest.json" />
        <meta
          name="description"
          content="A simple boilerplate using NextJS, Typescript, React and StyledComponents"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
