import { Link } from "react-router-dom"

export const Archive = () => {

    return (
    <>
        <h2>Archived Lists</h2>
        <div>
            <ul>
                <h3>McLovin's Sandwich</h3>
                <li>Moistened Kraft Singles</li>
                <li>Gently warmed shaved ham</li>
                <li>Goji Berries</li>
                <li>Pizza Dough</li>
                <li>Doughnuts</li>
                <li>Black Currants</li>
                <li>Half a lunchable</li>
                <li>A keg of beer</li>
            </ul>
        </div>
        <button><Link to="/Homepage">Return to Homepage</Link></button>
    </>
    )
}