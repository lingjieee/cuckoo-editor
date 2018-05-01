import * as React from 'react';
import {Editor, EditorState, RichUtils, DraftEditorCommand} from 'draft-js';
import 'draft-js/dist/Draft.css';
import './assets/styles/index.scss';
import ControllBar from "./controller/ControllBar";

interface ICuckooProps {
  language?: string
}

interface ICuckooState {
  editorState: EditorState,
  browserCls: string
}

export default class Cuckoo extends React.Component<ICuckooProps, ICuckooState> {

  constructor(props: ICuckooProps) {
    super(props);
    let browser = null;
    if ((window as any).chrome) {
      browser = 'chrome'
    } else if ((window as any).safari) {
      browser = 'safari'
    } else if (navigator.userAgent.indexOf('Firefox') > 0) {
      browser = 'firefox'
    }
    this.state = {
      editorState: EditorState.createEmpty(),
      browserCls: `browser-${browser}`
    };
  }

  onChange = (editorState: any) => {
    this.setState({editorState});
  };

  handleKeyCommand = (command: DraftEditorCommand, editorState: EditorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  render() {
    return (
      <div className={`cuckoo-editor ${this.state.browserCls}`}>
        <ControllBar/>
        <div className="cuckoo-content">
          <Editor
            editorState={this.state.editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}

