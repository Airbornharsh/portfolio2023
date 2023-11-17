import { useContext } from "react";
import Context from "../../Context/Context";

const Head = () => {
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
    <div className="bg-color2 h-10 flex items-center pl-3 rounded-t-3xl">
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
    </div>
  );
};

export default Head;
