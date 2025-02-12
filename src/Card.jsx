import Section from "./Section"

function Card({name, order, setToPaid, deleteBye}) {
    
    let orderArr = []
    for (let orderItem in order) {
        orderArr.push(
            <Section key={orderItem}  keyName={orderItem} data={order[orderItem]}/>
        )
    } 

    return <div className="Card" >
        <h2>{name}</h2>
        {orderArr}
        <button onClick={setToPaid}>pay</button>
        <button onClick={deleteBye}>Delete</button>

    </div>
}

export default Card