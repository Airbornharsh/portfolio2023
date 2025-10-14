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
    <div className="w-full h-full px-6 pb-4 text-white overflow-auto overflow-y-auto scroll-bar bg-color1">
      <div className="mb-4 p-3 bg-color2 rounded-lg border border-color3">
        <p className="font-medium text-sm text-commandResult">
          💻 Welcome to Harsh Keshri's Terminal Portfolio!
        </p>
        <p className="font-medium text-xs text-gray-400 mt-1">
          Type "help" for available commands • Use TAB for autocomplete • Type
          "exit" to close
        </p>
      </div>
      <ul className="flex flex-col items-start">
        <CmdOutput />
        {/* Default welcome message */}
        {Ctx.history.storedLi.length === 0 && (
          <li className="w-full mb-4">
            <div className="bg-color2 rounded-lg p-4 border border-color3">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">HK</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-commandResult">
                    Harsh Keshri
                  </h2>
                  <p className="text-sm text-gray-400">
                    Full Stack Developer & AI Engineer
                  </p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-gray-300">
                  👋 Welcome to my interactive terminal portfolio! I'm a
                  passionate developer with expertise in:
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">
                    AI/ML
                  </span>
                  <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">
                    Web3
                  </span>
                  <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">
                    Full Stack
                  </span>
                  <span className="bg-orange-500/20 text-orange-300 px-2 py-1 rounded text-xs">
                    DevOps
                  </span>
                </div>
                <p className="text-gray-400 mt-3">
                  💡 Type <span className="text-color3 font-mono">help</span> to
                  explore my work, or use{" "}
                  <span className="text-color3 font-mono">↑↓</span> arrow keys
                  to navigate suggestions.
                </p>
              </div>
            </div>
          </li>
        )}
        <CmdInput inputRef={inputRef} scrollFn={scrollFn} />
        <CmdSuggestion />
        <span ref={scrollRef}></span>
      </ul>
    </div>
  );
};

export default Body;
