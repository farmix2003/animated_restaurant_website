import AdminLogin from "./AdminLogin";
import StudentLogin from "./StudentLogin";

export type AdminLoginProps = {
  username: string;
  password: string;
  setUsername: (value: string) => void;
  setPassword: (value: string) => void;
  loginAdmin: (e: React.FormEvent) => void;
};
const Login = ({
  username,
  password,
  setPassword,
  setUsername,
  loginAdmin,
}: AdminLoginProps) => {
  return (
    <div className="login-box bg-white/15 rounded-3xl h-110 w-250 shadow-amber-500 m-auto mt-10 flex justify-around items-center">
      <div className="">
        <AdminLogin
          username={username}
          password={password}
          loginAdmin={loginAdmin}
          setUsername={setUsername}
          setPassword={setPassword}
        />
      </div>
      <div className="">
        <StudentLogin />
      </div>
    </div>
  );
};

export default Login;
