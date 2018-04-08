import 'babel-polyfill';
import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import Cuckoo from "../src";
import './index.scss';

class Demo extends Component {
  render() {
    return (
      <div className="editor">
        <Cuckoo/>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('root'));