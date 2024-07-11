import React, { useState } from 'react';
import GroupCard from '../../components/GroupCard/GroupCard';

// Define the type for the football group
interface FootballGroup {
  id: number;
  name: string;
  description: string;
  imageUrl?: string;
  postedDate: string;
  longNote: string;
  joined: boolean;
}

// Example data for football groups
const footballGroups: FootballGroup[] = [
  { id: 1, name: "Football Fanatics", description: "A group for passionate football fans to discuss matches, players, and more.", imageUrl: "https://th.bing.com/th/id/R.b37ef0ddfcd864cdc63f3d2ff570094a?rik=Ecm%2bzyr6Tz89lA&riu=http%3a%2f%2fwww.forestwander.com%2fimages%2fBeautiful-pink-flower.JPG&ehk=xPXO7Kst0axaUEozT1IDHDqGznVOWyV19LMQ9IdCF4o%3d&risl=&pid=ImgRaw&r=0", postedDate: "2024-07-10T14:30:00Z", longNote: "Join us for detailed discussions on match tactics, player analysis, and more.", joined: false },
  { id: 2, name: "Local Soccer League", description: "Join our local soccer league group to stay updated on games and events in your area.", postedDate: "2024-07-09T09:15:00Z", longNote: "Participate in our weekly games and enjoy community events organized by the league.", joined: false }
];

const Groups = () => {
  const [groups, setGroups] = useState<FootballGroup[]>(footballGroups);

  const handleJoinClick = (id: number) => {
    setGroups(groups.map(group => 
      group.id === id ? { ...group, joined: !group.joined } : group
    ));
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-1xl mb-4 text-center">Recent Activities</h1>
      <div className="grid grid-cols-1 gap-5 justify-center">
        {groups.map(group => (
          <GroupCard key={group.id} group={group} onJoinClick={handleJoinClick} />
        ))}
      </div>
    </div>
  );
}

export default Groups;
