import { useContext } from "react";
import Context from "../../Context/Context";

const CmdSuggestion = () => {
  const Ctx = useContext(Context);
  const arrow = ">";

  return (
    Ctx.suggestions.length > 0 && (
      <li className="flex flex-col">
        <div className="text-xs text-gray-400 mb-2">
          💡 Use ↑↓ arrow keys to navigate suggestions, TAB to autocomplete
          {Ctx.selectedSuggestionIndex >= 0 && (
            <span className="ml-2 text-color3 font-semibold">
              (Selected: {Ctx.selectedSuggestionIndex + 1}/
              {Ctx.suggestions.length})
            </span>
          )}
        </div>
        {Ctx.suggestions.map((suggestion, index) => (
          <span
            className={`flex gap-2 p-1 rounded ${
              index === Ctx.selectedSuggestionIndex
                ? "bg-color3 text-white"
                : "text-white hover:bg-color2"
            }`}
            key={suggestion + "suggestion"}
          >
            <p>-{arrow}</p>
            <p
              className={
                index === Ctx.selectedSuggestionIndex
                  ? "font-bold"
                  : "text-success"
              }
            >
              {suggestion}
            </p>
          </span>
        ))}
      </li>
    )
  );
};

export default CmdSuggestion;
