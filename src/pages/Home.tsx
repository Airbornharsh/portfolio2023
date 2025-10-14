import { useRef } from "react";
import Head from "../components/terminal/Head";
import Body from "../components/terminal/Body";

const Home = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleTerminalClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    // Check if the click is on the input field itself
    if (target === inputRef.current || inputRef.current?.contains(target)) {
      // If clicking on input, keep it focused
      return;
    }

    // Check if input is currently focused
    const isInputFocused = document.activeElement === inputRef.current;

    if (isInputFocused) {
      // If input is focused and clicking elsewhere, remove focus
      inputRef.current?.blur();
    } else {
      // If input is not focused, focus it
      inputRef.current?.focus();
    }
  };

  return (
    <div className="w-screen h-screen bg-color1 font-trLarabie">
      <div
        className="bg-color1 terminal-Container border-[0.1rem] border-color3 w-full h-full flex flex-col"
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <div
          className="w-full h-full flex flex-col"
          onClick={handleTerminalClick}
        >
          <Head />
          <Body inputRef={inputRef} />
        </div>
      </div>
    </div>
  );
};

export default Home;
