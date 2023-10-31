import { useRef } from "react";
import CmdInput from "../Body/CmdInput";

const Body = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className="w-full h-full px-4 text-white"
      onClick={() => {
        inputRef.current?.focus();
      }}
    >
      <ul className="flex flex-col items-start">
        <CmdInput inputRef={inputRef} />
      </ul>
    </div>
  );
};

export default Body;
