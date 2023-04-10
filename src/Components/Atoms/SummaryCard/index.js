import React from 'react'

function SummaryCard({ label, value }) {
  return (
    <div><b>{label} : </b> {value}</div>
  )
}

export default SummaryCard
