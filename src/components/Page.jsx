import { createGlobalStyle } from 'styled-components';
import { useL10n } from './L10nContext';
import HiddenFormForNetlify from './molecules/RecommendButton/HiddenFormForNetlify';
import Header from './organisms/Header';
import Hero from './organisms/Hero';
import Footer from './organisms/Footer';
import Vacancy from './organisms/Vacancy';
import Relocation from './organisms/Relocation';
import Feedbacks from './organisms/Feedbacks';
import Warsaw from './organisms/Warsaw';
import Join from './organisms/Join';
import Company from './organisms/Company';

const Helmet =
  typeof window === 'undefined'
    ? require('react-helmet-async').Helmet
    : () => null;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    color: ${({ theme }) => theme.colors.text};
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-size: 1rem;
    fill: currentColor;
    -webkit-font-smoothing: antialiased;
    line-height: 1.5;
  }
`;

const Page = () => {
  const { t, locale } = useL10n();

  return (
    <>
      <GlobalStyle />
      {typeof window === 'undefined' ? (
        <Helmet>
          <html lang={locale} />
          <meta charset="utf-8" />
          <title>{t('title')}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="apple-touch-icon" sizes="138x138" href="/logo138.png" />
          <link
            rel="icon"
            type="image/x-icon"
            sizes="32x32"
            href="/favicon.ico"
          />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
          <link
            rel="icon"
            type="image/svg"
            sizes="32x32"
            href="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3QgZmlsbD0iI2UwMDUxOSIgaGVpZ2h0PSIzMiIgd2lkdGg9IjMyIi8+CiAgPHBhdGggZmlsbD0iI2ZmZiIgZD0ibTIwLjMzNywyMi4xNzcwMWE4LjMxNiw4LjMxNiAwIDAgMSAtMi42NjYsLTAuODUyYy0wLjQzMiwtMC4yMTkgLTEuMTY0LC0wLjY4OSAtMS4zODMsLTAuODg1bC0wLjEyLC0wLjEwNGwwLjgyLC0wLjk1MWwwLjgyLC0wLjk1MWwwLjI4OSwwLjI0YzEuMTcsMC45NTEgMi4zNjcsMS4zNTYgMy42NjIsMS4yM2MwLjk1NiwtMC4wOTMgMS41MiwtMC42NDUgMS4zMzksLTEuMzE3Yy0wLjEyLC0wLjQ1NCAtMC42NzIsLTAuNzY1IC0yLjAxNywtMS4xMzdjLTIuNDI3LC0wLjY2NyAtMy4zNSwtMS4xMTUgLTMuODgsLTEuODg2Yy0wLjQxNiwtMC42IC0wLjYwMSwtMS43ODEgLTAuNDE2LC0yLjY1YTMuNTMyLDMuNTMyIDAgMCAxIDEuODkxLC0yLjQyN2MwLjgwNCwtMC4zOTQgMS4yMjUsLTAuNDgxIDIuMjk2LC0wLjQ4NmMwLjk5NSwtMC4wMTEgMS41MDMsMC4wNjUgMi4zNzcsMC4zNWMwLjg0NywwLjI2NyAyLjA4MywwLjk2NyAyLjAzMywxLjE0N2MtMC4wMTYsMC4wNjYgLTEuMTgsMS44NDcgLTEuMjc4LDEuOTYyYy0wLjAxMSwwLjAxMSAtMC4xNjQsLTAuMDYgLTAuMzM0LC0wLjE1OGMtMC42MTIsLTAuMzUgLTEuNTMsLTAuNzcgLTEuOTU2LC0wLjg4NmMtMC41NTIsLTAuMTU4IC0xLjI0NywtMC4xNyAtMS42NCwtMC4wMzJjLTAuNDcsMC4xNjMgLTAuNzMyLDAuNTE5IC0wLjczMiwwLjk5NGMwLDAuNzY1IDAuNDk3LDEuMDcxIDIuNjc4LDEuNjczYzIuNzMyLDAuNzQ4IDMuNzkzLDEuNzkyIDMuNywzLjY1NmMtMC4wNDQsMC45MyAtMC4zMjMsMS41OSAtMC45MzUsMi4yM2MtMC41NjMsMC41ODUgLTEuMzY2LDEgLTIuMywxLjE5MWMtMC41OCwwLjExNSAtMS42NjgsMC4xNDIgLTIuMjQ3LDAuMDVsLTAuMDAxLC0wLjAwMXptLTE0LjMzNiwtNi4xMDlsMCwtNi4wNjdsOS4xMjYsMGwwLDIuNDZsLTYuNDQ5LDBsMC4wMSwxLjNsMC4wMTcsMS4yOTZsMi44NTMsMC4wMTZsMi44NTgsMC4wMTFsMCwyLjQwNWwtNS43MzgsMGwwLDQuNjQ2bC0yLjY3OCwwbDAsLTYuMDY3bDAuMDAxLDB6Ii8+Cjwvc3ZnPgo="
          />
          <meta name="description" content={t('metaDescription')} />
          <meta name="keywords" content={t('metaKeywords')} />

          <meta property="og:title" content={t('og:title')} />
          <meta property="og:description" content={t('og:description')} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://warsaw.flatstack.com/" />
          <meta
            property="og:image"
            content="https://warsaw.flatstack.com/logo500.png"
          />
        </Helmet>
      ) : null}
      <Header />
      <Hero />
      <Vacancy />
      <Company />
      <Relocation />
      <Feedbacks />
      <Warsaw />
      <Join />
      <Footer />
      <HiddenFormForNetlify />
    </>
  );
};

export default Page;
