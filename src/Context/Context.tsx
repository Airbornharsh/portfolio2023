import React from "react";

interface ContextType {
  isNew: boolean;
  setIsNew: (data: boolean) => boolean;
  util: {
    loader: boolean;
    setLoader: (data: boolean) => boolean;
  };
  maximized: boolean;
  handleMaximizeToggle: (data: boolean) => boolean;
  closed: boolean;
  handleClose: (data: boolean) => boolean;
  history: {
    storedLi: Array<JSX.Element>;
    addStoredLi: (data: JSX.Element[]) => JSX.Element[];
    clearStoredLi: () => void;
  };
  suggestions: string[];
  setSuggestions: (data: string) => string;
  clearSuggestions: () => void;
  selectedSuggestionIndex: number;
  setSelectedSuggestionIndex: (index: number) => number;
}

const Context = React.createContext<ContextType>({
  isNew: true,
  setIsNew: (data: boolean) => {
    return data;
  },
  util: {
    loader: false,
    setLoader: (data: boolean) => {
      return data;
    },
  },
  maximized: false,
  handleMaximizeToggle: (data: boolean) => {
    return data;
  },
  closed: false,
  handleClose: (data: boolean) => {
    return data;
  },
  history: {
    storedLi: [] as Array<JSX.Element>,
    addStoredLi: (data: JSX.Element[]) => {
      return data;
    },
    clearStoredLi: () => {
      return;
    },
  },
  suggestions: [] as string[],
  setSuggestions: (data: string) => {
    return data;
  },
  clearSuggestions: () => {
    return;
  },
  selectedSuggestionIndex: -1 as number,
  setSelectedSuggestionIndex: (index: number) => {
    return index;
  },
});

export default Context;
