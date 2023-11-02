import { useContext, useRef } from "react";
import Head from "../components/terminal/Head";
import Body from "../components/terminal/Body";
import Context from "../Context/Context";

const Home = () => {
  const Ctx = useContext(Context);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="w-screen h-screen bg-color1 overflow-hidden">
      <div
        className="bg-color1  rounded-2xl shadow-sm shadow-color3 terminal-Container border-[0.2rem] border-color3 overflow-hidden fixed left-[50%]"
        style={{
          maxWidth: Ctx.maximized ? "100%" : "60rem",
          maxHeight: Ctx.maximized ? "100%" : "40rem",
          transition: "all 0.2s ease-in-out",
          width: !Ctx.closed ? "96vw" : "3rem",
          height: !Ctx.closed ? "96vh" : "3rem",
          bottom: Ctx.closed ? "1rem" : "unset",
          top: Ctx.closed ? "unset" : "50%",
          transform: Ctx.closed ? "unset" : "translate(-50%,-50%)",
          zIndex: Ctx.closed ? 100 : 0,
        }}
      >
        {Ctx.closed ? (
          <div
            className="w-full h-full flex justify-center items-center"
            onClick={() => {
              Ctx.handleClose(false);
            }}
          >
            <img
              src="/jpeg/airbornharsh.jpeg"
              alt="photo"
              className="h-8 w-8"
            />
          </div>
        ) : (
          <div className="w-full h-full flex flex-col">
            <Head />
            <div
              onClick={() => {
                // if inputRef.current.
                // inputRef.current?.focus();
              }}
            >
              <Body inputRef={inputRef} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
