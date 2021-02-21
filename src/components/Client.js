
const Client = () => {
    const client = localStorage.getItem("client");
    const table = localStorage.getItem("table");

    return (
        <>
        <div className="Group">
            <p className="Texts">Cliente: {client}</p>
            <p className="Texts">Mesa: {table}</p>
        </div>
        </>
    )
}

export default Client