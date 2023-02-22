

export const ListDetails = ({list}) => {

    return (
        <div className="list-container">
            <h5 className="list-title">{list.title}</h5>

            <div className="list-item">
                <div className="list-item">{list.item}</div>
            </div>

            <div className="card-container-back">
                <div className="back-message">{list.quantity}</div>
            </div>

            <br />
            <div>
                <div className="author">{`created by ${list.owner}`}</div>
            </div>
        </div>
    )
}