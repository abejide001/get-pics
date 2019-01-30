import React, { Component } from 'react'

export default class ImageCard extends Component {
  render() {
    return (
      <div>
        <img alt={this.props.alt} src={this.props.src}/>
      </div>
    )
  }
}
