import { useContext, useEffect, useState } from "react";
import { CheckCommand, CheckCommandAndExecute } from "../../helpers/commands";
import Context from "../../Context/Context";

interface CmdInputProps {
  inputRef: React.RefObject<HTMLInputElement>;
  isNew: boolean;
  setIsNew: React.Dispatch<React.SetStateAction<boolean>>;
}

const CmdInput = ({ inputRef, isNew, setIsNew }: CmdInputProps) => {
  const Ctx = useContext(Context);
  const [cmd, setCmd] = useState<string>("");
  const [cmdList, setCmdList] = useState<string[]>([]);

  useEffect(() => {
    setIsNew(true);
  }, [inputRef, setIsNew]);

  const BreakCmd = (tempCmd: string) => {
    const tempCmdList = tempCmd.split(" ");
    setCmdList(tempCmdList);
    Ctx.setSuggestions(tempCmdList[tempCmdList.length - 1]);
  };

  const onNewSubmit = () => {
    if (cmd == "y") {
      setIsNew(false);
    } else if (cmd == "n") {
      alert("You are Redirecting to my Visual portfolio");
      window.location.href = "https://harshkeshri.com";
    }
  };

  const onCmdSubmit = () => {
    try {
      if (isNew) {
        onNewSubmit();
        return;
      }
      Ctx.clearSuggestions();
      if (cmd.trim().toLocaleLowerCase() == "clear") {
        Ctx.history.clearStoredLi();
        return;
      } else if (cmd.trim().toLowerCase() == "exit") {
        Ctx.handleClose(true);
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
      {isNew ||
        cmdList.map((tempCmd, index) => {
          const checkedCmd = CheckCommand(tempCmd);
          return (
            <p
              className="font-medium"
              key={"cmdview" + index}
              style={{
                color: checkedCmd ? "#00ff00" : "#ff0000",
                marginRight: index === cmdList.length - 1 ? "0" : "0.5rem",
              }}
            >
              {tempCmd}
            </p>
          );
        })}
      {isNew && (
        <p
          className="font-medium text-white"
          style={{
            marginRight: cmdList.length === 0 ? "0" : "0.5rem",
          }}
        >
          Do you know about terminal? y/n&#41;
        </p>
      )}
      {isNew && (
        <p
          className="font-medium"
          style={{
            color:
              cmd.trim().toLowerCase() == "y" || cmd.trim().toLowerCase() == "n"
                ? "#56E39F"
                : "#E42929",
          }}
        >
          {cmd}
        </p>
      )}
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
          className="text-black w-1 opacity-0"
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
