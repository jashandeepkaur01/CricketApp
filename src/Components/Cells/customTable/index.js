import React, { useState } from "react";
import Pagination from "../../Atoms/Pagination";

export default function CustomTable({ tableContent, headingDetails }) {
  // console.log(tableContent)
  const [showperpage, setShowperPage] = useState(11);
  const [paginate, setPaginate] = useState({
    start: 0,
    end: showperpage
  })
  const onPaginationChange = (start, end) => {

    setPaginate({
      start: start,
      end: end
    })
  }

  return (
    <>

      <div className=" justify-content-center w-100 px-5 pb-4">

        <table className="table  table-warning table-bordered table-hover  table-sm table-striped">
          <thead className='table table-dark'>
            <tr>
              {headingDetails.map(val =>
                <th>
                  <div className='d-flex '>
                    {val.label}
                  </div>
                </th>
              )}
            </tr>
          </thead>
          {tableContent.length ?
            <tbody>
          
              {tableContent.slice(paginate.start, paginate.end).map(val =>
              
           
                  <tr>
                 {headingDetails.map(heading=><td>
                  {val[heading.key]}
                 </td>)}

                  </tr>
                  
              )}
            </tbody>
            :
            <div className="d-flex justify-content-center w-100 p-5">

              <h1 className=" text-danger ">..........Add Data</h1>
            </div>
          }
        </table>
      </div>
      {tableContent.length ? <Pagination showperPage={showperpage} onPaginationChanges={onPaginationChange} total={tableContent.length} /> : null}
    </>
  )
}
