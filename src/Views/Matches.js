import axios from 'axios'
import { Modal } from 'Components/Modal';
import React, { useEffect } from 'react'
import { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css'
import { API_URLS } from 'Services/Api/Constants';
import CustomTable from 'Components/Custom Components/Table/Table';

function Matches() {
    const [showModal, setShowModal] = useState(false);
    const title = "Schedule Match";
    const content = "Add Match";
    const [matchData,setMatchData] = useState([{}]);
    const [tableContent, setTableContent] = useState([{}])
    const [headingDetails, setHeadingDetails] = useState([""])
    
    // console.log(tableContent,headingDetails)
    const handleClick = () => {
      setShowModal(!showModal);
    };

    useEffect(()=>{
        axios.get(API_URLS.MATCHES)
        .then((result)=>{
            setMatchData(result.data);
            console.log(result);
        })

    },[])

    useEffect(()=>{
        setTableContent(Object.values(matchData));
    },[matchData])

    useEffect(()=>{
        setHeadingDetails(Object.keys(tableContent[0]));
    },[tableContent])

    // console.log
    // console.log("Result ",typeof result,Object.values(result.data),Object.keys())
    return (
    <div>matches
        <button className="btn1" onClick={handleClick}>
            Open Modal
        </button>
        {/* matchType: test t20 odi (radio)
            TournamentType: IPL, WT20, ODI World Cup (drop down)
            Team 1: drop down
            Team 2: drop down without 1st team

            //validation

         */}

        <Modal
            visible={showModal}
            title={title}
            toggleModal={handleClick}
            SubmitText = {content}
        />
        <CustomTable tableContent={tableContent} headingDetails={headingDetails}/>
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

// axios POST request
        // const options = {
        //     url: 'https://customcricketmatch-default-rtdb.firebaseio.com/matches.json',
        //     method: 'POST',
        //     headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json;charset=UTF-8'
        //     },
        //     // data: addedData
        //     data:{
        //         name:"IPL CSK Vs RCB match 5th"
        //     }
        // };
        
        // axios(options)
        //     .then(response => {
        //     console.log(response.status);
        //     });
        // axios.delete("https://customcricketmatch-default-rtdb.firebaseio.com/matches.json/-NQ3qJ7H1bRuB-4OclU9/age")
        // .then(()=>console.log("deleted :",))