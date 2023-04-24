import './style.css';
function SelectBatsmanModal({ title, setIsShowPlayerModal, openAnotherModal, onSubmit, ...props }) {
    const closeModal = () => {
        setIsShowPlayerModal(false);
        if (openAnotherModal)
            openAnotherModal(true);
    }
    return (
        <>
            <div id='playerContainer' className="selectPlayerContainer shadow border rounded">
                <div className="selectPlayerTitle">
                    <h5>{title}</h5>
                </div>
                <hr />
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

export default SelectBatsmanModal;
