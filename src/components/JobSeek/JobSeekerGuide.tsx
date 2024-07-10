
const JobSeekerGuidance = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white gap-2 rounded-lg border shadow-md">
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Job seeker guidance</h2>
        <p className="text-sm text-gray-600">Recommended based on your activity</p>
      </div>

      <div className="flex items-center space-x-4 mb-4">
        
        <div>
          <p className="font-semibold">I want to improve my Performance</p>
          <p className="text-sm text-gray-700">Explore our curated guide of expert-led courses, such as how to improve your resume and grow your network, to help you land your next opportunity.</p>
          <a href='/' className="text-customGreen underline decoration-2 py-2 rounded-md text-sm mt-2">Show more</a>
        </div>
      </div>

    </div>
  );
};

export default JobSeekerGuidance;
