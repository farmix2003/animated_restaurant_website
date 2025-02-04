import Logo from "../constants/logo";

const Navbar = () => {
  return (
    <nav className="text-white w-full text-2xl py-4 bg-white/10 rounded-b-md p-3 flex justify-between">
      <div>
        <Logo />
      </div>
      <h1>NavbarContent</h1>
    </nav>
  );
};

export default Navbar;
