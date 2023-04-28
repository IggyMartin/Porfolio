import './App.css'
import Nav from './components/nav/Nav'
import Intro from './components/intro/Intro'
import Perfil from './components/perfil/perfilPrincipal/Perfil'
import Proyectos from './components/proyectos/proyectosGeneral/Proyectos'

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
