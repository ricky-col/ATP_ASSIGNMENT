import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const categories = ['Technology', 'Science', 'Culture', 'Health', 'Business', 'Travel'];

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Hero Banner */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Ideas worth reading.
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto mb-8">
            Discover articles written by passionate authors across every topic. 
            Sign in to start reading or share your own stories.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => navigate('/register')}
              className="px-6 py-3 bg-gray-900 text-white rounded-full font-medium text-sm hover:bg-gray-700 transition-colors"
            >
              Get Started — It's Free
            </button>
            <button
              onClick={() => navigate('/login')}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>

      {/* Browse by Category */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-5">Browse Topics</h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <span
              key={cat}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium cursor-pointer hover:bg-gray-200 transition-colors"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* Placeholder article teasers */}
      <div className="max-w-5xl mx-auto px-4 pb-20">
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">Trending on ATP Blog</h2>
        <div className="divide-y divide-gray-100">
          {[
            { title: 'How to build scalable REST APIs with Node.js & Express', author: 'Revanth Y.', category: 'Technology', time: '5 min read' },
            { title: 'The art of writing: tips every beginner author should know', author: 'Anurag S.', category: 'Culture', time: '3 min read' },
            { title: 'Why MongoDB is the right choice for your next startup', author: 'Kavya P.', category: 'Business', time: '4 min read' },
          ].map((article, i) => (
            <div key={i} className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 group cursor-pointer" onClick={() => navigate('/login')}>
              <div>
                <p className="text-xs font-semibold text-indigo-500 uppercase tracking-wide mb-1">{article.category}</p>
                <h3 className="text-base font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-400 mt-1">By {article.author}</p>
              </div>
              <span className="shrink-0 text-xs text-gray-400 bg-gray-100 px-3 py-1.5 rounded-full">{article.time}</span>
            </div>
          ))}
        </div>
        <button onClick={() => navigate('/login')} className="mt-6 text-sm text-indigo-600 hover:underline font-medium">
          Sign in to read more →
        </button>
      </div>

    </div>
  );
}

export default Home;