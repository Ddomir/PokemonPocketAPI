import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      const res = await fetch("http://localhost:4000/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // include cookies
      });
      if (res.ok) {
        navigate("/");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  }

  return (
    <nav className="w-full h-16 bg-white shadow flex items-center px-4">
      <h1 className="text-xl font-bold flex-grow">My App</h1>
      <div className="px-4">
        <button
          className="px-4 py-2 rounded text-black hover:bg-gray-100 transition ease-in-out duration-200"
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </button>
        <button
          className="px-4 py-2 rounded text-black hover:bg-gray-100 transition ease-in-out duration-200"
          onClick={() => navigate("/search")}
        >
          Search
        </button>
      </div>
      <button
        className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-700 transition ease-in-out duration-200"
        onClick={handleLogout}
      >
        Logout
      </button>
    </nav>
  );
}
