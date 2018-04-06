import 'babel-polyfill';
import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import Cuckoo from "../src";

class Demo extends Component {
  render() {
    return (
      <div>
        <Cuckoo/>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('root'));