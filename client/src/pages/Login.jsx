import { useState } from "react";
import API from "../services/authService";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post("/login", formData);

      localStorage.setItem("token", response.data.token);

      alert(response.data.message);

      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);

      alert(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-8 rounded-2xl w-[400px] space-y-4"
      >
        <h1 className="text-3xl font-bold text-center">
          Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-zinc-800 outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-zinc-800 outline-none"
        />

        <button
          type="submit"
          className="w-full bg-white text-black py-3 rounded-lg font-bold hover:opacity-80 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;