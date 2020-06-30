import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//document.title = "Arma tu Equipo"
ReactDOM.render(<App />, document.getElementById('root'));

    //redirect index.html
    var url_string = window.location.href;
    if (url_string.length>32 && url_string.search("#")===-1 ) {
    window.location.replace("https://arma-tu-equipo.herokuapp.com/");
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
serviceWorker.register();
