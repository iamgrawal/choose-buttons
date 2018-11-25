import React, { Component } from 'react'

export default class ButtonComponent extends Component {
  render() {
    return (
      <button className={this.props.className} onClick={() => this.props.clickEvent(this.props.keyName)}>
        {this.props.content}
      </button>
    );
  }
}
