import "./App.scss";
import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/:id" element={<MainPage />} />
      {/*<Route path="*" element={<MainPage />} />*/}
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default App;
