import { useContext } from "react";
import Body from "../components/terminal/Body";
import Head from "../components/terminal/Head";
import Context from "../Context/Context";

const Home = () => {
  const Ctx = useContext(Context);

  return (
    <div className="w-screen h-screen bg-color1 flex justify-center items-center overflow-hidden">
      {Ctx.closed || (
        <div
          className="w-[96vw]  bg-color1 h-[96vh] rounded-2xl shadow-sm shadow-color3 terminal-Container border-[0.2rem] border-color3 overflow-hidden relative"
          style={{
            maxWidth: Ctx.maximized ? "100vw" : "60rem",
            maxHeight: Ctx.maximized ? "100%" : "40rem",
            transition: "all 0.2s ease-in-out",
          }}
        >
          <Head />
          <Body />
        </div>
      )}
    </div>
  );
};

export default Home;
