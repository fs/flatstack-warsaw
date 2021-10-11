import Page from '../Page';
import L10nContext from '../L10nContext';
import enLocale from '../../locales/en';

const EnPage = () => (
  <L10nContext.Provider locale="en" values={enLocale}>
    <Page />
  </L10nContext.Provider>
);

export default EnPage;
