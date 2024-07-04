import { useState } from "react";
import { ProfileStats } from "../../Types/profileStats";
import FollowButton from "../Button/FollowButton";

function PeopleComponent() {
  const [userDetails, setUserDetails] = useState<ProfileStats[]>([
    {
      id: 0,
      name: "Chidinma Elekwachi",
      pronouns: "She/her",
      role: "Future Start up Owner",
      description: "Default description",
      timestamp: "1h",
      message:
        "I am a Software engineer that enjoys learning and good foods too, I want a soft life too :)",
      imageUrl: "https://via.placeholder.com/150",
      profileViewers: 14,
      postImpressions: 37,
      savedItems: 6,
    },
  ]);
  return (
    <div>
      {userDetails.map((person, key) => (
        <div
          className="bg-white p-6 rounded-lg shadow-md mb-4 w-full"
          key={key}>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                className="h-10 w-10 rounded-full mr-4"
                src={person.imageUrl}
                alt={person.name}
              />
              <div>
                <h2 className="text-lg font-bold">{person.name}</h2>
                <p className="text-sm text-gray-500">
                  {person.pronouns} • {person.role}
                </p>
              </div>
            </div>
            <FollowButton />
          </div>
          <p className="mt-2 text-gray-700">{person.description}</p>
          <div className="mt-2 text-sm text-gray-500">
            <span>{person.timestamp}</span> • <span>Edited</span>
          </div>
          <div className="mt-4 text-gray-700">{person.message}</div>
        </div>
      ))}
    </div>
  );
}

export default PeopleComponent;
