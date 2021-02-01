import Page from '../components/Page';
import L10nContext from '../components/L10nContext';
import ruLocale from '../locales/ru';
import render from '../render';

const RuPage = () => (
  <L10nContext.Provider locale="ru" values={ruLocale}>
    <Page />
  </L10nContext.Provider>
);

export default render(RuPage);
