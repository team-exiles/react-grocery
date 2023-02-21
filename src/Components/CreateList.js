import { Link } from 'react-router-dom'

export const CreateList = () => {
    return (
    <>
    <h2>List Genesis</h2>
    <p>My super <strong>THICC</strong> list</p>
    <br/>
        <h3>Tonight's Dinner</h3>
        <ul>
        <li>Baby Food</li>
        <li>Everclear</li>
        <li>Wart Ointment</li>
        <li>Roll of Amish Butter</li>
        </ul>
    <button>Create List</button>
    <button><Link to="/">Home Page</Link></button>
    </>
    )

}