import AdminLogin from "./AdminLogin";
import StudentLogin from "./StudentLogin";

const Login = () => {
  return (
    <div className="login-box bg-white/15 rounded-3xl h-110 w-250 shadow-amber-500 m-auto mt-10 flex justify-around items-center">
      <div className="">
        <AdminLogin />
      </div>
      <div className="">
        <StudentLogin />
      </div>
    </div>
  );
};

export default Login;
