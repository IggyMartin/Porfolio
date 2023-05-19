import './App.css'
import Nav from './components/nav/Nav'
import Intro from './components/intro/Intro'
import Perfil from './components/perfil/perfilPrincipal/Perfil'
import Proyectos from './components/proyectos/proyectosGeneral/Proyectos'
import Contacto from './components/contacto/Contacto'
import Footer from './components/footer/Footer'

function App() {

  return (
    <div className="App">
      <Nav/>
      <Intro/>
      <Perfil/>
      <Proyectos/>
      <Contacto/>
      <Footer/>
    </div>
  )
}

export default App
