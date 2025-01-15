import './App.css';
import { Router } from './routing';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from './store';

function App() {
  return (
    <div className="App" data-testid="app-container">
        <Provider store={store}>
        <BrowserRouter>  <Router /></BrowserRouter>
        </Provider>
      
    </div>
  );
}

export default App;
