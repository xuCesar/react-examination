import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import store from './redux/store'

// import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {LocaleProvider} from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={zhCN}>
      <App />
    </LocaleProvider>
  </Provider>
  , 
  document.getElementById('root')
);

registerServiceWorker();
