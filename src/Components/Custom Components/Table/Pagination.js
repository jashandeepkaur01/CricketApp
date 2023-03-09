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
            if(Math.ceil(total/showperPage)===counter||total==0){
                setCounter(counter);
            }
            else{
                setCounter(counter+1);
                
            }
        }
    }

useEffect(()=>{
    const value =showperPage*counter;

    onPaginationChanges(value-showperPage,value);

},[counter])
  return (
    <>
    
    <div className='p-5 d-flex justify-content-center w-100'>
      {counter>1?<button className='btn btn-primary px-5' onClick={()=>{onButtonClick('prev')}}>Back</button>:null}
    <label className="mx-5 my-2">{counter}</label>
    {total>4&&(Math.ceil(total/11))!==counter?<button className='btn btn-primary px-5' onClick={()=>{onButtonClick('next')}}>Next</button>:null}
    </div>
    </>

   
    
  )

}

export default Pagination