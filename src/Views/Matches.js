import axios from 'axios'
import { Modal } from 'Components/Modal';
import React, { useEffect } from 'react'
import { applyMiddleware } from 'redux'
import { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css'
import { InputField } from 'Components/InputField';

function Matches() {
    const [showModal, setShowModal] = useState(false);
    const title = "Add record";
    const content = "Add content";
    const [value, setValue] = useState("");
    const handleClick = () => {
      setShowModal(!showModal);
    };
    const handleChange = (e) => {
        setValue(e.target.value)
    };

    useEffect(()=>{
        axios.get("https://customcricketmatch-default-rtdb.firebaseio.com/matches.json")
        .then((result)=>{console.log(result.data['-NPucxbsq7qJVP_1jgsf'])})
    },[])

    return (
    <div>Matches
        <i class="bi bi-x-circle"></i>

        <button className="btn1" onClick={handleClick}>
            Open Modal
        </button>
        <Modal
            visible={showModal}
            title={title}
            toggleModal={handleClick}
        ><InputField  label="hello" type="" value={value} onChange={handleChange} placeholder="hello"/>
        </Modal>
    </div>
  )
}

export default Matches
// useEffect(()=>{
//     fetch(POST_API_URL,{
//         method:'POST',
//         headers:{
//             'Content-Type':'application/json'
//         },
//         body:JSON.stringify({
//             "country": selectedItem
//         })
//     })
//     .then(res=>{
//       if(res.ok)
//         return res.json()
//       throw Error("Unable to fetch");
//     })
//     .then(data=>
//       {
//         let citiesArray = [];
//         citiesArray = ([...data.data])?.map((city,idx) => city);
//         setCities(citiesArray);
//         setFilteredCities(citiesArray);
//         setLoading(false);
//       })
//     .catch(error=>{
//       console.log(error.message);
//       setError(error.message);
//   })
//   return ()=>{
//     setLoading(true);
//   }
//   },[])

// import React, { useEffect, useState } from "react";
// import { Form } from "react-bootstrap";
// import Table from "react-bootstrap/Table";
// import TableHeader from "./TableHeader";

// function UserTable({
//   records,
//   setRecords,
//   searchedTerm,
//   setSearchedTerm,
//   selectedRecordIds,
//   setSelectedRecordIds,
//   setSelectedRecords,
//   displayRecords,
//   setDisplayRecords,
//   checked,
//   setChecked,
// }) {
//   const [filteredRecords, setFilteredRecords] = useState(() => []);
//   const [loading, setLoading] = useState(() => false);

//   useEffect(() => {}, [displayRecords]);

//   useEffect(() => {
//     let id = setTimeout(() => {
//       //searched records
//       let filteredArr = records?.filter((record) => {
//         let arrOfVals = Object.values(record).map((val) =>
//           val.toString().toLowerCase()
//         );
//         let lowerCaseSearch = searchedTerm.toLowerCase();
//         return arrOfVals?.some((val) => val.includes(lowerCaseSearch));
//       });
//       console.log(filteredArr);
//       setLoading(false);
//       setFilteredRecords(filteredArr);
//     }, 500);
//     console.log(filteredRecords);

//     return () => {
//       setLoading(true);
//       clearTimeout(id);
//     };

//     // setLoading(false);
//   }, [searchedTerm]);

//   useEffect(() => {
//     if (searchedTerm === "") setDisplayRecords(records);
//     else setDisplayRecords(filteredRecords);
//   }, [filteredRecords]);

//   // const displayRecords = (searchedTerm === "")? records: filteredRecords;
//   return (
//     <div className="mt-4">
//       {loading && <p className="mt-40">loading...</p>}
//       {!loading && (
//         <Table striped bordered hover>
//           <TableHeader
//             displayRecords={displayRecords}
//             setDisplayRecords={setDisplayRecords}
//           />
//           <tbody>
//             {displayRecords?.map((oneRecord, id) => {
//               return (
//                 <tr key={oneRecord.id}>
//                   <td>
//                     <label>
//                       <input
//                         name={oneRecord.id}
//                         type="checkbox"
//                         checked={selectedRecordIds.includes(oneRecord.id)}
//                         onChange={(e) => {
//                           if (e.target.checked)
//                             setSelectedRecordIds(() => [
//                               ...selectedRecordIds,
//                               oneRecord.id,
//                             ]);
//                           else
//                             setSelectedRecordIds(() => {
//                               return selectedRecordIds.filter(
//                                 (id) => id !== oneRecord.id
//                               );
//                             });
//                           console.log(selectedRecordIds);
//                           // oneRecord.checked = e.target.checked;
//                           // let arr = displayRecords;
//                           // arr[oneRecord.id].checked = e.target.checked ;

//                           // setDisplayRecords(arr)
//                           // console.log(displayRecords)
//                           // setRecords(displayRecords);
//                         }}
//                       />{" "}
//                       {oneRecord.id}
//                     </label>
//                     {/* <Form.Check
//               inline
//               label={oneRecord.id}
//               name={oneRecord.id}
//               type="checkbox"
//               id={`inline-checkbox-${oneRecord.id}`}
//               checked={()=>{setIsChecked(() => [...isChecked, false]);return isChecked[oneRecord.id]}}
//               onChange={(e)=>{
//                 setIsChecked(() => {console.log(isChecked);return !isChecked[oneRecord.id]});
//                 let selected = isChecked[oneRecord.id]; 
//                 selected && setSelectedRecordIds(()=>[...selectedRecordIds,oneRecord.id]);
//                 !selected && setSelectedRecordIds((prevSelectedRecordIds)=>prevSelectedRecordIds.filter(elemId => elemId !== oneRecord.id));
//                 console.log("selectedRecordIds ",selectedRecordIds,isChecked)
//                 }}
//               /> */}
//                   </td>
//                   <td>{oneRecord.userFName}</td>
//                   <td>{oneRecord.userLName}</td>
//                   <td>{oneRecord.userHeroName}</td>
//                   <td>{oneRecord.userEmail}</td>
//                   <td>{oneRecord.userGender}</td>
//                   <td>{oneRecord.userAge}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </Table>
//       )}
//     </div>
//   );
// }
