import L10nContext from '../components/L10nContext';
import Page from '../components/Page';
import enLocale from '../locales/en';
import render from '../render';

export default render(() => (
  <L10nContext.Provider locale="en" values={enLocale}>
    <Page />
  </L10nContext.Provider>
));
