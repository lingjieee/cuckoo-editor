import 'babel-polyfill';
import * as React from 'react';
import {render} from 'react-dom'
import Cuckoo from "../src";
import './index.scss';

interface IDemoProps {}
interface IDemoState {}

class Demo extends React.Component<IDemoProps, IDemoState> {
  public render(): JSX.Element {
    return (
      <div className="editor">
        <Cuckoo/>
      </div>
    );
  }
}

render(<Demo />, document.getElementById('root'));