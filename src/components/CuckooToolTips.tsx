import * as React from 'react';
import './CuckooToolTips.scss';
import Tooltip from "rc-tooltip";

export type TooltipPlacement =
  'top' | 'left' | 'right' | 'bottom' |
  'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' |
  'leftTop' | 'leftBottom' | 'rightTop' | 'rightBottom';
export type RenderFunction = () => React.ReactNode;

interface ICuckooToolTipsProps {
  title: React.ReactNode | RenderFunction,
  mouseEnterDelay?: number,
  mouseLeaveDelay?: number,
  placement?: TooltipPlacement,
  visible?: boolean,
  onVisibleChange?: (visible: boolean) => void,
  children: React.ReactNode,
}

interface ICuckooToolTipsState {
  visible: boolean
}

export default class CuckooToolTips extends React.Component<ICuckooToolTipsProps, ICuckooToolTipsState> {

  static defaultProps = {
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    placement: 'bottom' as TooltipPlacement
  };

  constructor(props: ICuckooToolTipsProps) {
    super(props);
    this.state = {
      visible: props.visible || false
    }
  }

  isNoTitle = () => {
    const { title } = this.props;
    return !title;
  };

  onVisibleChange = (visible: boolean) => {
    const { onVisibleChange } = this.props;
    if (!('visible' in this.props)) {
      this.setState({ visible: this.isNoTitle() ? false : visible });
    }
    if (onVisibleChange && !this.isNoTitle()) {
      onVisibleChange(visible);
    }
  };

  public render(): JSX.Element {
    let visible = this.state.visible;
    if (!('visible' in this.props) && this.isNoTitle()) {
      visible = false;
    }
    return (
      <Tooltip overlay={this.props.title || ''}
               prefixCls={'cuckoo-tooltip'}
               placement={this.props.placement}
               mouseEnterDelay={this.props.mouseEnterDelay}
               mouseLeaveDelay={this.props.mouseLeaveDelay}
               onVisibleChange={this.onVisibleChange}
               visible={visible}>
        {this.props.children}
      </Tooltip>
    );
  }
}