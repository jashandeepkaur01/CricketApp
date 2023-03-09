import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import Pagination from "Pagination";
export default function TableName(props){
    // console.log(props.main,"");
    const[showperpage,setShowperPage]=useState(5);
    const [paginate,setPaginate]=useState({
        start:0,
        end:showperpage
    })
    const onPaginationChange=(start,end)=>{
        console.log(start,end);
        setPaginate({
            start:start,
            end:end
        })
    }
  return(
    <div className="d-flex justify-content-center w-100 p-5">
  <table className="table  table-warning ">
  <thead  className='table table-success'>
    <tr>    
  {props.theading.map((ele)=>{
    return(<th scope="col">{ele}</th>  );
  })}
      </tr>
  </thead>
  <tbody>
    {props.main.slice(paginate.start,paginate.end).map((e)=>{
      return(
<tr>
      <td>{e.body}</td>
      <td>{e.title}</td>
    </tr>
      );
    })}
   
  </tbody>
  <Pagination showperPage={showperpage} onPaginationChanges={onPaginationChange} total={props.main.length}/>
</table>
</div>
  );
}