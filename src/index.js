import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import User from './User';
import { store } from './redux/store';



ReactDOM.render(
    <Provider store={store}>
        <User />
    </Provider>,
    document.getElementById('root')
);
