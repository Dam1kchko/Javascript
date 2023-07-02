import { React, ReactDOM } from "./utils/reactUtils";
import { HashRouter, Route, Routes } from "react-router-dom";
import useFillStore from "./hooks/useFillStore";
import MainPage from "./pages/MainPage";
import DetailsPage from "./pages/DetailsPage";

let App = () => {
  useFillStore();

  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/:id" element={<DetailsPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
