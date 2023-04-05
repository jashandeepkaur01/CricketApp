import React from 'react'

function MatchControlBtn({paddingVal,control,label}) {
    return <button className={'btn btn-light btn-outline-primary py-2 m-1 '+ paddingVal} onClick={(e) => control(e)}>{label}</button>
}

export default MatchControlBtn
