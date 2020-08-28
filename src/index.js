import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Marked from 'marked';
import DOMPurify from 'dompurify';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

Marked.setOptions({
  breaks: true
})

// const test = DOMPurify.sanitize(Marked("#### hi"));
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      input: `### Materialize Typography in Markdown

## Headers

# This is a Heading h1
###### This is a Heading h6

### Emphasis

*This text will be italic* \n
_This will also be italic_

**This text will be bold** \n
__This will also be bold__

_You **can** combine them_

### Lists

#### Unordered (Materialize does not use bullets)

* Item 1
* Item 2
  * Item 2a
  * Item 2b

#### Ordered
1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b

### Images
![This is a alt text.](https://i.imgur.com/SwMeiDI_d.webp?maxwidth=728&fidelity=grand "This is a sample image.")
### Links
This text is based on [Markdown Live Preview](https://markdownlivepreview.com/).
## Blockquotes
> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.
### Inline code
This web site is using \`markedjs/marked\`
### Code Blocks
\`\`\`
let x = 0 console.log(x)
\`\`\``
    };
    this.reset = this.reset.bind(this);
    this.updateMarkdown = this.updateMarkdown.bind(this);
  };
  updateMarkdown(event){
    this.setState({
      input: event.target.value
    })
  }
  reset(){
    this.setState({
      input: ""
    })
  }
  render(){
    return (

      <div className="row">

      <h3 className="center-align" style={{color:"#ee6e73"}}>Material Markdown</h3>
      <h6 className="center-align">A MaterializeCSS Flavored Markdown Previewer</h6>
      <div className="row center-align">
      <button onClick={this.reset} class="waves-effect waves-light btn blue-grey">Reset</button>
      </div>
        <div className="col s6">
        <div className="">
          <h2 className="center-align">Input</h2>
          <div className="input-field col s12 z-depth-1">
          <textarea id="editor" className="materialize-textarea " value={this.state.input} onChange={this.updateMarkdown} style={{minHeight:400}}></textarea>
          </div>
          </div>
        </div>
        <div className="col s6">
        <h2 className="center-align">Output</h2>
        <div style={{minHeight:400, paddingTop:1}} className="z-depth-1">
          <div id="preview"  dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(Marked(this.state.input))}} >
          </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
