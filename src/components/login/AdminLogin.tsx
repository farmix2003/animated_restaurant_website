import { motion } from "framer-motion";
import { useState } from "react";
import { CgUser } from "react-icons/cg";

const AdminLogin = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full max-w-sm mx-auto">
      <motion.div
        className="cursor-pointer p-5 bg-white/10 rounded-lg hover:bg-white/20 transition flex items-center"
        onClick={() => setIsOpen(!isOpen)}
        animate={{
          flexDirection: isOpen ? "row" : "column",
          alignItems: isOpen ? "center" : "center",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <h1 className="text-3xl text-white">Admin?</h1>
        <motion.div
          animate={{
            fontSize: isOpen ? "2rem" : "5rem",
          }}
          transition={{ duration: 0.3 }}
        >
          <CgUser className="text-amber-500" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <form className="flex flex-col space-y-5 p-5 bg-white/10 rounded-lg mt-3">
          <label htmlFor="username" className="text-white">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="p-2 rounded-lg outline-none border-b-2 text-white border-white"
          />
          <label htmlFor="password" className="text-white">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="p-2 rounded-lg outline-none  border-b-2 text-white border-white"
          />
          <button
            type="submit"
            className="bg-amber-500 text-white p-2 rounded-lg cursor-pointer"
          >
            Login
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
