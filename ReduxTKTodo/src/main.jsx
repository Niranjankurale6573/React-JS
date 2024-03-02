import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AddTodo from './Component/AddTodo.jsx'
import Todos from './Component/Todos.jsx'
import { Provider } from 'react-redux'
import {Store} from './app/Store.js'

ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={Store}>
      <AddTodo/>
      <Todos/>
    </Provider>
)
