import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import carReducer from './reducers/CarReducer'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(carReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


