import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Dashboard from "../Components/Dashboard";
const RouteMain = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default RouteMain;
