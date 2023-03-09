import React, { useState } from "react";

// // import React from 'react'

// // export default function Input() {
// //   return (
// //     <div>
// //       <form action="">
// //         <label htmlFor="">First Name</label>
// //         <input type="text" name="" id="" />
// //         <label htmlFor="">Last Name</label>
// //         <input type="text" name="" id="" />
// //         <label htmlFor="">Email</label>
// //         <input type="text" name="" id="" />
// //         <label htmlFor="">name</label>
// //         <input type="text" name="" id="" />
// //         <label htmlFor="">name</label>
// //         <input type="text" name="" id="" />
// //         <label htmlFor="">name</label>
// //         <input type="text" name="" id="" />
// //         <label htmlFor="">name</label>
// //         <input type="text" name="" id="" />
// //       </form>
// //     </div>
// //   )
// // }
// // import React from 'react'

// // export default function Input() {
// //   return (
// //     <div>
// //        <form >

// // <div>
// //     <label className='mx-2'>FirstName</label>
// //     <input type="text" className="form-control round rounded-4"  placeholder='Enter FirstName'  required></input>
// // </div>


// // <div>
// //     <label className='mx-2'>FirstName</label>
// //     <input type="text" className="form-control my-2 round rounded-4"  placeholder='Enter FirstName' required></input>
// // </div>

// // <div>
// //     <label className='mx-2'>FirstName</label>
// //     <input type="text" className="form-control my-2 round rounded-4"  placeholder='Enter FirstName' required></input>
// // </div>
// // <input type="submit" value="Submit here" />
// // </form>
// //     </div>
// //   )
// // }
export  const InputField = (props) => {
 
 return (
   <div className="form-group">
 <label htmlFor="input-field">{props.label}</label>
     <br/>
     <input
       type={props.type}
       name={props.name}
       value={props.value}
       className="form-control w-75"
       placeholder={props.placeholder}
       onChange={props.onChange}
     />
   </div>
 );
};