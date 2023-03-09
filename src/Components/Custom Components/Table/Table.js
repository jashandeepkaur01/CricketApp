import React, { useState } from "react";
import Pagination from "./Pagination";
import '../../../../src/App.scss'

export default function CustomTable({ tableContent, headingDetails,handle }) {
  // console.log(tableContent)
  const [showperpage, setShowperPage] = useState(5);
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
      <div id="fl" className="btn-end">
          <button className='btn btn-primary btn-end' onClick={handle}>Add Players</button>
          </div>

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
                  {Object.values(val).map(val=><td>{val}</td>)}
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
