import {useLoaderData, Link} from 'react-router-dom'
import "./VendingMachine.css"
export default function VendingMachine() {
  /**
   * @typedef {Object} Snack 
   * @property {number} id 
   * @property {string} name
   * 
   * @type {Snack[]} snackList
   */
  const snackList = useLoaderData()

  return <div className='vending-machine'>
    <h1>Vending Machine</h1>
    <ul>
      {snackList && snackList.map(snack => <li key={snack.id}><Link to={`/snack/${snack.id}`}>{snack.name}</Link></li>) }
    </ul>
  </div>
}