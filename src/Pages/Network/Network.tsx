import React from 'react'
import ManageNet from '../../components/ManageNet/ManageNet'
import CatchUp from '../../components/CatchUp/CatchUp'

function Network() {


  return (
    
      <div className="mx-20 my-5">
        <div className="md:flex gap-10">
            <div className="w-full md:w-2/5">
                <ManageNet />
            </div>

            <div className="w-full md:w-4/5">
                <CatchUp />
            </div> 
        </div>
    </div>
    
  )
}

export default Network
