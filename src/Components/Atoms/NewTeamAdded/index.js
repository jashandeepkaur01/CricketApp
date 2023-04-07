function NewTeamAdded({ teamName }) {
    return (
        <div className="newTeamAddedAlert alert alert-warning alert-dismissible fade show text-center" role="alert">
            <strong> {teamName} </strong> added successfully...
        </div>
    )
}

export default NewTeamAdded;
