import { useEffect, useState } from 'react'
import './App.css'
import { AddItens } from './components/AddItens'
import { ModalPdf } from './components/ModalPdf'
function App() {
  const [marketList, setMarketList] = useState<string[]>([])
  useEffect(() => {
    console.log(marketList)
  }, [marketList])
  return (
    <>
      <h2>Lista de mercado</h2>
      <AddItens addList={setMarketList} />
      <ul>
        {marketList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <ModalPdf />
    </>
  )
}

export default App
