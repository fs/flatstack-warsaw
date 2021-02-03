import React, { useCallback, useContext } from 'react';
import enLocale from '../locales/en';

const Context = React.createContext(null);

function noTranslationFn(key) {
  return () => {
    throw new Error(`translation for "${key}" not found`);
  };
}

function getByPath(path, obj) {
  const pathSegments = path.split('.');

  let result = obj;

  for (let i = 0; i < pathSegments.length; i++) {
    const curr = result[pathSegments[i]];

    if (!curr) {
      return null;
    }

    result = curr;
  }

  return result;
}

export const Provider = ({ locale, values, children }) => {
  const t = useCallback(
    (key, options) => {
      const translation =
        getByPath(key, values.translations) ||
        getByPath(key, enLocale.translations) ||
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
