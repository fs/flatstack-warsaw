import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import Document from './Document';

export default function (Page) {
  const sheet = new ServerStyleSheet();

  const helmetContext = {};

  const content = renderToString(
    <HelmetProvider context={helmetContext}>
      {sheet.collectStyles(<Page />)}
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
