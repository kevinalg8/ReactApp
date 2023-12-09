import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from "./components/App.jsx"
import './styles/index.css'



//Los componentes siempre tienen que ser PascalCase para que react los interprete como tal 
ReactDOM.createRoot(document.getElementById('root')).render(
<App/>
)
