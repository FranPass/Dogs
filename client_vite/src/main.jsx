// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from "react-router-dom";


const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
);
  
  // import { Provider } from "react-redux";
  // import { store } from './redux/store'
  // <Provider store={store}>
  //   </Provider>,

  // forma anterior de hacerlo (con react 17)
  // ReactDOM.render(
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>,
  //   document.getElementById('root')
  // );