import { useState } from 'react'
import './App.css'
import { AddItens } from './components/AddItens'
import { ModalPdf } from './components/ModalPdf'
import { ItemList } from './components/ItemList'
function App() {
  const [marketList, setMarketList] = useState<string[]>([])

  function handleDeleteItem(item: string) {
    setMarketList((prevItems) => prevItems.filter((prevItem) => prevItem !== item))
  }
  return (
    <>
      <h2>Lista de mercado</h2>
      <AddItens addList={setMarketList} />
      <ItemList items={marketList} handleDelete={handleDeleteItem} />
      <ModalPdf list={marketList} />
    </>
  )
}

export default App
