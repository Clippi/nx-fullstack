import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './app/app'
import 'normalize.css'
import '@shared/styles'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <div>
    <StrictMode>
      <App />
    </StrictMode>
  </div>,
)
