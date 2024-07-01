import { useState } from "react";
import PeopleList from "./PeopleComponent";
import FeedIdentity, { feedIdentity } from "../../FeedIdentity/FeedIdentity";

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
          {/* This is the feed they share */}
          <div className=" ">
            <PeopleList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
