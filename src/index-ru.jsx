import 'regenerator-runtime/runtime';

import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import L10nContext from './components/L10nContext';
import Page from './components/Page';
import ruLocale from './locales/ru';
import theme from './theme';

const target = document.getElementById('root');

const App = () => (
  <ThemeProvider theme={theme}>
    <L10nContext.Provider locale="ru" values={ruLocale}>
      <Page />
    </L10nContext.Provider>
  </ThemeProvider>
);

ReactDOM.hydrate(<App />, target);
