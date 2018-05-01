export default interface Ilanguage{
  controls: IlanguageControls
}

export interface IlanguageControls{
  save: string,
  print: string,
  clear: string,
  template: string,
  undo: string,
  redo: string,
  removeStyles: string,
  fontFamily: string,
  header_h1: string,
  header_h2: string,
  header_h3: string,
  header_h4: string,
  header_h5: string,
  header_h6: string,
  normal: string,
  color: string,
  backgroundColor: string,
  bold: string,
  italic: string,
  underline: string,
  strikeThrough: string,
  code: string,
  highlight: string,
  superScript: string,
  subScript: string,
  emoji: string,
  alignLeft: string,
  alignCenter: string,
  alignRight: string,
  alignJustify: string,
  orderedList: string,
  unorderedList: string,
  taskList: string,
  file: string,
  link: string,
  unlink: string,
  picture: string,
  media: string,
  latex: string,
  plantUML: string,
  blockQuote: string,
  codeBlock: string,
  table: string,
  hr: string,
  preview: string,
  fullScreen: string,
  help: string
}