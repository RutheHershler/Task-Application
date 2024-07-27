import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import TaskSlice from './components/redux/Todoslice'
import PostSlice from './components/redux/Postslice'
import Userslice from './components/redux/Userslice'


const myStore = configureStore({
  reducer: {
    TaskSlice,
    PostSlice,
    Userslice
  }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
const MyContext=React.createContext();
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Provider store={myStore}>
          <App />
        </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
