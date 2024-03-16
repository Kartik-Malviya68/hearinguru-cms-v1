import EmptyState from '@/public/icons/Modals/EmptyState'
import React from 'react'

function NoDataRecords() {
  return (
    <div className="w-full mx-auto flex gap-4 flex-col items-center py-14">
            <EmptyState />
            <div className="w-full flex-col flex text-[#4a4a4a] text-xl  items-center justify-center ">
              <h4 className="font-bold ">Empty</h4>
              <p className="font-normal">No Staff Recorded Currently</p>
            </div>
          </div>
  )
}

export default NoDataRecords
