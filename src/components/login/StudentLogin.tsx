import { useState } from "react";
import { CgUser } from "react-icons/cg";
import { motion } from "framer-motion";

const StudentLogin = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* Clickable Header */}
      <motion.div
        className={`cursor-pointer p-4 bg-white/10 rounded-lg hover:bg-white/20 transition flex items-center ${
          isOpen ? "flex-row space-x-3" : "flex-col space-y-2"
        }`}
        onClick={() => setIsOpen(!isOpen)}
        animate={{
          flexDirection: isOpen ? "row" : "column",
          alignItems: isOpen ? "center" : "center",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <h1 className="text-3xl text-white">Student?</h1>

        {/* Animated Icon */}
        <motion.div
          animate={{
            fontSize: isOpen ? "2rem" : "5rem",
          }}
          transition={{ duration: 0.3 }}
        >
          <CgUser className="text-amber-500" />
        </motion.div>
      </motion.div>

      {/* Animated Form */}
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
            className="p-2 rounded-lg outline-none border-b-2 border-white text-white"
          />
          <label htmlFor="phone" className="text-white">
            Phone Number
          </label>
          <input
            type="number"
            id="phone"
            className="p-2 rounded-lg outline-none border-b-2 border-white text-white"
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

export default StudentLogin;
