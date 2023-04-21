
function SummaryCard({ label, value }) {
  return (
    // <div><b>{label} : </b> {value}</div>
    <div className='d-flex justify-content-between w-75 mx-auto'>
      <div><b>{label}</b></div>
      <div><b>{value}</b></div>
    </div>
  )
}

export default SummaryCard
