import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/authstate';
import axios from 'axios';
import toast from 'react-hot-toast';

function MyArticles() {
  const { currentUser } = useAuth();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingArticle, setEditingArticle] = useState(null);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/author-api/articles/${currentUser._id}`, { withCredentials: true });
      setArticles(res.data.payload);
    } catch (err) {
      console.error("Error fetching articles:", err);
      toast.error(err.response?.data?.message || "Failed to fetch articles");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (articleId) => {
    if (!window.confirm("Are you sure you want to delete this article?")) return;
    try {
      await axios.patch(`${import.meta.env.VITE_API_URL}/author-api/articles/${articleId}`, { isArticleActive: false }, { withCredentials: true });
      toast.success("Article deleted successfully");
      fetchArticles(); // Refresh list
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to delete article");
    }
  };

  const handleEdit = (article) => {
    setEditingArticle({ ...article });
  };

  const cancelEdit = () => {
    setEditingArticle(null);
  };

  const saveEdit = async () => {
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/author-api/articles`, editingArticle, { withCredentials: true });
      toast.success("Article updated successfully");
      setEditingArticle(null);
      fetchArticles();
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to update article");
    }
  };

  useEffect(() => {
    if (currentUser?._id) {
      fetchArticles();
    }
  }, [currentUser]);

  if (loading) return <div className="text-center p-10">Loading articles...</div>;

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">My Articles</h2>
      {articles.length === 0 ? (
        <p className="text-gray-500 italic">You haven't published any articles yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div key={article._id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              {editingArticle?._id === article._id ? (
                /* Edit Mode */
                <div className="space-y-4">
                  <input 
                    type="text" 
                    value={editingArticle.title}
                    onChange={(e) => setEditingArticle({...editingArticle, title: e.target.value})}
                    className="w-full p-2 border rounded"
                  />
                  <select 
                    value={editingArticle.category}
                    onChange={(e) => setEditingArticle({...editingArticle, category: e.target.value})}
                    className="w-full p-2 border rounded"
                  >
                    <option value="Science">Science</option>
                    <option value="Programming">Programming</option>
                    <option value="Maths">Maths</option>
                    <option value="Lifestyle">Lifestyle</option>
                    <option value="Other">Other</option>
                  </select>
                  <textarea 
                    value={editingArticle.content}
                    onChange={(e) => setEditingArticle({...editingArticle, content: e.target.value})}
                    rows="4"
                    className="w-full p-2 border rounded"
                  ></textarea>
                  <div className="flex gap-2">
                    <button onClick={saveEdit} className="bg-green-500 text-white px-3 py-1 rounded text-sm">Save</button>
                    <button onClick={cancelEdit} className="bg-gray-500 text-white px-3 py-1 rounded text-sm">Cancel</button>
                  </div>
                </div>
              ) : (
                /* View Mode */
                <div className="flex flex-col h-full">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full mb-3 w-fit">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{article.title}</h3>
                  <p className="text-gray-600 line-clamp-3 mb-4">{article.content}</p>
                  <div className="flex justify-between items-center text-sm text-gray-400 mt-auto">
                    <span>{new Date(article.createdAt).toLocaleDateString()}</span>
                    <div className="flex gap-2">
                      <button onClick={() => handleEdit(article)} className="text-blue-500 hover:underline">Edit</button>
                      <button onClick={() => handleDelete(article._id)} className="text-red-500 hover:underline">Delete</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyArticles;
