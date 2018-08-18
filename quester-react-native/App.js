import React from 'react';

const KotlinApp = require("./build/js/quester-react-native").quester.init();

export default class App extends React.Component {
    render() {
        return <KotlinApp />;
    }
}
