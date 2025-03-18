import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App';
import './index.css'


// Render the root component with BrowserRouter
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter> {/* Wrap your app with BrowserRouter for routing */}
    <App />
  </BrowserRouter>
);
