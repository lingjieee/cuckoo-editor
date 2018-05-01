import * as React from 'react';
import Ilanguage from "../languages/Ilanguage";

export default (lang: Ilanguage) => [
  {
    key: 'save',
    title: lang.controls.save,
    text: <i className="cc-icons-save"></i>,
    type: 'editor-state-method',
    command: 'save'
  }
];