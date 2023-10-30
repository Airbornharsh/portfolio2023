import Head from "../components/terminal/Head";

const Home = () => {
  return (
    <div className="w-screen h-screen bg-color1 flex justify-center items-center">
      <div className="w-[96vw] max-w-[60rem] bg-color1 h-[96vh] max-h-[40rem] rounded-2xl shadow-sm shadow-color3 terminal-Container border-[0.2rem] border-color3 overflow-hidden">
        <Head/>

      </div>
    </div>
  );
};

export default Home;
