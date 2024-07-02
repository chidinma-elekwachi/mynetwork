import React, { useState } from "react";
import { newsArticle } from "../../Types/newsArticle";

function NetworkingNewsSection() {
  const [newsArticles, setNewsArticles] = useState<newsArticle[]>([
    {
      title: "Star Player Signs New Contract",
      time: "12h ago",
      readers: "7,000 readers",
    },
    {
      title: "Top Player Transfers to Major Club",
      time: "5h ago",
      readers: "376 readers",
    },
    {
      title: "Player Achieves Historic Milestone",
      time: "12h ago",
      readers: "4,155 readers",
    },
    {
      title: "Young Talent Shines in Recent Match",
      time: "12h ago",
      readers: "3,489 readers",
    },
    {
      title: "Player Wins Prestigious Award",
      time: "12h ago",
      readers: "2,074 readers",
    },
  ]);
  return (
    <div className="p-4 w-full max-w-md bg-white rounded-lg shadow-md mb-4">
      <h2 className="text-lg font-bold">Networking News</h2>
      <h2 className="text-base text-gray-500">Player News</h2>
      <div className="mt-4">
        <h3 className="text-md font-semibold text-customGreen">Top stories</h3>
        {newsArticles.map((article, index) => (
          <div key={index} className="mt-2 hover:bg-gray-100 px-2">
            <h4 className="text-sm font-bold">{article.title}</h4>
            <p className="text-xs text-gray-500">
              {article.time} • {article.readers}
            </p>
          </div>
        ))}
      </div>
      <button className="mt-4 text-blue-600 hover:underline">Show more</button>
    </div>
  );
}

export default NetworkingNewsSection;
