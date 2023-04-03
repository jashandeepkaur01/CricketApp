import React from 'react'
import './style.css'
function SelectPlayerModal({title,setIsShowPlayerModal,openAnotherModal,...props}) {
    // const title = 'Title';
    const body = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel commodi aperiam, quo magni rem minus deserunt et aliquam nam quis sapiente est recusandae?';
    const thisModal = document.getElementById('playerContainer')
    const closeModal = () => {
        console.log('closing modal...');
        setIsShowPlayerModal(false);
        if(openAnotherModal)
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
                    {/* {body} */}
                    {props.children}
                </div>
                <div className="selectPlayerFooter text-end">
                    <button className='btn btn-outline-primary' id='okBtn' onClick={()=>closeModal()}>OK</button>
                </div>
                {/* {props.children} */}
            </div>

        </>
    )
}

export default SelectPlayerModal;
