import { useContext, useState, useEffect } from "react";
import { CheckCommand, CheckCommandAndExecute } from "../../helpers/commands";
import Context from "../../Context/Context";
import { commands } from "../../assets/data/command";

interface CmdInputProps {
  inputRef: React.RefObject<HTMLInputElement>;
  scrollFn: () => void;
}

const CmdInput = ({ inputRef, scrollFn }: CmdInputProps) => {
  const Ctx = useContext(Context);
  const [cmd, setCmd] = useState<string>("");
  const [cmdList, setCmdList] = useState<string[]>([]);
  const [tabIndex, setTabIndex] = useState<number>(-1);
  const [lastTabPress, setLastTabPress] = useState<number>(0);

  // Listen for custom command execution events from ls command
  useEffect(() => {
    const handleExecuteCommand = (event: CustomEvent) => {
      const command = event.detail.command;
      if (command) {
        executeCommand(command);
      }
    };

    window.addEventListener(
      "executeCommand",
      handleExecuteCommand as EventListener
    );

    return () => {
      window.removeEventListener(
        "executeCommand",
        handleExecuteCommand as EventListener
      );
    };
  }, []);

  // useEffect(() => {
  //   setIsNew(true);
  // }, [inputRef, setIsNew]);

  const executeCommand = (command: string) => {
    try {
      Ctx.clearSuggestions();
      if (
        command.trim().toLocaleLowerCase() == "clear" ||
        command.trim().toLocaleLowerCase() == "cls"
      ) {
        Ctx.history.clearStoredLi();
        return;
      } else if (command.trim().toLowerCase() == "exit") {
        // Redirect to visual portfolio on exit
        window.location.href = "https://visual.harshkeshri.com";
        return;
      }

      const res = CheckCommandAndExecute(command);
      const tempCmdList = command.split(" ");

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
    }
  };

  const BreakCmd = (tempCmd: string, resetSuggestionIndex: boolean = true) => {
    const tempCmdList = tempCmd.split(" ");
    setCmdList(tempCmdList);
    Ctx.setSuggestions(tempCmdList[tempCmdList.length - 1]);
    // Only reset suggestion index when typing (not when navigating with arrows)
    if (resetSuggestionIndex) {
      Ctx.setSelectedSuggestionIndex(-1);
    }
  };

  const handleArrowNavigation = (direction: "up" | "down") => {
    if (Ctx.suggestions.length === 0) return;

    const currentIndex = Ctx.selectedSuggestionIndex;
    let newIndex;

    // Handle initial selection (when no suggestion is selected yet)
    if (currentIndex === -1) {
      if (direction === "down") {
        newIndex = 0; // Select first suggestion
      } else {
        newIndex = Ctx.suggestions.length - 1; // Select last suggestion
      }
    } else {
      // Handle navigation when a suggestion is already selected
      if (direction === "up") {
        newIndex =
          currentIndex <= 0 ? Ctx.suggestions.length - 1 : currentIndex - 1;
      } else {
        newIndex =
          currentIndex >= Ctx.suggestions.length - 1 ? 0 : currentIndex + 1;
      }
    }

    // Update the selected suggestion index in context
    Ctx.setSelectedSuggestionIndex(newIndex);

    // Update the command with the selected suggestion
    const selectedSuggestion = Ctx.suggestions[newIndex];
    setCmd(selectedSuggestion);

    // Update command list without changing suggestions
    const tempCmdList = selectedSuggestion.split(" ");
    setCmdList(tempCmdList);
    // Don't call setSuggestions here to keep all suggestions visible
  };

  const handleTabComplete = () => {
    const currentTime = Date.now();
    const currentCmd = cmd.trim().toLowerCase();

    // Get matching commands
    const matchingCommands = commands.filter((command) =>
      command.startsWith(currentCmd)
    );

    if (matchingCommands.length === 0) return;

    // If it's been more than 1 second since last tab press, reset index
    if (currentTime - lastTabPress > 1000) {
      setTabIndex(0);
    } else {
      // Cycle through matching commands
      setTabIndex((prev) => (prev + 1) % matchingCommands.length);
    }

    setLastTabPress(currentTime);

    // Set the command to the current match
    const selectedCommand = matchingCommands[tabIndex === -1 ? 0 : tabIndex];
    setCmd(selectedCommand);
    BreakCmd(selectedCommand);
  };

  const onCmdSubmit = () => {
    executeCommand(cmd);
    setCmd("");
    setCmdList([]);
  };

  return (
    <li className="flex font-semibold w-[100%] max-w-[100%] ">
      <p className="text-color3">harsh</p>
      <p className="text-grey">@</p>
      <p className="text-success">airbornharsh</p>
      <p className="text-grey ml-2 mr-2">$</p>
      {cmdList.map((tempCmd, index) => {
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
            BreakCmd(e.target.value.toLowerCase(), true); // Reset suggestion index when typing
            // Reset tab index when typing
            setTabIndex(-1);
          }}
          onKeyDown={(e) => {
            if (e.key === "Tab") {
              e.preventDefault();
              handleTabComplete();
            }
            // Handle arrow keys for suggestion navigation
            if (e.key === "ArrowUp") {
              e.preventDefault();
              handleArrowNavigation("up");
            }
            if (e.key === "ArrowDown") {
              e.preventDefault();
              handleArrowNavigation("down");
            }
          }}
        />
      </form>
    </li>
  );
};

export default CmdInput;
