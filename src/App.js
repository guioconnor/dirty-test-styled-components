import React, { Component } from "react";
import Hello from "./Hello";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { whos: ["world", "moon"] };
  }

  addWho = e => {
    e.preventDefault();
    this.setState({ whos: [...this.state.whos, e.target.value] });
  };

  whoClicked = who => {
    this.setState({ whos: [who] });
  };

  render() {
    return (
      <div>
        <button value={this.state.whos.length} onClick={this.addWho}>
          {this.state.whos.length}
        </button>
        {this.state.whos.map(who => (
          <Hello who={who} onClick={this.whoClicked} key={who} />
        ))}
      </div>
    );
  }
}

export default App;
