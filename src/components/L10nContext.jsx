import React, { useCallback, useContext } from 'react';
import enLocale from '../locales/en';

const Context = React.createContext(null);

const noTranslationFn = (key) => () => {
  throw new Error(`translation for "${key}" not found`);
};

export const Provider = ({ locale, values, children }) => {
  const t = useCallback(
    (key, options) => {
      const translation =
        values.translations[key] ||
        enLocale.translations[key] ||
        noTranslationFn(key);

      if (typeof translation === 'function') {
        return translation(options);
      }

      return translation;
    },
    [values],
  );

  return (
    <Context.Provider value={{ t, values, locale }}>
      {children}
    </Context.Provider>
  );
};

export const useL10n = () => {
  const contextValue = useContext(Context);

  if (contextValue === null) {
    throw new Error('useL10n cannot be used without L10nContext.Provider');
  }

  return contextValue;
};

export default {
  Provider,
  useL10n,
};
