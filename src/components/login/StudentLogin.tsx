const StudentLogin = () => {
  return (
    <div>
      <form className="flex flex-col space-y-5 p-5 bg-white/10 rounded-lg">
        <label htmlFor="username" className="text-white">
          Username
        </label>
        <input type="text" id="username" className="p-2 rounded-lg" />
        <label htmlFor="password" className="text-white">
          Password
        </label>
        <input type="password" id="password" className="p-2 rounded-lg" />
        <button
          type="submit"
          className="bg-amber-500 text-white p-2 rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default StudentLogin;
