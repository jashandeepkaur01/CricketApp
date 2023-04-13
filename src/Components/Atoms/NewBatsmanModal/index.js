function NewBatsmanModal({ playerOut, onSubmit, ...props }) {
    return (
        <>
            <div id='playerContainer' className="selectPlayerContainer shadow border rounded text-center">
                <div className="selectPlayerTitle">
                    <h4 className='text-danger'>{playerOut} is Out ....!!!</h4>
                </div>
                <hr />
                <div>
                    <h5>Select Next Batsman</h5>
                </div>
                <div className="selectPlayerBody">
                    {props.children}
                </div>
                <div className="selectPlayerFooter text-end">
                    <button className='btn btn-outline-primary' id='okBtn' onClick={() => onSubmit()}>OK</button>
                </div>
            </div>

        </>
    )
}

export default NewBatsmanModal;
