
function JobPrep() {
  return (
    <div className="flex flex-col p-4 bg-white gap-2 rounded-lg border shadow-md">
      <button className="bg-transparent hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 text-left">
        My Jobs
      </button>
      <button className="bg-transparent hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 text-left">
        Preferences
      </button>
      <button className="bg-transparent hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 text-left">
        Interview Prep
      </button>
      <button className="bg-transparent hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 text-left">
        Job Seeker Guidance
      </button>
    </div>
  );
};

export default JobPrep;
