import React, { useState } from "react";
import Pagination from "../../Atoms/Pagination";

import { Link } from "react-router-dom";
import './style.css';
import TableButton from "../../Atoms/TableButton";

export default function CustomTable({
  tableContent,
  headingDetails,
  btnText,
  component,
}) {
  // const [showperpage, setShowperPage] = useState(11);
  const showperpage = 11;
  const [paginate, setPaginate] = useState({
    start: 0,
    end: showperpage,
  });
  const onPaginationChange = (start, end) => {
    setPaginate({
      start: start,
      end: end,
    });
  };

  return (
    <>
      <div className=" justify-content-center w-100 px-5 pb-4">
        <table className="table table-success table-bordered table-hover table-sm text-center">
          <thead className="table table-dark">
            <tr>
              {headingDetails.map((val) => (
                <th>
                  {val.label}
                  {/* <div className="d-flex ">{val.label}</div> */}
                </th>
              ))}
            </tr>
          </thead>
          {tableContent.length ? (
            <tbody>
              {tableContent
                .slice(paginate.start, paginate.end)
                .map((val, index) => (
                  <tr>
                    {headingDetails.map((heading) => (
                      // {val[heading.key] == 'Score' ? <td>200</td>:
                      <td>{typeof val[heading.key] !== "object" ?
                      // heading.key === headingDetails[0].key ?
                        heading.key === 'Name' ?
                        <Link className='playerNameLink' to={'/playerInfo/'+val[heading.key]}>{val[heading.key]}</Link> :
                          (val[heading.key]) :
                        (<TableButton
                          data={val[heading.key]}
                          btnText={btnText}
                          firstColumnValue={tableContent[index][component]}
                        />
                        )}
                      </td>
                      // <td>
                      //   {typeof val[heading.key] !== "object" ? (
                      //     val[heading.key]
                      //   ) : (
                      //     <TableButton
                      //       data={val[heading.key]}
                      //       btnText={btnText}
                      //       firstColumnValue={tableContent[index][component]}
                      //     />
                      //   )}
                      // </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          ) : (
            <div className="d-flex justify-content-center w-100 p-5">
              <h1 className=" text-danger ">Loading Data Please Wait.....</h1>
            </div>
          )}
        </table>
      </div>
      {tableContent.length ? (
        <Pagination
          showperPage={showperpage}
          onPaginationChanges={onPaginationChange}
          total={tableContent.length}
        />
      ) : null}
    </>
  );
}
