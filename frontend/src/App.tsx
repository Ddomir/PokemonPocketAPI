import "./styles/index.css";
import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SearchPage from "./pages/Search";

function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-50">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
