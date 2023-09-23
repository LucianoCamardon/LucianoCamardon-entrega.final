import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "../src/components/Navbar/Navbar/"
import Footer from './components/Footer/Footer'
import Inicio from './views/Inicio/Inicio'
import AllItems from './views/AllItems/AllItems'
import CategoriaItems from './views/CategoriaItems/CategoriaItems'
import DetalleItem from './views/DetalleItem/DetalleItem'
import Pago from './views/Pago/Pago'


function App() {
  return (
    <Router>
      <main className='main'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/Categoria/:categoria' element={<CategoriaItems/>}/>
          <Route path='/Productos' element={<AllItems/>}/>
          <Route path='/Detalle/:id' element={<DetalleItem/>}/>
          <Route path='/Pago' element={<Pago/>}/>
        </Routes>
        <Footer></Footer>
      </main>
    </Router>
  )
}

export default App