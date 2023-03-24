import React from 'react'

function SummaryCard({label,value}) {
    // console.log('key',value);
    console.log(label+' : '+value);
  return (
    <div className='ballSummary'><b>{label} : </b> {value}</div>
  )
}

export default SummaryCard
