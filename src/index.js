import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { Footer } from './components/footer/Footer.jsx';

import { Habit } from './components/habit/habit.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <> 
    <h1>Tus habitos...</h1>
    <Habit/>
    <Habit />
    <Habit />
    <Habit />
    <Footer></Footer>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
