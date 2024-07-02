import { useState } from "react";
import FeedIdentity, { feedIdentity } from "../../components/FeedIdentity/FeedIdentity";
import PeopleList from "../../components/Pages/Home/PeopleComponent";


function Home() {
  const [feedId, setFeedId] = useState<feedIdentity[]>([
    {
      imageUrl: "https://via.placeholder.com/40",
      name: "Chidinma Elekwachi",
      pronouns: "She/Her",
      role: "Software Engineer & Technical Writer",
      description: "I've crafted 100's of copies and scripts for brands",
      profileViewers: 14,
      postImpressions: 37,
      savedItems: 6,
    },
  ]);
  
  // LinkedInPostSection
  const LinkedInPostSection = () => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md mb-4 w-full">
        <div className="flex items-center mb-4">
          <img 
            className="h-10 w-10 rounded-full mr-4" 
            src="https://via.placeholder.com/40" 
            alt="Profile" 
          />
          <input 
            type="text" 
            className="flex-grow p-2 border border-gray-300 rounded-3xl" 
            placeholder="Start a post, try writing with AI" 
          />
        </div>
        <div className="flex justify-around text-center">
          <button className="flex items-center p-1 rounded-md hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 mr-2 text-customGreen" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 7a5 5 0 1 1-10 0 5 5 0 0 1 10 0zm2 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0zm5 9h-3v4h-2v-4h-2v-2h2v-4h2v4h3v2z" />
            </svg>
            Media
          </button>
          <button className="flex items-center p-1 text-gray-600 rounded-md hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 mr-2 text-orange-600" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M19 3h-1.82c-.4-1.16-1.52-2-2.88-2s-2.48.84-2.88 2H9c-.55 0-1 .45-1 1v18c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zm-7 0h4c.46 0 .87.31.96.75l.24.75H11.8l.24-.75c.09-.44.5-.75.96-.75zM9 19h6v2H9v-2z" />
            </svg>
            Event
          </button>
          <button className="flex items-center p-1 text-gray-600 rounded-md hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 mr-2 text-red-700" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M15 3h-1V1h-4v2H9c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H9V7h6v14zm-4-4h2v-6h-2v6z" />
            </svg>
            Write article
          </button>
        </div>
      </div>
    );
  };

  // for the fourth section which includes news relating to players, idk tho
  const newsArticles = [
    {
      title: "Star Player Signs New Contract",
      time: "12h ago",
      readers: "7,000 readers"
    },
    {
      title: "Top Player Transfers to Major Club",
      time: "5h ago",
      readers: "376 readers"
    },
    {
      title: "Player Achieves Historic Milestone",
      time: "12h ago",
      readers: "4,155 readers"
    },
    {
      title: "Young Talent Shines in Recent Match",
      time: "12h ago",
      readers: "3,489 readers"
    },
    {
      title: "Player Wins Prestigious Award",
      time: "12h ago",
      readers: "2,074 readers"
    }
  ];
  
  const NetworkingNewsSection = () => {
    return (
      <div className="p-4 w-full max-w-md bg-white rounded-lg shadow-md mb-4">
        <h2 className="text-lg font-bold">Networking News</h2>
        <h2 className="text-base text-gray-500">Player News</h2>
        <div className="mt-4">
          <h3 className="text-md font-semibold text-customGreen">Top stories</h3>
          {newsArticles.map((article, index) => (
            <div key={index} className="mt-2 hover:bg-gray-100 px-2">
              <h4 className="text-sm font-bold">{article.title}</h4>
              <p className="text-xs text-gray-500">{article.time} • {article.readers}</p>
            </div>
          ))}
        </div>
        <button className="mt-4 text-blue-600 hover:underline">Show more</button>
      </div>
    );
  };
  
  
  return (
    <div className="mx-40 my-5">
      <div className="md:flex gap-20">
        {/* First section- 1/3: feedIdentity */}
        <div className="md:w-1/5 hidden md:block">
          {feedId.map((f, i) => (
            <div key={i}>
              <FeedIdentity
                imageUrl={f.imageUrl}
                name={f.name}
                pronouns={f.pronouns}
                role={f.role}
                description={f.description}
                profileViewers={f.profileViewers}
                postImpressions={f.postImpressions}
                savedItems={f.savedItems}
              />
            </div>
          ))}
        </div>

        <div className="w-full md:w-2/5">
          <LinkedInPostSection />
          <div className=" ">
            <PeopleList />
          </div>
        </div>
        <div className="hidden md:block">
            <NetworkingNewsSection />
        </div>
      </div>
    </div>
  );
}

export default Home;
