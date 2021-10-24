import { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { useL10n } from './L10nContext';
import Header from './organisms/Header';
import Hero from './organisms/Hero';
import Footer from './organisms/Footer';
import Vacancy from './organisms/Vacancy';
import Relocation from './organisms/Relocation';
import Feedbacks from './organisms/Feedbacks';
import Warsaw from './organisms/Warsaw';
import Join from './organisms/Join';

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
  }
`;

const Page = () => {
  const { t, locale } = useL10n();

  return (
    <>
      <GlobalStyle />
      <Helmet>
        <html lang={locale} />
        <meta charSet="utf-8" />
        <title>{t('title')}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#fafafa" />
        <link rel="apple-touch-icon" sizes="138x138" href="/logo138.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
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
      <Header />
      <Hero />
      <Vacancy />
      <Relocation />
      <Feedbacks />
      <Warsaw />
      <Join />
      <Footer />
    </>
  );
};

export default Page;
