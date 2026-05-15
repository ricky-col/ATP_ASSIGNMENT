import React from 'react'
import { useLocation, useNavigate } from 'react-router'
import { pageBackground, pageWrapper, pageTitleClass, bodyText, timestampClass, tagClass, ghostBtn } from '../styles/common'

function ArticleDetail() {
  const { state: article } = useLocation()
  const navigate = useNavigate()

  if (!article) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <p className="text-gray-500 mb-4">Article data not found.</p>
            <button className={ghostBtn} onClick={() => navigate(-1)}>← Go Back</button>
        </div>
    )
  }

  // convert UTC → IST
  const formatDateIST = (date) => {
    return new Date(date).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "long",
      timeStyle: "short",
    });
  };

  return (
    <div className={pageBackground}>
      <div className={pageWrapper + " max-w-3xl"}>
        <button 
            className="mb-12 text-[#0066cc] hover:text-[#004499] flex items-center gap-1 font-medium transition-colors"
            onClick={() => navigate(-1)}
        >
            ← Back to Feed
        </button>

        <header className="mb-12">
            <span className={tagClass + " mb-4 inline-block"}>{article.category}</span>
            <h1 className={pageTitleClass + " text-4xl sm:text-5xl mb-6"}>{article.title}</h1>
            <div className="flex items-center gap-3 text-[#6e6e73]">
                <div className="w-8 h-8 rounded-full bg-gray-200 shadow-inner"></div>
                <div>
                   <p className="text-sm font-semibold text-[#1d1d1f]">Guest Author</p>
                   <p className={timestampClass}>{formatDateIST(article.createdAt)}</p>
                </div>
            </div>
        </header>

        <div className={bodyText + " text-lg leading-relaxed whitespace-pre-line border-t border-[#e8e8ed] pt-10"}>
          {article.content}
        </div>
      </div>
    </div>
  )
}

export default ArticleDetail
