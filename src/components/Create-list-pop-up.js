import { useState } from 'React';


export function CreateListPopUp({setCreateListPopUp}) {
    const [createListPopUp, setCreateListPopUp] = useState(false);
    const [newListTitle, setNewListTitle] = useState=("");
    return(
        <div className="new-list-pop-up">
        <h2>New List Title</h2>
        <input
            className="New-List"
            type="New-List-input"
            placeholder="Title" />
        <button onClick={(setCreateListPopUp===false)}>Cancel</button>
        {/* <button onClick={handleSubmit}>Create New List</button> */}
        </div>
    )
}