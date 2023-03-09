import React, { useEffect, useState } from 'react'

const Pagination = ({showperPage,onPaginationChanges,total}) => {

const[counter,setCounter]=useState(1);
const onButtonClick=(type)=>{
    if(type==='prev'){
        if(counter===1){
            setCounter(1);
        }
        else {
            
            setCounter(counter-1);
        }
    }
    else if(type==='next'){
        if(Math.ceil(total/showperPage)===counter){
            setCounter(counter);
        }
        else{
            setCounter(counter+1);
         
        }
    }
}
useEffect(()=>{
    const value =showperPage*counter;
    console.log("startval",value-showperPage);
    console.log("endval",value);
    onPaginationChanges(value-showperPage,value);

},[counter])
  return (
    <>
    
    <div className=''>
      <button className='btn btn-primary' onClick={()=>{onButtonClick('prev')}}>Previous</button>
    <button>{counter}</button>
    <button className='btn btn-primary' onClick={()=>{onButtonClick('next')}}>Next</button>
    </div>
    </>

   
    
  )

}

export default Pagination
