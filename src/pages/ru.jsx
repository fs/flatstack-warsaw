import Content from '../components/Content';
import L10nContext from '../components/L10nContext';
import ruLocale from '../locales/ru';
import render from '../renderer';

const RuPage = () => (
  <L10nContext.Provider locale="ru" values={ruLocale}>
    <Content />
  </L10nContext.Provider>
);

export default render(RuPage);
