import { renderToStaticMarkup } from 'react-dom/server';
import Content from './shared/Content';
import L10nContext from './shared/L10nContext';
import enLocale from '../locales/en';

const EnPage = () => (
  <L10nContext.Provider locale="en" values={enLocale}>
    <Content />
  </L10nContext.Provider>
);

export default renderToStaticMarkup(<EnPage />);
