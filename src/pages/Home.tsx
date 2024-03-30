import { useContext, useRef, useState } from "react";
import Head from "../components/terminal/Head";
import Body from "../components/terminal/Body";
import Context from "../Context/Context";

const Home = () => {
  const Ctx = useContext(Context);
  const inputRef = useRef<HTMLInputElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: { clientX: number; clientY: number }) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    if (isDragging) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const onNewSubmit = (cmd: string) => {
    if (cmd === "y") {
      Ctx.setIsNew(false);
    } else if (cmd === "n") {
      alert("You are Redirecting to my Visual portfolio");
      window.location.href = "https://visual.harshkeshri.com";
    }
  };

  return (
    <div className="w-screen h-screen bg-color1  font-trLarabie">
      {Ctx.isNew ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <div className=" max-w-[30rem] max-h-[12rem] w-[96vw] h-auto bg-color1  rounded-2xl shadow-sm shadow-color3 terminal-Container border-[0.1rem] border-color3 fixed text-white p-4 flex flex-col gap-3 justify-center items-center">
            <p className="text-2xl font-extrabold text-commandResult">
              Do You Know About Terminal?
            </p>
            <div className="flex gap-2">
              <button
                className="w-16 h-8 bg-success rounded-md text-black"
                onClick={() => onNewSubmit("y")}
              >
                Yes
              </button>
              <button
                className="w-16 h-8 bg-error rounded-md text-black"
                onClick={() => onNewSubmit("n")}
              >
                No
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          {Ctx.closed && (
            <div
              className="text-color3 absolute bottom-[5rem] left-[50%]"
              style={{
                transform: "translateX(-50%)",
              }}
            >
              <p className="font-bold text-3xl shadow-2xl">Click Me</p>
            </div>
          )}
          <div
            className="bg-color1  rounded-2xl shadow-sm shadow-color3 terminal-Container border-[0.1rem] border-color3 fixed "
            style={{
              maxWidth: Ctx.maximized ? "100%" : "60rem",
              maxHeight: Ctx.maximized ? "100%" : "40rem",
              width: !Ctx.closed ? "96vw" : "3rem",
              height: !Ctx.closed ? "96vh" : "3rem",
              bottom: Ctx.closed ? "1rem" : "unset",
              top: Ctx.closed
                ? "unset"
                : Ctx.maximized
                ? `50%`
                : `calc(${position.y}px + 50%)`,
              transform: Ctx.closed
                ? "translateX(-50%)"
                : "translate(-50%,-50%)",
              zIndex: Ctx.closed ? 100 : 0,
              left: Ctx.closed
                ? "50%"
                : Ctx.maximized
                ? "50%"
                : `calc(${position.x}px + 50%)`,
              // top: position.y,
              cursor: isDragging ? "grabbing" : "grab",
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
              <div
                className="w-full h-full flex flex-col"
                onClick={() => {
                  // if inputRef.current.
                  inputRef.current?.focus();
                }}
              >
                <Head
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                />
                <Body inputRef={inputRef} />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
