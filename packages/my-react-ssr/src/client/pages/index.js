import React from 'react';

export default class Index extends React.Component {
  constructor(props){
    super(props);
  }

  handlerClick(){
    alert('tst');
  }

  render(){
    return (<h1 onClick={this.handlerClick}>Hello React SSR</h1>);
  }
}
