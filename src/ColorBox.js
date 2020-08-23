import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  lowerOpacity = () => {return (this.props.opacity - 0.1)}

  // returnFunction = () => {
  //   this.render()
  //   this.lowerOpacity(this.props.opacity)
  // }

  render() {
    if (this.props.opacity >= 0.2) {
      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
          <ColorBox opacity={this.lowerOpacity()} />
        </div>
      )
    } else {
      return null
    }
  }

}

    // return (
    //   <div className="color-box" style={{opacity: this.props.opacity}}>
    //     {
    //       this.props.opacity >= 0.2 ? this.returnFunction() : null
    //     }
    //   </div>
    // )