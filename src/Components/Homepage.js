import {Link} from 'react-router-dom'

export const Homepage = () => {
    return (
        <div className="homepage">
            <h2>All rightie roo, let's crack us up some big, hefty nutz.</h2>
            <ul>
                <li>I am a list, hear me roar.</li>
                <li>Rawr Rawr.</li>
            </ul>
            <h3>McLovin's Salad</h3>
            <ul>
                <li>Papayas</li>
                <li>Peanuts (in-shell)</li>
                <li>Pepino Melons</li>
                <li>Persian Cucumbers</li>

            </ul>
            <button><Link to="/Create" path="relative" className="createbutt">Pen List</Link></button>
        </div>
    )
}