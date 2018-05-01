import * as React from 'react';
import '../assets/styles/button.scss';
import Tooltip  from "rc-tooltip";
import 'rc-tooltip/assets/bootstrap.css';

export type TooltipPlacement =
    'top' | 'left' | 'right' | 'bottom' |
    'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' |
    'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom';
export type RenderFunction = () => React.ReactNode;

interface IButtonProps {
    title: React.ReactNode| RenderFunction,
    mouseEnterDelay?: number,
    mouseLeaveDelay?: number,
    children: React.ReactNode,
    placement?: TooltipPlacement,
    onClick?: React.FormEventHandler<any>
}
interface IButtonState {}

export default class CuckooButton extends React.Component<IButtonProps, IButtonState> {

    static defaultProps = {
        mouseEnterDelay: 0.1,
        mouseLeaveDelay: 0.1,
        placement: 'bottom' as TooltipPlacement,
        onClick: ()=>{}
    };

    render() {
        return (
          <Tooltip overlay={this.props.title||''}
                   placement={this.props.placement}
                   mouseEnterDelay={this.props.mouseEnterDelay}
                   mouseLeaveDelay={this.props.mouseLeaveDelay}>
            <button className="cuckoo-button">
                {this.props.children}
            </button>
          </Tooltip>
        );
    }
}