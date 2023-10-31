import { useContext } from "react";
import Context from "../../Context/Context";

const CmdSuggestion = () => {
  const Ctx = useContext(Context);

  const arrow = ">";
  return (
    // Ctx.suggestions.length > 0 && (
    <li className="flex flex-col">
      {Ctx.suggestions.map((suggestion) => (
        <span className="text-white flex gap-2" key={suggestion + "suggestion"}>
          <p>-{arrow}</p>
          <p  className="text-success">{suggestion}</p>
        </span>
      ))}
    </li>
    // )
  );
};

export default CmdSuggestion;
