import React from 'react'
import ReactDOM from 'react-dom/client'
import { MyRouter } from './routes'

import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyRouter>
    </MyRouter>
  </React.StrictMode>,
)
