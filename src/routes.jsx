/* eslint-disable react/prop-types */
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import VendingMachine from './VendingMachine'
import App from './App'
import Snack from './Snack'
import sodaUrl from './assets/can.png'
import chipsUrl from './assets/products.png'
import chocolateUrl from './assets/chocolate-bar.png'

const snackList = [
  {
    id: 1,
    name: 'soda',
    url: sodaUrl
  }, 
  {
    id: 2,
    name: 'chips',
    url: chipsUrl
  }, 
  {
    id: 3,
    name: 'chocolate',
    url: chocolateUrl
  }
]
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/', 
        element: <VendingMachine/>,
        loader: () => snackList
      },
      {
        path: '/snack/:id', 
        element: <Snack />,
        loader: ({params}) => {
          console.log({params})
          return snackList.find(snack => String(snack.id) === params.id)??null
        }
      },
    ]
  }
 
])

export function MyRouter({children}) {
  return <RouterProvider router={router}>
    {children}
  </RouterProvider>
}