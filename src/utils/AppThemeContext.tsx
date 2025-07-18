import React, { createContext, useContext, useState, ReactNode } from 'react';

type ThemeFlag = 1 | 2 | 3;

type FlagThemeColors = {
  buttonColor: string;
  textColor: string;
  color828282?: string;
  color2C9CDB: string;
  colorFAFAFA: string;
};

const themeMap: Record<ThemeFlag, FlagThemeColors> = {
  1: {
    buttonColor: 'red',
    textColor: '#333333',
    color828282: '#828282',
    color2C9CDB: '#2C9CDB',
    colorFAFAFA: '#FAFAFA',
  },
  2: {
    buttonColor: 'blue',
    textColor: '#333333',
    color828282: '#828282',
    color2C9CDB: '#2C9CDB',
    colorFAFAFA: '#FAFAFA',
  },
  3: {
    buttonColor: 'cyan',
    textColor: '#333333',
    color828282: '#828282',
    color2C9CDB: '#2C9CDB',
    colorFAFAFA: '#FAFAFA',
  },
};

interface FlagThemeContextType {
  themeFlag: ThemeFlag;
  colors: FlagThemeColors;
  setThemeFlag: (flag: ThemeFlag) => void;
}

const FlagThemeContext = createContext<FlagThemeContextType | undefined>(undefined);

export const FlagThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeFlag, setThemeFlag] = useState<ThemeFlag>(1);

  const value: FlagThemeContextType = {
    themeFlag,
    colors: themeMap[themeFlag],
    setThemeFlag,
  };

  return <FlagThemeContext.Provider value={value}>{children}</FlagThemeContext.Provider>;
};

export const useFlagTheme = () => {
  const context = useContext(FlagThemeContext);
  if (!context) throw new Error('useFlagTheme must be used within FlagThemeProvider');
  return context;
};
