import { useState } from 'react';


export function CreateListPopUp({setCreateListPopUp}) {
    const [newListTitle, setNewListTitle] = useState=("");
    return(
        <div className="new-list-pop-up">
        <h1>{newListTitle}</h1>
        <input
            className="New-List"
            type="New-List-input"
            placeholder="Title" />
        <button onClick={(setCreateListPopUp===false)}>Cancel</button>
        {/* <button onClick={handleSubmit}>Create New List</button> */}
        </div>
    )
}