import React, { Component } from "react";
class ClassCompo extends Component {
  constructor(props) {
    super(props);
    // console.log('Hi this is a compo...',props)
    console.log(props);
  }

  render() {
    return (
      <div>
        <h1>value come from useState 1:- {this.props.value.data}</h1>
        <h1>{this.props.value2.data1.name}</h1>
        <h1>This is class compo</h1>
      </div>
    );
  }
}
// this keyword use when we use class ased components
export default ClassCompo;
