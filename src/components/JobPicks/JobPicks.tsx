import { useState } from 'react';

interface JobDetails {
  title: string;
  company: string;
  location: string;
  status: string;
  promotion: string;
}

const JobPicks = () => {
  const [jobDetails] = useState<JobDetails[]>([
    {
        title: 'Football Analyst',
        company: 'Football Insights Ltd',
        location: 'London, United Kingdom',
        status: 'Accepting applications',
        promotion: 'Featured',
      },
    {
      title: 'Coach and Personal Trainer',
      company: 'ARMS Innovations Ltd',
      location: 'England, United Kingdom (Hybrid)',
      status: 'Actively recruiting',
      promotion: 'Promoted',
    },
  ]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white gap-2 rounded-lg border shadow-md">
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Job picks for you</h2>
        <p className="text-sm text-gray-600">Based on your profile and search history</p>
      </div>
      
      {jobDetails.map((job, index) => (
        <div key={index} className="flex items-center space-x-4 mb-4 my-6 pb-4 border-b border-black-200">
          <div>
            <p className="font-semibold">{job.title}</p>
            <p className="text-sm">{job.company}</p>
            <p className="text-sm">{job.location}</p>
            <p className="text-sm text-green-600">{job.status}</p>
            <p className="text-sm text-blue-600">{job.promotion}</p>
            <button className="bg-customGreen text-white py-1 px-3 rounded-md text-sm mt-2">Easy Apply</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobPicks;
