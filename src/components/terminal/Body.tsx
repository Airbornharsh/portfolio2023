import { useEffect, useRef } from "react";
import CmdInput from "../body/CmdInput";
import CmdOutput from "../body/CmdOutput";
import CmdSuggestion from "../body/CmdSuggestion";

interface BodyProps {
  inputRef: React.RefObject<HTMLInputElement>;
  isNew: boolean;
  setIsNew: React.Dispatch<React.SetStateAction<boolean>>;
}

const Body = ({ inputRef, isNew, setIsNew }: BodyProps) => {
  const scrollRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Scroll to the bottom when the component mounts or updates
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  });

  const scrollFn = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full h-full px-4 pb-4 text-white overflow-auto overflow-y-auto scroll-bar">
      {isNew || <p className="font-medium text-sm">Type "help" for help</p>}
      <ul className="flex flex-col items-start">
        <CmdOutput />
        {isNew && (
          <p className="font-medium text-white">
            Do you know about terminal? y/n&#41;
          </p>
        )}
        <CmdInput
          inputRef={inputRef}
          isNew={isNew}
          setIsNew={setIsNew}
          scrollFn={scrollFn}
        />
        {isNew || <CmdSuggestion />}
        <span ref={scrollRef}></span>
      </ul>
    </div>
  );
};

export default Body;
