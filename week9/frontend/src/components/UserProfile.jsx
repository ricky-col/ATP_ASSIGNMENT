import { useAuth } from "../store/authstate";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useEffect, useState } from "react";

import {
  articleGrid,
  articleCardClass,
  articleTitle,
  articleBody,
  ghostBtn,
  loadingClass,
  errorClass,
  timestampClass,
} from "../styles/common.js";

function UserProfile() {
  const logout = useAuth((state) => state.logout);
  const currentUser = useAuth((state) => state.currentUser);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/user-api/articles`, { withCredentials: true });
        setArticles(res.data.payload);
      } catch (err) {
        setError(err.response?.data?.message || err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    getArticles();
  }, []);

  // convert UTC → IST
  const formatDateIST = (date) => {
    return new Date(date).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  const onLogout = async () => {
    await logout();
    toast.success("Logged out successfully");
    navigate("/login");
  };

  const navigateToArticleByID = (articleObj) => {
    navigate(`/article/${articleObj._id}`, {
      state: articleObj,
    });
  };

  if (loading) {
    return <p className={loadingClass}>Loading articles...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {error && <p className={errorClass + " mb-6"}>{error}</p>}

      <div className="flex justify-between items-center mb-12 bg-[#f5f5f7] p-8 rounded-3xl">
        <div className="flex items-center gap-6">
            <img 
                src={currentUser?.profileImageUrl || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"} 
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-sm" 
                alt="Profile" 
            />
            <div>
                <h1 className="text-3xl font-bold text-[#1d1d1f]">Hello, {currentUser?.firstName || 'User'}</h1>
                <p className="text-[#6e6e73] font-medium">{currentUser?.email}</p>
            </div>
        </div>
        <button 
            className="bg-[#0066cc] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#004499] transition-all shadow-md active:scale-95" 
            onClick={onLogout}
        >
          Logout
        </button>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#1d1d1f] tracking-tight mb-2">Latest Stories</h2>
        <p className="text-[#6e6e73]">Explore the latest articles from our community.</p>
      </div>

      {articles.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
              <p className="text-gray-400">No articles found yet.</p>
          </div>
      ) : (
          <div className={articleGrid}>
            {articles.map((articleObj) => (
              <div className={articleCardClass} key={articleObj._id}>
                <div className="flex flex-col h-full">
                  {/* Top Content */}
                  <div className="mb-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#0066cc] bg-[#0066cc]/5 px-2 py-1 rounded mb-3 inline-block">
                        {articleObj.category}
                    </span>
                    <h3 className={articleTitle + " line-clamp-2 mb-2"}>{articleObj.title}</h3>
                    <p className="text-sm text-[#6e6e73] line-clamp-3 mb-4">{articleObj.content}</p>
                    <p className={timestampClass}>{formatDateIST(articleObj.createdAt)}</p>
                  </div>

                  {/* Button at bottom */}
                  <button 
                    className={`${ghostBtn} mt-auto w-full text-left font-semibold group flex items-center gap-1`} 
                    onClick={() => navigateToArticleByID(articleObj)}
                  >
                    Read Story <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
      )}
    </div>
  );
}

export default UserProfile;
