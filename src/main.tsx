import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Helmet from "react-helmet";
import App from "./App.tsx";
import "./index.css";
import { ContextProvider } from "./Context/ContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Helmet>
      <title>Harsh Keshri</title>
    </Helmet>
    <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
  </>
);
