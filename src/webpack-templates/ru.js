import L10nContext from '../components/L10nContext';
import Page from '../components/Page';
import ruLocale from '../locales/ru';
import render from '../render';

export default render(() => (
  <L10nContext.Provider locale="ru" values={ruLocale}>
    <Page />
  </L10nContext.Provider>
));
