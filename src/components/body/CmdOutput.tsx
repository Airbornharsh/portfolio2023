import { useContext } from "react";
import Context from "../../Context/Context";

const CmdOutput = () => {
  const Ctx = useContext(Context);

  return <>{Ctx.history.storedLi.map((li) => li)}</>;
};

export default CmdOutput;
