import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/login/Login";
import { useEffect, useState } from "react";
import axios from "axios";
import AdminDashboard from "./components/admin_dashboard/AdminDashboard";

const App = () => {
  const [admins, setAdmins] = useState<
    { username: string; password: string }[]
  >([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [questions, setQuestions] = useState<{
    [key: string]: {
      id: number;
      title: string;
      questions: {
        question: string;
        options: string[];
        correctAnswer: string;
      }[];
      createdBy: string;
    }[];
  }>({});

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/admin.json")
      .then((res) => res.json())
      .then((res) => setAdmins(res));
  }, []);

  const loginAdmin = (e: React.FormEvent) => {
    e.preventDefault();

    const admin = admins.find(
      (admin) => admin.username === username && admin.password === password
    );
    if (admin) {
      navigate("/admin/dashboard");
    } else {
      alert("Invalid credentials ❌");
    }
  };

  useEffect(() => {
    const getQuestionByCreator = async () => {
      const questions = await axios.get("/questions.json");
      setQuestions(questions.data);
    };
    getQuestionByCreator();
  });

  return (
    <div className="overflow-x-hidden bg-[#03002e] box">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Login
              username={username}
              password={password}
              loginAdmin={loginAdmin}
              setUsername={setUsername}
              setPassword={setPassword}
            />
          }
        />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route
          path="/admin/dashboard"
          element={<AdminDashboard questions={questions} />}
        />
      </Routes>
    </div>
  );
};

export default App;
