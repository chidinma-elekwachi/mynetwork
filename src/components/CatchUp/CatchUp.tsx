import React, { useState } from 'react';

function CatchUp() {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleButtonClick = (button: string) => {
    setActiveButton(activeButton === button ? null : button);
  };

  return (
    <div className="bg-white rounded-lg shadow-md border-2 border-gray-300">
      <div className='flex'>
        <button
          className={`mx-2 font-semibold p-3 hover:bg-gray-200 border-b-2 border-customGreen ${activeButton === 'grow' ? 'border-b-2 border-customGreen' : 'border-0'}`}
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

      {activeButton === 'grow' && (
        <div className="mt-4 p-4 border-t border-gray-200">
          <p>Apparently the grow border doesn't wanna leave it .</p>
        </div>
      )}

      {activeButton === 'catchUp' && (
        <div className="mt-4 p-4 border-t border-gray-200">
          <p>This is the Catch Up dropdown content.</p>
        </div>
      )}
    </div>
  );
}

export default CatchUp;
