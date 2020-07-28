import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import _Footer from './Footer';
import _Modal from './Modal';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
    <_Footer/>,
  document.getElementById('stickyFooter')
);

ReactDOM.render(
  <_Modal/>,
document.getElementById('ModalExample')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
