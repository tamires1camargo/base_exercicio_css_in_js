import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import EstiloGlobal, { Container } from './containers/styles'

//import Hero from './components/Hero'
//import ListaVagas from './containers/ListaVagas'

//import './global.css'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Header />
        <Hero />
        <ListaVagas />
      </Container>
    </>
  )
}

export default App
