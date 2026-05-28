import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <nav className="bg-zinc-900 text-white px-8 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold">
        DevConnect AI 🚀
      </h1>

      <div className="flex items-center gap-6">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>

        <button
          onClick={handleLogout}
          className="bg-white text-black px-4 py-2 rounded-lg font-semibold"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;