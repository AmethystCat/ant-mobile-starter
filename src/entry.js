import React from 'react';
import ReactDOM from 'react-dom';
import Test from './test/main.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
    }
    render() {
        return (
        	<div>
        		<h1>Hello world! (♥◠‿◠)ﾉ</h1>
        		<div><h3>ant mobile comnponents _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_</h3></div>
        		<Test/>
        	</div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));