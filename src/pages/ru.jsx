import { renderToStaticMarkup } from 'react-dom/server';
import Html from "./Html";

const RuPage = () => (
  <Html />
);

export default renderToStaticMarkup(<RuPage />);
