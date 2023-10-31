import React from "react";

const Context = React.createContext({
  util: {
    loader: false,
    setLoader: (data: boolean) => {
      return data;
    },
  },
  maximized: false,
  handleMaximize: (data: boolean) => {
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
