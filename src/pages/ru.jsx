import { renderToStaticMarkup } from 'react-dom/server';
import Content from './shared/Content';
import L10nContext from './shared/L10nContext';
import ruLocale from '../locales/ru';

const RuPage = () => (
  <L10nContext.Provider locale="ru" values={ruLocale}>
    <Content />
  </L10nContext.Provider>
);

export default renderToStaticMarkup(<RuPage />);
