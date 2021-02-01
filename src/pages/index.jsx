import Page from '../components/Page';
import L10nContext from '../components/L10nContext';
import enLocale from '../locales/en';
import render from '../render';

const EnPage = () => (
  <L10nContext.Provider locale="en" values={enLocale}>
    <Page />
  </L10nContext.Provider>
);

export default render(EnPage);
