import * as React from 'react';
import '../assets/styles/button.scss';
import Tooltip  from "rc-tooltip";

interface IButtonProps {}
interface IButtonState {}

export default class CuckooButton extends React.Component<IButtonProps, IButtonState> {

    render() {
        return (
          <Tooltip overlay={'xxx'}>
            <button className="cuckoo-button"></button>
          </Tooltip>
        );
    }
}