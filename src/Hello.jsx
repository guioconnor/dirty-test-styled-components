import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
  background: ${props => (props.clicked ? "#666" : "#ccc")}
  font-size: 40px;
  border-radius: 5px;
  padding: 5px 20px;
  margin: 5px;
`;

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  onClick = who => {
    console.log("here");
    this.setState(
      {
        clicked: true
      },
      () => {
        console.log(this.state);
        this.props.onClick(this.props.who);
      }
    );
  };

  render() {
    const { who } = this.props;
    return (
      <Button clicked={this.state.clicked} onClick={this.onClick}>
        Hello {who}
      </Button>
    );
  }
}

export default Hello;
