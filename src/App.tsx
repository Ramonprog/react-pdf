import { useEffect, useState } from 'react'
import './App.css'
import { AddItens } from './components/AddItens'
import { ModalPdf } from './components/ModalPdf'
import { ItemList } from './components/ItemList'
function App() {
  const [marketList, setMarketList] = useState<string[]>([])
  useEffect(() => {
    console.log(marketList)
  }, [marketList])
  return (
    <>
      <h2>Lista de mercado</h2>
      <AddItens addList={setMarketList} />
      <ItemList items={marketList} />
      <ModalPdf />
    </>
  )
}

export default App
