import { storage, StorageKeys } from '@src/context';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type ThemeFlag = 1 | 2 | 3;

const selectedRole = storage.getData(StorageKeys.SELECTED_ROLE);

function getInitialThemeFlag(): ThemeFlag {
  if (selectedRole === '1') return 1;
  if (selectedRole === '2') return 2;
  if (selectedRole === '3') return 3;
  return 1; // default
}

type FlagThemeColors = {
  buttonColor: string;
  textColor: string;
  color828282?: string;
  color2C9CDB: string;
  colorFAFAFA: string;
  colorFFFFFF: string;
  color9B51E0: string;
  colorA1A5A72E: string;
  colorEB5757: string;
};

const themeMap: Record<ThemeFlag, FlagThemeColors> = {
  1: {
    buttonColor: '#2C9CDB',
    textColor: '#333333',
    color828282: '#828282',
    color2C9CDB: '#2C9CDB',
    colorFAFAFA: '#FAFAFA',
    colorFFFFFF: '#FFFFFF',
    color9B51E0: '#9B51E0',
    colorA1A5A72E: '#A1A5A72E',
    colorEB5757: '#EB5757',
  },
  2: {
    buttonColor: '#219653',
    textColor: '#333333',
    color828282: '#828282',
    color2C9CDB: '#2C9CDB',
    colorFAFAFA: '#FAFAFA',
    colorFFFFFF: '#FFFFFF',
    color9B51E0: '#9B51E0',
    colorA1A5A72E: '#A1A5A72E',
    colorEB5757: '#EB5757',
  },
  3: {
    buttonColor: '#9B51E0',
    textColor: '#333333',
    color828282: '#828282',
    color2C9CDB: '#2C9CDB',
    colorFAFAFA: '#FAFAFA',
    colorFFFFFF: '#FFFFFF',
    color9B51E0: '#9B51E0',
    colorA1A5A72E: '#A1A5A72E',
    colorEB5757: '#EB5757',
  },
};

interface FlagThemeContextType {
  themeFlag: ThemeFlag;
  colors: FlagThemeColors;
  setThemeFlag: (flag: ThemeFlag) => void;
}

const FlagThemeContext = createContext<FlagThemeContextType | undefined>(undefined);

export const FlagThemeProvider = ({ children }: { children: ReactNode }) => {
  // const [themeFlag, setThemeFlag] = useState<ThemeFlag>(1);
  const [themeFlag, setThemeFlag] = useState<ThemeFlag>(getInitialThemeFlag());

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
