import { useState } from 'react'
import './App.css'
import Card from './Card'
import data from './sampleData'

function App() {
  let [receipts, setRecipts] = useState(data)

  function setToPaid(index) {
    let newReceipts = [...receipts]
    newReceipts[index].paid = true
    setRecipts(newReceipts)
  }

  function reset() {
    let newReceipts = receipts.map((receipt) => {
      receipt.paid = false
      return receipt
    })
    setRecipts(newReceipts)

  }

  function deleteBye(index) {
    let newReceipts = receipts.filter((receipt, i)=> {
      return index === i ? false : true
    })    
    setRecipts(newReceipts)
  }

  return (
    <>
      <div className='view'>
        {
          receipts.map((receipt, index) => {

            return <div key={index} className='cardDisplay'>
              {
                receipt.paid ? "" : <Card
                  setToPaid={() => setToPaid(index)}
                  deleteBye={()=> deleteBye(index)}
                  name={receipt.person}
                  order={receipt.order} />
              }
            </div>
          })
        }

      </div>
      <button onClick={reset}>refresh</button>
    </>
  )
}

export default App



