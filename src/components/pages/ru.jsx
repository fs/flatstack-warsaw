import Page from '../Page';
import L10nContext from '../L10nContext';
import ruLocale from '../../locales/ru';

const RuPage = () => (
  <L10nContext.Provider locale="ru" values={ruLocale}>
    <Page />
  </L10nContext.Provider>
);

export default RuPage;
