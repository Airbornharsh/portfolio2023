import { useContext, useEffect, useRef } from "react";
import CmdInput from "../body/CmdInput";
import CmdOutput from "../body/CmdOutput";
import CmdSuggestion from "../body/CmdSuggestion";
import Context from "../../Context/Context";

interface BodyProps {
  inputRef: React.RefObject<HTMLInputElement>;
}

const Body = ({ inputRef }: BodyProps) => {
  const Ctx = useContext(Context);
  const scrollRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Scroll to the bottom when the component mounts or updates
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  });

  const scrollFn = () => {
    console.log(window.innerWidth);
    if (window.innerWidth > 768)
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full h-full px-4 pb-4 text-white overflow-auto overflow-y-auto scroll-bar">
      {Ctx.isNew || <p className="font-medium text-sm">Type "help" for help</p>}
      <ul className="flex flex-col items-start">
        <CmdOutput />
        {/* {isNew && (
          <p className="font-medium text-white">
            Do you know about terminal? y/n&#41;
          </p>
        )} */}
        <CmdInput inputRef={inputRef} scrollFn={scrollFn} />
        {Ctx.isNew || <CmdSuggestion />}
        <span ref={scrollRef}></span>
      </ul>
    </div>
  );
};

export default Body;
