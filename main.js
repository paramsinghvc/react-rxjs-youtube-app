import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { indigo500, indigo700, lime500, grey400, grey100, grey500, darkBlack } from 'material-ui/styles/colors';

import App from './App.jsx';

injectTapEventPlugin();

let muiTheme = getMuiTheme({
    palette: {
        primary1Color: indigo500,
        primary2Color: indigo700,
        primary3Color: grey400,
        accent1Color: lime500,
        accent2Color: grey100,
        accent3Color: grey500,
        textColor: darkBlack
    },
    appBar : {
    	height : 60
    }
});

ReactDOM.render( < MuiThemeProvider muiTheme = { muiTheme } >
    < App / >
    < /MuiThemeProvider>		, document.getElementById('main'));
