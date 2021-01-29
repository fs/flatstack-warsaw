import { ServerStyleSheet } from 'styled-components';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Document from './Document';

export default function (page) {
  const sheet = new ServerStyleSheet();

  const helmetContext = {huh: true};

  const content = renderToString(
    <HelmetProvider context={helmetContext}>
      <Helmet>
        <title>Test</title>
      </Helmet>
      {sheet.collectStyles(page)}
    </HelmetProvider>,
  );

  const html = renderToStaticMarkup(
    <Document styles={sheet.getStyleElement()} helmet={helmetContext.helmet}>
      {content}
    </Document>,
  );
  sheet.seal();

  return html;
}
