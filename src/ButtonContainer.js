import React, { Component } from 'react';
import ButtonComponent from './ButtonComponent';

export default class ButtonContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      componentClicked : ''
    };
  }
  clickEvent = key=>{
    console.log('key selected', key);
    this.setState({
      componentClicked: key
    });
  }
  renderContentOfChosenButton = () => {
    if(this.state.componentClicked === 'A') {
      return this.props.contentA;
    } else if(this.state.componentClicked === 'B') {
      return this.props.contentB;
    } else {
      return "";
    }
  }
  render() {
    return (
      <div className={this.props.className}>
        <h2>{this.renderContentOfChosenButton()}</h2>
        <div>
          <ButtonComponent keyName='A' clickEvent={this.clickEvent} content="I Choose A" />
          <ButtonComponent keyName='B' clickEvent={this.clickEvent} content="I Choose B" />
        </div>
      </div>
    );
  }
}
