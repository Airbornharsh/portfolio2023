import { useState } from "react";

const CmdInput = () => {
  const [cmd, setCmd] = useState<string>("");

  return (
    <li className="flex font-semibold">
      <p className="text-color3">harsh</p>
      <p className="text-grey">@</p>
      <p className="text-success">airbornharsh</p>
      <p className="text-grey ml-2">$</p>
      <input
        className="ml-3 bg-transparent outline-none w-full font-medium"
        autoFocus={true}
        type="text"
        value={cmd}
        onChange={(e) => setCmd(e.target.value)}
      />
    </li>
  );
};

export default CmdInput;
