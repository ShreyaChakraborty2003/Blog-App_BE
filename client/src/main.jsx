import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'
import {Provider} from'react-redux'
import App from './App.jsx'
import { store,persistor } from './redux/Store.js'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>

  <Provider store={store}>

      <PersistGate loading={null} persistor={persistor}>
         <App /> 
      </PersistGate>


       

  </Provider>
   
  </StrictMode>,
)
