function JobPrep() {
  const jobButtons = [
    {
      title: "My Jobs",
    },
    {
      title: "Preferences",
    },
    {
      title: "Interview Prep",
    },
    {
      title: "Job Seeker Guidance",
    },
  ];
  return (
    <div className="flex flex-col p-4 bg-white gap-2 rounded-lg border shadow-md">
      {jobButtons.map((jobButton, index) => (
        <button
          key={index}
          className="bg-transparent hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 text-left">
          {jobButton.title}
        </button>
      ))}
    </div>
  );
}

export default JobPrep;
