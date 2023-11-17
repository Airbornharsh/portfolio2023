import { useContext, useState } from "react";
import { CheckCommand, CheckCommandAndExecute } from "../../helpers/commands";
import Context from "../../Context/Context";

interface CmdInputProps {
  inputRef: React.RefObject<HTMLInputElement>;
  scrollFn: () => void;
}

const CmdInput = ({ inputRef, scrollFn }: CmdInputProps) => {
  const Ctx = useContext(Context);
  const [cmd, setCmd] = useState<string>("");
  const [cmdList, setCmdList] = useState<string[]>([]);

  // useEffect(() => {
  //   setIsNew(true);
  // }, [inputRef, setIsNew]);

  const BreakCmd = (tempCmd: string) => {
    const tempCmdList = tempCmd.split(" ");
    setCmdList(tempCmdList);
    Ctx.setSuggestions(tempCmdList[tempCmdList.length - 1]);
  };

  const onCmdSubmit = () => {
    try {
      Ctx.clearSuggestions();
      if (
        cmd.trim().toLocaleLowerCase() == "clear" ||
        cmd.trim().toLocaleLowerCase() == "cls"
      ) {
        Ctx.history.clearStoredLi();
        return;
      } else if (cmd.trim().toLowerCase() == "exit") {
        Ctx.setIsNew(true);
        return;
      }

      const res = CheckCommandAndExecute(cmd);

      const tempCmdList = cmd.split(" ");

      Ctx.history.addStoredLi([
        <li
          key={"cmd" + Date.now()}
          className="flex flex-col font-semibold w-[100%] max-w-[100%] "
        >
          <div className="flex font-semibold w-[100%] max-w-[100%] ">
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
          <div className="pl-3 font-videoType text-[0.9rem] font-thin ">
            {res}
          </div>
        </li>,
      ]);
      scrollFn();
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
      {Ctx.isNew ||
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
      {/* {isNew && (
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
      )} */}
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
            setCmd(e.target.value.toLowerCase());
            BreakCmd(e.target.value.toLowerCase());
          }}
        />
      </form>
    </li>
  );
};

export default CmdInput;
