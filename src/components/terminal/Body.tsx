import { useRef } from "react";
import CmdInput from "../body/CmdInput";
import CmdOutput from "../body/CmdOutput";

const Body = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className="w-full h-full px-4 text-white overflow-x-clip overflow-y-auto scroll-bar-hide"
      onClick={() => {
        inputRef.current?.focus();
      }}
    >
      <p className="font-medium text-sm">Type "help" for help</p>
      <ul className="flex flex-col items-start">
        <CmdOutput />
        <CmdInput inputRef={inputRef} />
      </ul>
    </div>
  );
};

export default Body;
