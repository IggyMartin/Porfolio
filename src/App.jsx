import './App.css'
import Nav from './components/nav/nav'
import Intro from './components/intro/Intro'
import Perfil from './components/perfil/perfilPrincipal/Perfil'
import Proyectos from './components/proyectos/Proyectos'

function App() {

  return (
    <div className="App">
      <Nav/>
      <Intro/>
      <Perfil/>
      <Proyectos/>
    </div>
  )
}

export default App
