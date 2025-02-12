import Section from "./Section"

function Card({name, order,setToPaid}) {

    let orderArr = []
    for (let orderItem in order) {
        orderArr.push(
            <Section key={orderItem}  keyName={orderItem} data={order[orderItem]}/>
        )
    } 

    return <div className="Card" onClick={setToPaid}>
        <h2>{name}</h2>
        {orderArr}
    </div>
}

export default Card