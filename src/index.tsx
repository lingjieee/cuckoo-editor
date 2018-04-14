import * as React from 'react';
import {Editor, EditorState, RichUtils, DraftEditorCommand} from 'draft-js';
import 'draft-js/dist/Draft.css';
import './assets/styles/index.scss';

interface ICuckooProps {}
interface ICuckooState {
    editorState: EditorState
}

export default class Cuckoo extends React.Component<ICuckooProps, ICuckooState> {

  constructor(props: ICuckooState) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
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
      <div className="cuckoo-editor">
        <div className="cuckoo-controlBar">

        </div>
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

