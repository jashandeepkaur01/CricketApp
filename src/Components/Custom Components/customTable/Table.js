import React, { useState } from "react";
import Pagination from "./Pagination";

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

      <div className=" justify-content-center w-100 p-5">

        <table className="table  table-warning">
          <thead className='table table-dark'>
            <tr>
              {headingDetails.map(val =>
                <th>
                  <div className='d-flex '>
                    {val}
                  </div >
                </th>
              )}
            </tr>
          </thead>
          {tableContent.length ?
            <tbody>
          
              {tableContent.slice(paginate.start, paginate.end).map(val =>
              
           
                  <tr>
                  {Object.entries(val).map(val=>{
                    if(val[0]!="key"){

                    return (<td>{val[1]}</td>)
                    }
                    })}

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
