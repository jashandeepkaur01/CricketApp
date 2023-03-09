
export default function Team({tableContent, headingDetails}) {

  return (
    <>

      <div className="d-flex justify-content-center w-100 p-5">

        <table className="table  table-warning ">
          <thead className='table table-success'>
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
          <tbody>
            {tableContent.map(val =>
              <tr>
                {Object.values(val).map(val => <td>{val}</td>)}
              </tr>)}
          </tbody>
        </table>
      </div>
    </>
  )
}
