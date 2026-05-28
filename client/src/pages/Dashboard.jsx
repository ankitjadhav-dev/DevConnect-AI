import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
<div className="p-10">
  <h1 className="text-4xl font-bold">
    Welcome to Dashboard 🚀
  </h1>

  <p className="text-zinc-400 mt-4">
    Connect, collaborate, and grow with developers.
  </p>

  <div className="grid md:grid-cols-3 gap-6 mt-10">
    <div className="bg-zinc-900 p-6 rounded-2xl">
      <h2 className="text-2xl font-bold">
        Profile
      </h2>

      <p className="text-zinc-400 mt-2">
        Manage your developer profile.
      </p>
    </div>

    <div className="bg-zinc-900 p-6 rounded-2xl">
      <h2 className="text-2xl font-bold">
        Community
      </h2>

      <p className="text-zinc-400 mt-2">
        Connect with developers worldwide.
      </p>
    </div>

    <div className="bg-zinc-900 p-6 rounded-2xl">
      <h2 className="text-2xl font-bold">
        AI Tools
      </h2>

      <p className="text-zinc-400 mt-2">
        AI-powered career growth features.
      </p>
    </div>
  </div>
</div>
    </div>
  );
}

export default Dashboard;