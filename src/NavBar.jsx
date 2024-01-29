import {NavLink} from 'react-router-dom'
import "./NavBar.css"
export default function NavBar () {
  return <nav>
    <ul>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/snack/1'>Soda</NavLink></li>
      <li><NavLink to='/snack/2'>Chips</NavLink></li>
      <li><NavLink to='/snack/3'>Chocolate</NavLink></li>
    </ul>
  </nav>
}