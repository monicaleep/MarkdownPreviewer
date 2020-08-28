(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{10:function(e,t,a){e.exports=a(11)},11:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a(4),s=a(1),r=a(9),l=a(8),o=a(0),c=a.n(o),d=a(5),m=a.n(d),u=(a(16),a(6)),h=a.n(u),w=a(7),p=a.n(w),g=(a(17),a(18),function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).state={input:'### Materialize Typography in Markdown\n\n## Headers\n\n# This is a Heading h1\n###### This is a Heading h6\n\n### Emphasis\n\n*This text will be italic* \n\n_This will also be italic_\n\n**This text will be bold** \n\n__This will also be bold__\n\n_You **can** combine them_\n\n### Lists\n\n#### Unordered (Materialize does not use bullets)\n\n* Item 1\n* Item 2\n  * Item 2a\n  * Item 2b\n\n#### Ordered\n1. Item 1\n1. Item 2\n1. Item 3\n   1. Item 3a\n   1. Item 3b\n\n### Images\n![This is a alt text.](https://i.imgur.com/SwMeiDI_d.webp?maxwidth=728&fidelity=grand "This is a sample image.")\n### Links\nThis text is based on [Markdown Live Preview](https://markdownlivepreview.com/).\n## Blockquotes\n> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.\n>\n>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.\n### Inline code\nThis web site is using `markedjs/marked`\n### Code Blocks\n<code>let x = 0 console.log(x)</code>'},i.reset=i.reset.bind(Object(s.a)(i)),i.updateMarkdown=i.updateMarkdown.bind(Object(s.a)(i)),i}return Object(i.a)(a,[{key:"updateMarkdown",value:function(e){this.setState({input:e.target.value})}},{key:"reset",value:function(){this.setState({input:""})}},{key:"render",value:function(){return c.a.createElement("div",{className:"row"},c.a.createElement("h3",{className:"center-align",style:{color:"#ee6e73"}},"Material Markdown"),c.a.createElement("h6",{className:"center-align"},"A MaterializeCSS Flavored Markdown Previewer"),c.a.createElement("div",{className:"row center-align"},c.a.createElement("button",{onClick:this.reset,class:"waves-effect waves-light btn blue-grey"},"Reset")),c.a.createElement("div",{className:"col s6"},c.a.createElement("div",{className:""},c.a.createElement("h2",{className:"center-align"},"Input"),c.a.createElement("div",{className:"input-field col s12 z-depth-1"},c.a.createElement("textarea",{id:"editor",className:"materialize-textarea ",value:this.state.input,onChange:this.updateMarkdown,style:{minHeight:400}})))),c.a.createElement("div",{className:"col s6"},c.a.createElement("h2",{className:"center-align"},"Output"),c.a.createElement("div",{style:{minHeight:400,paddingTop:1},className:"z-depth-1"},c.a.createElement("div",{id:"preview",dangerouslySetInnerHTML:{__html:p.a.sanitize(h()(this.state.input))}}))))}}]),a}(c.a.Component));m.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root"))},16:function(e,t,a){}},[[10,1,2]]]);
//# sourceMappingURL=main.d6e64ac1.chunk.js.map