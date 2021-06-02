import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'));


export { default as Navigation } from "./components/Navigation";
export { default as Footer } from "./components/Footer";
export { default as Home } from "./components/Home";
export { default as About } from "./components/About";
export { default as Contact } from "./components/Contact";
export { default as MainFunction } from "./components/MainFunction";