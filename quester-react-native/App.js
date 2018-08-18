import React from 'react';

const app = require("./build/js/quester-react-native");

export default class App extends React.Component {
    render() {
        return React.createElement(
            app.quester.init(),
            null,
            null
        );
    }
}
