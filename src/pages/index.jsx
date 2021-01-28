import { renderToStaticMarkup } from 'react-dom/server';
import Html from './Html';

const EnPage = () => <Html />;

export default renderToStaticMarkup(<EnPage />);
