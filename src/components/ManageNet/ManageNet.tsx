import { useState } from "react";
import chevron from "../../assets/chevron.png";

interface NetworkItem {
  title: string;
  count?: number;
}

function ManageMyNetwork() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const networkItems: NetworkItem[] = [
    { title: "Connections", count: 169 },
    { title: "Contacts", count: 4875 },
    { title: "Followers" },
    { title: "Groups", count: 3 },
    { title: "Events" },
    { title: "Pages", count: 73 },
    { title: "Newsletters", count: 6 },
    { title: "Hashtags" },
  ];

  return (
    <div className="p-3 w-full max-w-md bg-white rounded-lg shadow-md mb-4 border border-gray-300">
      <div className="flex items-center justify-between cursor-pointer" onClick={toggleDropdown}>
        <h2 className="text-lg font-semibold ">Manage my network</h2>
        <img
          src={chevron}
          alt="Chevron icon"
          className={`transform ${showDropdown ? 'rotate-180' : 'rotate-0'}`}
          width="26px"
          height="26px"
        />
      </div>

      {showDropdown && (
        <div className="mt-4">
          {networkItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center mt-2 hover:bg-gray-100 px-2">
              <h4 className="text-md font-semibold text-gray-500">{item.title}</h4>
              {item.count !== undefined && (
                <p className="text-md text-customGreen">{item.count}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ManageMyNetwork;
