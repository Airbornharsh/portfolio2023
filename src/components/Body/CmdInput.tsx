import { useState } from "react";

interface CmdInputProps {
  inputRef: React.RefObject<HTMLInputElement>;
}

const CmdInput = ({ inputRef }: CmdInputProps) => {
  const [cmd, setCmd] = useState<string>("");
  const [cmdList, setCmdList] = useState<string[]>([]);

  // const CmdAnalyze = (tempCmd: string) => {
  //   console.log(tempCmd);
  // };

  const BreakCmd = (tempCmd: string) => {
    const tempCmdList = tempCmd.split(" ");
    setCmdList(tempCmdList);
  };

  return (
    <li className="flex font-semibold w-[100%] max-w-[100%] overflow-clip">
      <p className="text-color3">harsh</p>
      <p className="text-grey">@</p>
      <p className="text-success">airbornharsh</p>
      <p className="text-grey ml-2">$</p>
      {cmdList.map((cmd, index) => {
        return (
          <p className="ml-3 font-medium" key={index}>
            {cmd}
          </p>
        );
      })}
      <input
        className="opacity-0 w-0"
        autoFocus={true}
        ref={inputRef}
        type="text"
        value={cmd}
        onChange={(e) => {
          setCmd(e.target.value);
          BreakCmd(e.target.value);
        }}
      />
    </li>
  );
};

export default CmdInput;
