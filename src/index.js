import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Marked from 'marked';
const test = Marked("#### hi");
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      input: ""
    }
  }
  render(){
    return (
      <div dangerouslySetInnerHTML={{__html:test}}>


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
