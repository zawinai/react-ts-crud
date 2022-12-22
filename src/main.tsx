import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AppProvider } from './lib/context'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AppProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppProvider>
)
