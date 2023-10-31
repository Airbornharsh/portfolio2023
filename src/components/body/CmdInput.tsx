import { useContext, useState } from "react";
import { CheckCommand, CheckCommandAndExecute } from "../../helpers/commands";
import Context from "../../Context/Context";

interface CmdInputProps {
  inputRef: React.RefObject<HTMLInputElement>;
}

const CmdInput = ({ inputRef }: CmdInputProps) => {
  const Ctx = useContext(Context);
  const [cmd, setCmd] = useState<string>("");
  const [cmdList, setCmdList] = useState<string[]>([]);

  // const CmdAnalyze = (tempCmd: string) => {
  //   console.log(tempCmd);
  // };

  const BreakCmd = (tempCmd: string) => {
    const tempCmdList = tempCmd.split(" ");
    setCmdList(tempCmdList);
    Ctx.setSuggestions(tempCmdList[tempCmdList.length - 1]);
  };

  // const IsValid = () => {
  //   const tempCmdList = cmd.split(" ");
  //   let isValid = true;

  //   if (tempCmdList.length === 0) {
  //     return false;
  //   }

  //   if (tempCmdList.length > 0) {
  //     tempCmdList.forEach((cmd) => {
  //       if (!CheckCommand(cmd)) {
  //         isValid = false;
  //       }
  //     });
  //   }

  //   return isValid;
  // };

  const onCmdSubmit = () => {
    try {
      Ctx.clearSuggestions();
      if (cmd.trim() == "clear") {
        Ctx.history.clearStoredLi();
        return;
      }

      const res = CheckCommandAndExecute(cmd);

      const tempCmdList = cmd.split(" ");

      Ctx.history.addStoredLi([
        <li className="flex flex-col font-semibold w-[100%] max-w-[100%] overflow-clip">
          <div className="flex font-semibold w-[100%] max-w-[100%] overflow-clip">
            <p className="text-color3">harsh</p>
            <p className="text-grey">@</p>
            <p className="text-success">airbornharsh</p>
            <p className="text-grey ml-2 mr-2">$</p>
            {tempCmdList.map((cmd, index) => {
              const checkedCmd = CheckCommand(cmd);
              return (
                <p
                  className="font-medium"
                  key={index}
                  style={{
                    color: checkedCmd ? "#00ff00" : "#ff0000",
                    marginRight: index === cmdList.length - 1 ? "0" : "0.5rem",
                  }}
                >
                  {cmd}
                </p>
              );
            })}
          </div>
          <div>{res}</div>
        </li>,
      ]);
    } catch (e) {
      console.log(e);
    } finally {
      setCmd("");
      setCmdList([]);
    }
  };

  return (
    <li className="flex font-semibold w-[100%] max-w-[100%] ">
      <p className="text-color3">harsh</p>
      <p className="text-grey">@</p>
      <p className="text-success">airbornharsh</p>
      <p className="text-grey ml-2 mr-2">$</p>
      {cmdList.map((cmd, index) => {
        const checkedCmd = CheckCommand(cmd);
        return (
          <p
            className="font-medium"
            key={index}
            style={{
              color: checkedCmd ? "#00ff00" : "#ff0000",
              marginRight: index === cmdList.length - 1 ? "0" : "0.5rem",
            }}
          >
            {cmd}
          </p>
        );
      })}
      <span className="blinking-cursor">|</span>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // if (IsValid()) {
          onCmdSubmit();
          // } else {
          // alert("Invalid Command");
          // }
        }}
      >
        <input
          className="text-black w-0"
          autoFocus={true}
          ref={inputRef}
          type="text"
          value={cmd}
          onChange={(e) => {
            setCmd(e.target.value);
            BreakCmd(e.target.value);
          }}
        />
      </form>
    </li>
  );
};

export default CmdInput;
