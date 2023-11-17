import { useState } from "react";
import Context from "./Context";
import { commands } from "../assets/data/command";

const ContextProvider = (props: React.PropsWithChildren<unknown>) => {
  const [isNew, setIsNew] = useState(true);
  const [loader, setLoader] = useState(false);
  const [maximized, setMaximized] = useState(false);
  const [closed, setClosed] = useState(false);
  const [storedLi, setStoredLi] = useState<JSX.Element[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const setIsNewFn = (data: boolean) => {
    setIsNew(data);
    return data;
  }

  const setLoaderFn = (data: boolean) => {
    setLoader(data);
    return data;
  };

  const setToggleFn = (data: boolean) => {
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

  const setSuggestionsFn = (data: string) => {
    const tempCmd: string[] = [];
    commands.forEach((command) => {
      if (command.startsWith(data.trim())) {
        tempCmd.push(command);
      }
    });

    setSuggestions(tempCmd);
    return data;
  };

  const clearSuggestionsFn = () => {
    setSuggestions([]);
    return;
  };

  return (
    <Context.Provider
      value={{
        isNew: isNew,
        setIsNew: setIsNewFn,
        util: {
          loader: loader,
          setLoader: setLoaderFn,
        },
        maximized: maximized,
        handleMaximizeToggle: setToggleFn,
        closed: closed,
        handleClose: setClosedFn,
        history: {
          storedLi: storedLi,
          addStoredLi: addStoredLiFn,
          clearStoredLi: clearStoredLiFn,
        },
        suggestions: suggestions,
        setSuggestions: setSuggestionsFn,
        clearSuggestions: clearSuggestionsFn,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { ContextProvider };
