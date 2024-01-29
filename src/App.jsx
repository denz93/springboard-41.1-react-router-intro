import './App.css'
import { Outlet} from 'react-router-dom';
import NavBar from "./NavBar"
function App() {

  return (
    <div className='app'>
      <NavBar/>
      <section>
        <Outlet/>
      </section>
      <footer>
        <a href="https://www.flaticon.com/free-icons/chocolate-bar" title="chocolate bar icons">Chocolate bar icons created by iconixar - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/soda" title="soda icons">Soda icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/chips" title="chips icons">Chips icons created by Freepik - Flaticon</a>
      </footer>
    </div>
  )
}

export default App
