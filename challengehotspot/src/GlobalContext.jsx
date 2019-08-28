import React, {
  memo, useState, useContext, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import themeDefault from './Themes/default';
import dark from './Themes/dark';

const GlobalContext = React.createContext();

const themes = {
  default: themeDefault,
  dark,
};

const themeStorage = localStorage.getItem('theme');
const stringTheme = localStorage.getItem('themeString');

function validStorage() {
  if (themeStorage) {
    const json = JSON.parse(themeStorage);
    if (json) {
      return json;
    }
  }
  return null;
}

function validaThemeStringStorage() {
  if (stringTheme) {
    if (stringTheme) {
      return stringTheme;
    }
  }
  return 'default';
}

const GlobalContextProvider = memo(({ children }) => {
  const [themeString, setThemeString] = useState(validaThemeStringStorage());
  const [theme, setTheme] = useState(validStorage() || themes[themeString]);

  const trocaTema = useCallback((item) => {
    setThemeString(item);
    setTheme(themes[item]);
    localStorage.setItem('themeString', item);
    localStorage.setItem('theme', JSON.stringify(themes[item]));
  }, []);

  const providerValues = {
    theme,
    trocaTema,
    themeString,
  };

  return (
    <GlobalContext.Provider value={providerValues}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </GlobalContext.Provider>
  );
});

GlobalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};


const useContextGlobal = () => useContext(GlobalContext);

export { GlobalContextProvider, useContextGlobal };

export default GlobalContext;
