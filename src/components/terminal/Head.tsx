import { useContext } from "react";
import Context from "../../Context/Context";
import { Link } from "react-router-dom";

interface HeadProps {
  onMouseDown: (e: { clientX: number; clientY: number }) => void;
  onMouseMove: (e: { clientX: number; clientY: number }) => void;
  onMouseUp: () => void;
}

const Head: React.FC<HeadProps> = ({ onMouseDown, onMouseMove, onMouseUp }) => {
  const Ctx = useContext(Context);
  const handleCLose = () => {
    console.log("Minimize");
    Ctx.handleClose(true);
  };

  const handleMaximizeToggle = () => {
    console.log("Maximize");
    Ctx.handleMaximizeToggle(!Ctx.maximized);
  };

  const handleIsNew = () => {
    console.log("Close");
    Ctx.setIsNew(true);
  };

  return (
    <div
      className="bg-color2 h-10 flex items-center px-3 rounded-t-3xl justify-between"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
    >
      <ul className="flex gap-2 ">
        <li
          className="bg-error h-4 w-4 rounded-full cursor-pointer"
          onClick={handleIsNew}
        />
        <li
          className="bg-warning h-4 w-4 rounded-full cursor-pointer"
          onClick={handleCLose}
        />
        <li
          className="bg-success h-4 w-4 rounded-full cursor-pointer"
          onClick={handleMaximizeToggle}
        />
      </ul>
      <Link
        to={"https://visual.harshkeshri.com"}
        hrefLang="_blank"
        className="text-commandResult font-semibold text-sm"
      >
        Go to Website
      </Link>
    </div>
  );
};

export default Head;
