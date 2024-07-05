import React from 'react'
import JobPrep from '../../components/JobPrep/JobPrep';
import JobPicks from '../../components/JobPicks/JobPicks';
import JobSeekerGuidance from '../../components/JobSeek/JobSeekerGuide';

function Jobs() {
    return (
        <div className="mx-10 my-5">
          <div className="md:flex gap-10">
            <div className="md:w-1/6 hidden md:block">
              <div>
                <JobPrep />
              </div>
            </div>
    
            <div className="w-full md:w-3/6">
                <JobPicks />
            </div>

            <div className="md:w-2/6  hidden md:block">
                <JobSeekerGuidance />
            </div>
          </div>
        </div>
      );
}

export default Jobs