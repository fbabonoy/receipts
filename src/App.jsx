import { useState } from 'react'
import './App.css'
import Card from './Card'
import data from './sampleData'

function App() {
  let [receipts, setRecipts] = useState(data)

  function setToPaid(index) {
    let newReceipts = receipts.slice()
    newReceipts[index].paid = true
    setRecipts(newReceipts)
  }

  return (
    <div className='view'>
      {
        receipts.map((receipt, index) => {
          
          return receipt.paid ? "" : <Card
            setToPaid={()=>setToPaid(index)}
            key={index}
            name={receipt.person}
            order={receipt.order} />
        })
      }

    </div>
  )
}

export default App



