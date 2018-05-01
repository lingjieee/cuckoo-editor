import * as React from 'react';
import './CuckooButton.scss';
import CuskooToolTips from "./CuckooToolTips";

export type TooltipPlacement =
    'top' | 'left' | 'right' | 'bottom' |
    'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' |
    'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom';
export type RenderFunction = () => React.ReactNode;

interface IButtonProps {
    title: React.ReactNode| RenderFunction,
    children: React.ReactNode,
    onClick?: any,
    prefixCls?: string
}
interface IButtonState {}

export default class CuckooButton extends React.Component<IButtonProps, IButtonState> {

    handleClick = (e: any) => {
      if(this.props.onClick)
          this.props.onClick(e);
    };

    render() {
        return (
          <CuskooToolTips title={this.props.title} mouseEnterDelay={0.5}>
            <button className={this.props.prefixCls||''} onClick={this.handleClick}>
                {this.props.children}
            </button>
          </CuskooToolTips>
        );
    }
}