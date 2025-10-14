import { useContext } from "react";
import Context from "../../Context/Context";
import { Link } from "react-router-dom";

const Head = () => {
  const Ctx = useContext(Context);

  const handleIsNew = () => {
    console.log("Close");
    Ctx.setIsNew(true);
  };

  return (
    <div className="bg-color2 h-10 flex items-center px-3 justify-between">
      <ul className="flex gap-2 ">
        <li
          className="bg-error h-4 w-4 rounded-full cursor-pointer"
          onClick={handleIsNew}
          title="Close Terminal"
        />
        <li
          className="bg-success h-4 w-4 rounded-full cursor-pointer"
          onClick={() =>
            (window.location.href = "https://visual.harshkeshri.com")
          }
          title="Go to Visual Portfolio"
        />
      </ul>
      <div className="text-commandResult font-semibold text-sm">
        Terminal Portfolio - Harsh Keshri
      </div>
      <Link
        to={"https://visual.harshkeshri.com"}
        hrefLang="_blank"
        className="text-commandResult font-semibold text-sm hover:underline"
      >
        Go to Website
      </Link>
    </div>
  );
};

export default Head;
