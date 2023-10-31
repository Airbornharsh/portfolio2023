import { useContext } from "react";
import Context from "../../Context/Context";

const Head = () => {
  const Ctx = useContext(Context);
  const handleMinimize = () => {
    console.log("Minimize");
    Ctx.handleMaximize(false);
  };

  const handleMaximize = () => {
    console.log("Maximize");
    Ctx.handleMaximize(true);
  };

  const handleClose = () => {
    console.log("Close");
    Ctx.handleClose(true);
  };

  return (
    <div className="bg-color2 h-10 flex items-center pl-3">
      <ul className="flex gap-2 ">
        <li
          className="bg-error h-4 w-4 rounded-full cursor-pointer"
          onClick={handleClose}
        />
        <li
          className="bg-warning h-4 w-4 rounded-full cursor-pointer"
          onClick={handleMinimize}
        />
        <li
          className="bg-success h-4 w-4 rounded-full cursor-pointer"
          onClick={handleMaximize}
        />
      </ul>
    </div>
  );
};

export default Head;
