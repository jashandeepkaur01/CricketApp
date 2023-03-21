import React, { useState } from "react";
import Pagination from "../../Atoms/Pagination";
import TableButton from "Components/Atoms/TableButton";

export default function CustomTable({
  tableContent,
  headingDetails,
  btnText,
  component,
}) {
  const [showperpage, setShowperPage] = useState(11);
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
        <table className="table  table-success table-bordered table-hover  table-sm ">
          <thead className="table table-dark">
            <tr>
              {headingDetails.map((val) => (
                <th>
                  <div className="d-flex ">{val.label}</div>
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
                      <td>
                        {typeof val[heading.key] !== "object" ? (
                          val[heading.key]
                        ) : (
                          <TableButton
                            data={val[heading.key]}
                            btnText={btnText}
                            firstColumnValue={tableContent[index][component]}
                          />
                        )}
                      </td>
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
