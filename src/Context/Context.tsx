import React from "react";

const Context = React.createContext({
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
});

export default Context;
