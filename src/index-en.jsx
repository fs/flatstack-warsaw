import 'regenerator-runtime/runtime';

import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import L10nContext from './components/L10nContext';
import Page from './components/Page';
import enLocale from './locales/en';
import theme from './theme';

const target = document.getElementById('root');

const App = () => (
  <ThemeProvider theme={theme}>
    <L10nContext.Provider locale="en" values={enLocale}>
      <Page />
    </L10nContext.Provider>
  </ThemeProvider>
);

ReactDOM.hydrate(<App />, target);
