import { useState } from "react";
import Context from "./Context";

const ContextProvider = (props: React.PropsWithChildren<unknown>) => {
  const [loader, setLoader] = useState(false);
  const [maximized, setMaximized] = useState(false);
  const [closed, setClosed] = useState(false);
  const [storedLi, setStoredLi] = useState<JSX.Element[]>([]);

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

  const addStoredLiFn = (data: JSX.Element[]) => {
    setStoredLi((prev) => prev.concat(data));
    return data;
  };

  const clearStoredLiFn = () => {
    setStoredLi([]);
    return;
  };

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
        history: {
          storedLi: storedLi,
          addStoredLi: addStoredLiFn,
          clearStoredLi: clearStoredLiFn,
        },
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { ContextProvider };
