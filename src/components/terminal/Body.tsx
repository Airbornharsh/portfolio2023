import CmdInput from "../body/CmdInput";
import CmdOutput from "../body/CmdOutput";
import CmdSuggestion from "../body/CmdSuggestion";

interface BodyProps {
  inputRef: React.RefObject<HTMLInputElement>;
}

const Body = ({ inputRef }: BodyProps) => {
  return (
    <div className="w-full h-full px-4 pb-4 text-white overflow-x-clip overflow-y-auto scroll-bar-hide">
      <p className="font-medium text-sm">Type "help" for help</p>
      <ul className="flex flex-col items-start">
        <CmdOutput />
        <CmdInput inputRef={inputRef} />
        <CmdSuggestion />
      </ul>
    </div>
  );
};

export default Body;
