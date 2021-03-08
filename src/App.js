import React from 'react'
import { Provider } from 'react-redux'
import { store } from './context/store/store'
import { AppRouter } from './routes/AppRouter'
import './styles/main.scss'
function App() {
  return (
    <Provider store={store} >
      <AppRouter />
    </Provider>
  )
}

export default App