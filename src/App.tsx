import './App.css'
import { AddItens } from './components/AddItens'
import { ModalPdf } from './components/ModalPdf'
import { ItemList } from './components/ItemList'

function App() {
  return (
    <>
      <h2>Lista de mercado</h2>
      <AddItens />
      <ItemList />
      <ModalPdf />
    </>
  )
}

export default App
