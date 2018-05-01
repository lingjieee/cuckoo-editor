import * as React from 'react';
import "./ControllBar.scss";
import CuckooButton from "../components/CuckooButton";

interface IControllBarProps {
}

interface IControllBarState {
}

const controlBtnCls = 'controller-item controller-button';

export default class ControllBar extends React.Component<IControllBarProps, IControllBarState> {
  public render(): JSX.Element {
    return (
      <div className="cuckoo-controlBar">
        <CuckooButton title={'保存'} prefixCls={controlBtnCls}>
          <i className="cc-icons-save"></i>
        </CuckooButton>
        <CuckooButton title={'打印'} prefixCls={controlBtnCls}>
          <i className="cc-icons-dayinji"></i>
        </CuckooButton>
        <CuckooButton title={'清空文档'} prefixCls={controlBtnCls}>
          <i className="cc-icons-xinjian"></i>
        </CuckooButton>
        <CuckooButton title={'模板'} prefixCls={controlBtnCls}>
          <i className="cc-icons-moban"></i>
        </CuckooButton>
        <span className="split-line"></span>
        <CuckooButton title={'撤销'} prefixCls={controlBtnCls}>
          <i className="cc-icons-chexiao"></i>
        </CuckooButton>
        <CuckooButton title={"重做"} prefixCls={`${controlBtnCls} disable`}>
          <i className="cc-icons-zhongzuo"></i>
        </CuckooButton>
        <CuckooButton title={"清除格式"} prefixCls={controlBtnCls}>
          <i className="cc-icons-qingchu"></i>
        </CuckooButton>
        <span className="split-line"></span>
        <CuckooButton title={''} prefixCls={controlBtnCls}>
          <div>字体</div>
        </CuckooButton>
        <CuckooButton title={''} prefixCls={controlBtnCls}>
          <div>字号</div>
        </CuckooButton>
        <span className="split-line"></span>
        <CuckooButton title={'颜色'} prefixCls={controlBtnCls}>
          <i className="cc-icons-yanse"></i>
        </CuckooButton>
        <CuckooButton title={'背景色'} prefixCls={controlBtnCls}>
          <i className="cc-icons-beijingse"></i>
        </CuckooButton>
        <CuckooButton title={'加粗'} prefixCls={controlBtnCls}>
          <i className="cc-icons-jiacu"></i>
        </CuckooButton>
        <CuckooButton title={'斜体'} prefixCls={controlBtnCls}>
          <i className="cc-icons-xieti"></i>
        </CuckooButton>
        <CuckooButton title={'下划线'} prefixCls={controlBtnCls}>
          <i className="cc-icons-xiahuaxian"></i>
        </CuckooButton>
        <CuckooButton title={'删除线'} prefixCls={controlBtnCls}>
          <i className="cc-icons-shanchuxian"></i>
        </CuckooButton>
        <CuckooButton title={'代码'} prefixCls={controlBtnCls}>
          <i className="cc-icons-daimakuai"></i>
        </CuckooButton>
        <CuckooButton title={'高亮'} prefixCls={controlBtnCls}>
          <i className="cc-icons-highlighter"></i>
        </CuckooButton>
        <span className="split-line"></span>
        <CuckooButton title={'上标'} prefixCls={controlBtnCls}>
          <i className="cc-icons-shangbiao"></i>
        </CuckooButton>
        <CuckooButton title={'下标'} prefixCls={controlBtnCls}>
          <i className="cc-icons-xiabiao"></i>
        </CuckooButton>
        <CuckooButton title={'表情'} prefixCls={controlBtnCls}>
          <i className="cc-icons-emoji"></i>
        </CuckooButton>
        <span className="split-linr"></span>
        <CuckooButton title={'左对齐'} prefixCls={controlBtnCls}>
          <i className="cc-icons-zuoduiqi"></i>
        </CuckooButton>
        <CuckooButton title={'居中对齐'} prefixCls={controlBtnCls}>
          <i className="cc-icons-juzhongduiqi"></i>
        </CuckooButton>
        <CuckooButton title={'右对齐'} prefixCls={controlBtnCls}>
          <i className="cc-icons-youduiqi"></i>
        </CuckooButton>
        <CuckooButton title={'两端对齐'} prefixCls={controlBtnCls}>
          <i className="cc-icons-liangduanduiqi"></i>
        </CuckooButton>
        <span className="split-line"></span>
        <CuckooButton title={'有序列表'} prefixCls={controlBtnCls}>
          <i className="cc-icons-youxuliebiao"></i>
        </CuckooButton>
        <CuckooButton title={'无序列表'} prefixCls={controlBtnCls}>
          <i className="cc-icons-wuxuliebiao"></i>
        </CuckooButton>
        <CuckooButton title={'任务列表'} prefixCls={controlBtnCls}>
          <i className="cc-icons-yigouxuan"></i>
        </CuckooButton>
        <span className="split-line"></span>
        <CuckooButton title={'附件'} prefixCls={controlBtnCls}>
          <i className="cc-icons-fujian"></i>
        </CuckooButton>
        <CuckooButton title={'链接'} prefixCls={controlBtnCls}>
          <i className="cc-icons-chaolianjie"></i>
        </CuckooButton>
        <CuckooButton title={'取消链接'} prefixCls={controlBtnCls}>
          <i className="cc-icons-qingchuchaolianjie"></i>
        </CuckooButton>
        <CuckooButton title={'图片'} prefixCls={controlBtnCls}>
          <i className="cc-icons-tupianshangchuan"></i>
        </CuckooButton>
        <CuckooButton title={'视频'} prefixCls={controlBtnCls}>
          <i className="cc-icons-shipin"></i>
        </CuckooButton>
        <CuckooButton title={'公式'} prefixCls={controlBtnCls}>
          <i className="cc-icons-math"></i>
        </CuckooButton>
        <CuckooButton title={'PlantUML'} prefixCls={controlBtnCls}>
          <i className="cc-icons-puml"></i>
        </CuckooButton>
        <CuckooButton title={'引用'} prefixCls={controlBtnCls}>
          <i className="cc-icons-yinyong"></i>
        </CuckooButton>
        <CuckooButton title={'代码块'} prefixCls={controlBtnCls}>
          <i className="cc-icons-daima"></i>
        </CuckooButton>
        <span className="split-line"></span>
        <CuckooButton title={'表格'} prefixCls={controlBtnCls}>
          <i className="cc-icons-charubiaoge"></i>
        </CuckooButton>
        <CuckooButton title={'分割线'} prefixCls={controlBtnCls}>
          <i className="cc-icons-fengexian"></i>
        </CuckooButton>
        <span className="split-line"></span>
        <CuckooButton title={'预览'} prefixCls={controlBtnCls}>
          <i className="cc-icons-yulan"></i>
        </CuckooButton>
        <CuckooButton title={'全屏'} prefixCls={controlBtnCls}>
          <i className="cc-icons-quanping"></i>
        </CuckooButton>
        <CuckooButton title={'帮助'} prefixCls={controlBtnCls}>
          <i className="cc-icons-bangzhu"></i>
        </CuckooButton>
      </div>
    );
  }
}