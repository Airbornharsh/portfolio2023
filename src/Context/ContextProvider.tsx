import { useState } from "react";
import Context from "./Context";

const ContextProvider = (props: React.PropsWithChildren<unknown>) => {
  const [loader, setLoader] = useState(false);
  const [maximized, setMaximized] = useState(false);
  const [closed, setClosed] = useState(false);

  const setLoaderFn = (data: boolean) => {
    setLoader(data);
    return data;
  };

  const setMaximizedFn = (data: boolean) => {
    setMaximized(data);
    return data;
  };

  const setClosedFn = (data: boolean) => {
    setClosed(data);
    return data;
  };

  // const ContextData = {
  //   util: {
  //     loader: loader,
  //     setLoader: setLoaderFn,
  //   },
  //   maximized: maximized,
  //   handleMaximize: setMaximizedFn,
  //   minimized: minimized,
  //   handleMinimize: setMinimizedFn,
  //   closed: closed,
  //   handleClose: setClosedFn,
  // };

  return (
    <Context.Provider
      value={{
        util: {
          loader: loader,
          setLoader: setLoaderFn,
        },
        maximized: maximized,
        handleMaximize: setMaximizedFn,
        closed: closed,
        handleClose: setClosedFn,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { ContextProvider };
