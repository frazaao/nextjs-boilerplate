import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from 'styles/globalStyle';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next.JS Boilerplate</title>
        <link
          rel="shortcut icon"
          href="https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae"
        />
        <link
          rel="apple-touch-icon"
          href="https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae"
        />
        <meta
          name="description"
          content="A simple boilerplate using NextJS, Typescript, React and StyledComponents"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
