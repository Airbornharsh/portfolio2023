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
});

export default Context;
