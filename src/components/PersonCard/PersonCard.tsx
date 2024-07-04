import React, { useState } from 'react';
import Chichi from "../../assets/Elexis.jpg"

interface PersonCardProps {
  name: string;
  occupation: string;
  image?: string;
}

const PersonCard: React.FC<PersonCardProps> = ({ name, occupation, image }) => {
    const [connected, setConnected] = useState(false);

    const handleConnect = () => {
        setConnected(true);
    };

    const handleRemove = () => {
        setConnected(false);
    };
  
  return (
    <div className="w-full sm:w-1/2 md:w-1/4 bg-white p-4 rounded shadow-md flex flex-col justify-between items-center space-y-2">
      <img src={Chichi} alt={name} className="w-16 h-16 rounded-full" />
      <div className="text-lg font-semibold text-center">{name}</div>
      <div className="text-gray-600 text-center">{occupation}</div>
      
      <div className="flex space-y-2 mt-auto">
        {!connected && <button className="text-blue-500 border-2 rounded-full p-2 px-3" onClick={handleConnect}>Connect</button>}
        {connected && <button className="text-red-500 border-2 rounded-full p-2 px-3" onClick={handleRemove}>- Remove</button>}
      </div>
    </div>
  );
};

export default PersonCard;
