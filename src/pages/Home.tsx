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

  return (
    <div className="w-screen h-screen bg-color1 overflow-hidden">
      <div
        className="bg-color1  rounded-2xl shadow-sm shadow-color3 terminal-Container border-[0.2rem] border-color3 overflow-hidden fixed "
        style={{
          maxWidth: Ctx.maximized ? "100%" : "60rem",
          maxHeight: Ctx.maximized ? "100%" : "40rem",
          transition: "all 0.2s ease-in-out",
          width: !Ctx.closed ? "96vw" : "3rem",
          height: !Ctx.closed ? "96vh" : "3rem",
          bottom: Ctx.closed ? "1rem" : "unset",
          top: Ctx.closed ? "unset" : `calc(${position.y}px + 50%)`,
          transform: Ctx.closed ? "translateX(-50%)" : "translate(-50%,-50%)",
          zIndex: Ctx.closed ? 100 : 0,
          left: Ctx.closed ? "50%" : `calc(${position.x}px + 50%)`,
          // top: position.y,
          cursor: isDragging ? "grabbing" : "grab",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
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
            <Head />
            <Body inputRef={inputRef} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
