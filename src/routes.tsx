import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const RoutesContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default RoutesContainer;
