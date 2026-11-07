
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  Clock,
  Phone,
  CheckCircle,
  LogOut,
  RefreshCw,
  Search,
  Trash2,
  Mail,
  MessageCircle,
  Calendar,
  ExternalLink,
} from "lucide-react";

const API_URL = "https://amipoo-web.onrender.com/api/admin";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    total: 0,
    new: 0,
    contacted: 0,
    completed: 0,
  });

  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const adminUser = JSON.parse(
    localStorage.getItem("adminUser") || "{}"
  );

  const getHeaders = () => ({
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
  });

  const logout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    navigate("/admin", { replace: true });
  };

  const fetchDashboard = async () => {
    try {
      setLoading(true);
      setError("");

      const [statsResponse, inquiriesResponse] = await Promise.all([
        fetch(`${API_URL}/dashboard`, {
          headers: getHeaders(),
        }),
        fetch(`${API_URL}/inquiries`, {
          headers: getHeaders(),
        }),
      ]);

      if (
        statsResponse.status === 401 ||
        inquiriesResponse.status === 401
      ) {
        logout();
        return;
      }

      const statsData = await statsResponse.json();
      const inquiriesData = await inquiriesResponse.json();

      if (!statsResponse.ok || !statsData.success) {
        throw new Error(statsData.message || "Unable to load statistics.");
      }

      if (!inquiriesResponse.ok || !inquiriesData.success) {
        throw new Error(inquiriesData.message || "Unable to load inquiries.");
      }

      setStats(statsData.stats);
      setInquiries(inquiriesData.inquiries || []);
    } catch (err) {
      setError(err.message || "Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      const response = await fetch(`${API_URL}/inquiries/${id}`, {
        method: "PATCH",
        headers: getHeaders(),
        body: JSON.stringify({ status }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Status update failed.");
      }

      await fetchDashboard();
    } catch (err) {
      setError(err.message);
    }
  };

  const deleteInquiry = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this inquiry?"
    );

    if (!confirmed) return;

    try {
      const response = await fetch(`${API_URL}/inquiries/${id}`, {
        method: "DELETE",
        headers: getHeaders(),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Delete failed.");
      }

      await fetchDashboard();
    } catch (err) {
      setError(err.message);
    }
  };

  const filteredInquiries = inquiries.filter((item) => {
    const matchesFilter =
      filter === "All" || item.status === filter;

    const term = search.toLowerCase();

    const matchesSearch =
      item.name?.toLowerCase().includes(term) ||
      item.email?.toLowerCase().includes(term) ||
      item.phone?.includes(term) ||
      item.service?.toLowerCase().includes(term);

    return matchesFilter && matchesSearch;
  });

  const statCards = [
    {
      title: "Total Inquiries",
      value: stats.total,
      icon: Users,
      color: "bg-blue-50 text-blue-600",
    },
    {
      title: "New Inquiries",
      value: stats.new,
      icon: Clock,
      color: "bg-amber-50 text-amber-600",
    },
    {
      title: "Contacted",
      value: stats.contacted,
      icon: Phone,
      color: "bg-violet-50 text-violet-600",
    },
    {
      title: "Completed",
      value: stats.completed,
      icon: CheckCircle,
      color: "bg-emerald-50 text-emerald-600",
    },
  ];

  const statusColor = {
    New: "bg-amber-100 text-amber-700",
    Contacted: "bg-blue-100 text-blue-700",
    Completed: "bg-emerald-100 text-emerald-700",
  };

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-64 flex-col bg-slate-950 text-white lg:flex">
        <div className="border-b border-white/10 px-6 py-7">
          <h1 className="text-2xl font-extrabold">
            AMIPOO <span className="text-cyan-400">Web.</span>
          </h1>
          <p className="mt-1 text-xs text-slate-400">
            Administration Panel
          </p>
        </div>

        <nav className="flex-1 space-y-2 px-4 py-8">
          <div className="flex items-center gap-3 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold">
            <LayoutDashboard size={19} />
            Dashboard
          </div>
        </nav>

        <div className="border-t border-white/10 p-5">
          <p className="mb-3 truncate text-sm font-semibold">
            {adminUser.username || "Administrator"}
          </p>
          <button
            onClick={logout}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="min-h-screen lg:ml-64">
        {/* Header */}
        <header className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-5 py-5 sm:px-8">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900">
              Dashboard
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              Manage your client inquiries
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={fetchDashboard}
              disabled={loading}
              className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50"
            >
              <RefreshCw size={16} />
              <span className="hidden sm:inline">Refresh</span>
            </button>

            <button
              onClick={logout}
              className="flex items-center gap-2 rounded-xl bg-slate-950 px-3 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 lg:hidden"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </header>

        <div className="p-5 sm:p-8">
          {/* Welcome */}
          <div className="mb-8">
            <p className="text-sm font-semibold text-blue-600">
              Welcome back, {adminUser.username || "Admin"}
            </p>
            <h1 className="mt-2 text-2xl font-extrabold text-slate-950 sm:text-3xl">
              Your Business Overview
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Track and manage all your website project inquiries.
            </p>
          </div>

          {/* Error */}
          {error && (
            <div
              role="alert"
              className="mb-6 rounded-xl bg-red-50 p-4 text-sm text-red-600"
            >
              {error}
            </div>
          )}

          {/* Statistics */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {statCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-500">
                      {card.title}
                    </p>
                    <div className={`rounded-xl p-3 ${card.color}`}>
                      <Icon size={21} />
                    </div>
                  </div>

                  <h3 className="mt-5 text-3xl font-extrabold text-slate-950">
                    {loading ? "..." : card.value}
                  </h3>
                </motion.div>
              );
            })}
          </div>

          {/* Inquiries */}
          <div className="mt-9 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 p-5 sm:p-6">
              <div className="flex flex-col justify-between gap-4 xl:flex-row xl:items-center">
                <div>
                  <h3 className="text-lg font-extrabold text-slate-950">
                    Client Inquiries
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    View and manage your incoming project requests.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="relative">
                    <Search
                      size={17}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search inquiries..."
                      className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-blue-500 sm:w-56"
                    />
                  </div>

                  <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-blue-500"
                  >
                    <option value="All">All Inquiries</option>
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>
              </div>
            </div>

            {loading ? (
              <div className="p-12 text-center text-sm text-slate-500">
                Loading inquiries...
              </div>
            ) : filteredInquiries.length === 0 ? (
              <div className="p-12 text-center">
                <MessageCircle
                  size={35}
                  className="mx-auto text-slate-300"
                />
                <p className="mt-4 font-bold text-slate-700">
                  No inquiries found
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  New client inquiries will appear here.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full min-w-[950px] text-left">
                  <thead className="bg-slate-50">
                    <tr className="text-xs font-bold uppercase tracking-wide text-slate-500">
                      <th className="px-6 py-4">Client</th>
                      <th className="px-6 py-4">Project</th>
                      <th className="px-6 py-4">Budget</th>
                      <th className="px-6 py-4">Date</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">Actions</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">
                    {filteredInquiries.map((item) => (
                      <tr key={item._id} className="hover:bg-slate-50">
                        <td className="px-6 py-5">
                          <p className="font-bold text-slate-900">
                            {item.name}
                          </p>
                          <a
                            href={`mailto:${item.email}`}
                            className="mt-1 flex items-center gap-1 text-xs text-slate-500 hover:text-blue-600"
                          >
                            <Mail size={13} />
                            {item.email}
                          </a>
                          <a
                            href={`tel:${item.phone}`}
                            className="mt-1 block text-xs text-slate-500 hover:text-blue-600"
                          >
                            {item.phone}
                          </a>
                        </td>

                        <td className="px-6 py-5">
                          <p className="text-sm font-semibold text-slate-800">
                            {item.service}
                          </p>
                          <p className="mt-1 max-w-xs truncate text-xs text-slate-500">
                            {item.message}
                          </p>
                        </td>

                        <td className="px-6 py-5 text-sm text-slate-600">
                          {item.budget || "Not specified"}
                        </td>

                        <td className="px-6 py-5 text-xs text-slate-500">
                          <span className="flex items-center gap-1">
                            <Calendar size={13} />
                            {new Date(item.createdAt).toLocaleDateString("en-IN")}
                          </span>
                        </td>

                        <td className="px-6 py-5">
                          <span
                            className={`rounded-full px-3 py-1.5 text-xs font-bold ${
                              statusColor[item.status] ||
                              "bg-slate-100 text-slate-600"
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>

                        <td className="px-6 py-5">
                          <div className="flex items-center gap-2">
                            <select
                              value={item.status}
                              onChange={(e) =>
                                updateStatus(item._id, e.target.value)
                              }
                              className="max-w-32 rounded-lg border border-slate-200 bg-white px-2 py-2 text-xs outline-none"
                              aria-label={`Update status for ${item.name}`}
                            >
                              <option value="New">New</option>
                              <option value="Contacted">Contacted</option>
                              <option value="Completed">Completed</option>
                            </select>

                            <a
                              href={`https://wa.me/${String(item.phone).replace(/\D/g, "")}?text=${encodeURIComponent(
                                `Hello ${item.name}, regarding your ${item.service} inquiry to AMIPOO Web.`
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Contact on WhatsApp"
                              className="rounded-lg bg-emerald-50 p-2 text-emerald-600 hover:bg-emerald-100"
                            >
                              <MessageCircle size={17} />
                            </a>

                            <button
                              onClick={() => deleteInquiry(item._id)}
                              title="Delete inquiry"
                              className="rounded-lg bg-red-50 p-2 text-red-600 hover:bg-red-100"
                            >
                              <Trash2 size={17} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <div className="border-t border-slate-100 px-5 py-4 text-xs text-slate-500">
              Showing {filteredInquiries.length} of {inquiries.length} inquiries
            </div>
          </div>

          <footer className="mt-8 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} AMIPOO Web. Your Vision, Our Creation.
          </footer>
        </div>
      </main>
    </div>
  );
}
