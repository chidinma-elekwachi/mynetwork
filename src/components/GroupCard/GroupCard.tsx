import React from 'react';

interface FootballGroup {
  id: number;
  name: string;
  description: string;
  imageUrl?: string;
  postedDate: string;
  longNote: string;
  joined: boolean;
}

interface GroupCardProps {
  group: FootballGroup;
  onJoinClick: (id: number) => void;
}

function formatDateTime(dateTime: string): string {
  const date = new Date(dateTime);
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', hour: 'numeric', minute: 'numeric' };
  return date.toLocaleString('en-US', options).replace(',', ' at');
}

const GroupCard = ({ group, onJoinClick }: GroupCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md lg:w-4/6 mx-auto mb-5">
      <div className="px-4 pt-4 flex justify-between items-center">
        <h2 className="text-lg font-bold mb-2 flex items-center">
          {group.name}
          <button
            className={`text-sm font-medium ml-2 py-1 px-3 rounded ${group.joined ? 'bg-gray-300' : 'bg-gray-200'}`}
            onClick={() => onJoinClick(group.id)}
          >
            {group.joined ? 'Joined' : 'Join'}
          </button>
        </h2>
      </div>
      <div className="px-4 py-2">
        <p className="text-gray-700 mb-1">
          {group.description} 
          <span className="text-gray-500 text-sm"> {formatDateTime(group.postedDate)}</span>
        </p>
        <p className="text-gray-500 text-sm">{group.longNote}</p>
      </div>
      {group.imageUrl && (
        <div className="relative w-full" style={{ paddingTop: '100%' }}>
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={group.imageUrl}
            alt={group.name}
          />
        </div>
      )}
    </div>
  );
}

export default GroupCard;
