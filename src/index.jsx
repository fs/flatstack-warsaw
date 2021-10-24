import 'regenerator-runtime/runtime';

import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import EnPage from './components/pages/index';
import RuPage from './components/pages/ru';
import theme from './theme';

const target = document.getElementById('root');

const App = () => (
  <HelmetProvider>
    <ThemeProvider theme={theme}>
      {window.location.pathname === '/ru' ? <RuPage /> : <EnPage />}
    </ThemeProvider>
  </HelmetProvider>
);

ReactDOM.hydrate(<App />, target);
