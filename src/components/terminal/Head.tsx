const Head = () => {
  const handleMinimize = () => {
    console.log("Minimize");
  };

  const handleMaximize = () => {
    console.log("Maximize");
  };

  const handleClose = () => {
    console.log("Close");
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
