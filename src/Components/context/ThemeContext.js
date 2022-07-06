import React from 'react';

export const themes = {
  dark: {
    color: 'white',
    background: 'rgb(20, 20, 20)',
  },
  light: {
    color: 'black',
    background: 'rgb(255, 255, 255)',
  },
};
const ThemeContext = React.createContext(themes.dark);

export default ThemeContext;
