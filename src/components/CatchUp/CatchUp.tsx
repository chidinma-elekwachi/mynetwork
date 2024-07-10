import { useState } from 'react';
import PersonCard from '../PersonCard/PersonCard';
import Chichi from "../../assets/Elexis.jpg"
import Chichi2 from "../../assets/Elexis.jpg"


function CatchUp() {
  const people = [
    {
      name: 'Callum Jones',
      occupation: 'PHP / SQL / Flutter -----',
    },
    {
      name: 'Chidinma Elekwachi',
      occupation: 'Just completed my studies and,...',
      image: Chichi
    },
    {
      name: 'Esther Omouwho',
      occupation: 'Frontend Developer',
    },
    {
      name: 'Olasunkanmi Akingbesote',
      occupation: 'Fifa Manager & footballer',
      image: Chichi2
    },
  ];
  const catchUpData = [
    {
      name: 'Lionel Messi',
      occupation: 'Congratulations on winning the Copa America with Argentina',
      status: 'Status is reachable',
    },
    {
      name: 'Cristiano Ronaldo',
      occupation: 'Celebrating 800 career goals milestone',
      status: 'Status is reachable',
    },
    {
      name: 'Mbappe Chidinma',
      occupation: 'Nigerian woman weds popular footballer and becoms a WAG!!',
      status: 'Status is trendy',
    },
  ];

  const [activeButton, setActiveButton] = useState('grow'); // Set default to 'grow'


  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };

  return (
    <div>
        <div className=" bg-white rounded-lg shadow-md border-2 border-gray-300">
      <div className='flex'>
        <button
          className={`mx-2 font-semibold p-3 hover:bg-gray-200 border-b-2 ${activeButton === 'grow' ? 'border-b-2 border-customGreen' : 'border-0'}`}
          onClick={() => handleButtonClick('grow')}
        >
          Grow
        </button>
        <button
          className={`mx-2 font-semibold p-3 hover:bg-gray-100 ${activeButton === 'catchUp' ? 'border-b-2 border-customGreen' : 'border-0'}`}
          onClick={() => handleButtonClick('catchUp')}
        >
          Catch Up
        </button>
      </div>

      </div>

      {activeButton === 'grow' && (
        <div className="mt-4 p-4 ">
              <div className="flex gap-5">
                  {people.map((person, index) => (
                    <PersonCard
                      key={index}
                      name={person.name}
                      occupation={person.occupation}
                                          />
                  ))}
                </div>
        </div>
      )}

      {activeButton === 'catchUp' && (
          <div className="mt-4 p-4">
          {catchUpData.map((person, index) => (
            <div key={index} className="bg-white p-4 rounded shadow-md mb-4">
              <div className="font-semibold">{person.name}</div>
              <div className="text-gray-600">{person.occupation}</div>
              <div className="text-xs text-gray-500">{person.status}</div>
            </div>
          ))}
        </div>
      )}

    </div>
    
      
    
  );
}

export default CatchUp;
