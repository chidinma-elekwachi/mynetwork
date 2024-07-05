import TurnedInIcon from "@mui/icons-material/TurnedIn";
import { useState } from "react";
import { ProfileStats } from '../../Types/profileStats';

function userProfileStats() {
  const [feedId, setFeedId] = useState<ProfileStats[]>([
    {
      imageUrl: "https://via.placeholder.com/40",
      name: "Chidinma Elekwachi",
      pronouns: "She/Her",
      role: "Software Engineer & Technical Writer",
      description: "I've crafted 100's of copies and scripts for brands",
      profileViewers: 14,
      postImpressions: 37,
      savedItems: 6,
      id: 0,
      timestamp: "",
      message: ""
    },
    
  ]);

  return (
    <div>
      {feedId.map((feed, index) => (
        <div className="border rounded-[0.8rem] bg-white" key={index}>
          <div>
            <div>
              <img
                className="h-10 w-10 rounded-full my-4 relative left-20"
                src={feed.imageUrl}
                alt={feed.name}
              />
            </div>
            <div className="font-semibold leading-[1.5] text-center">
              Welcome, {feed.name} !
            </div>
            <div className="text-center text-[#0a66c2] hover:underline cursor-pointer text-xs mt-1">
              Add a Photo
            </div>
          </div>
          <div className="mt-3 border-y hover:bg-[#0000001a]">
            <div className="my-3 mx-2 text-sm">
              <div className="flex items-center justify-between">
                <div>Profile viewers </div>
                <div className="text-customGreen px-2">
                  {feed.profileViewers}
                </div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div>Post impressions</div>
                <div className="text-customGreen px-2">
                  {feed.postImpressions}
                </div>
              </div>
            </div>
          </div>
          <div className="hover:bg-[#0000001a] rounded-b-[0.75rem] py-3">
            <div className="flex items-center gap-2 mx-2">
              <div>
                <TurnedInIcon color="action" />
              </div>
              <div className="text-xs font-semibold">Saved items</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default userProfileStats;
