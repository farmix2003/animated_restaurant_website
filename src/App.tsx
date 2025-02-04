import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/login/Login";

const App = () => {
  return (
    <div className="overflow-x-hidden bg-[#03002e] box">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
