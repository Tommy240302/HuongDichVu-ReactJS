import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import "./index.css"
import App from "./App.jsx"
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <App />
  </Provider>,
)
