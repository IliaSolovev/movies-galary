import React from "react";
import SvgImage from "./images/music-and-multimedia.svg";
import "./styles/main.scss";
const FComponent = () => {
  return <div>FComponent</div>;
};

class RComponent extends React.Component {
  render() {
    return <div className="reactC">React.Component</div>;
  }
}
class RPureComponent extends React.PureComponent {
  render() {
    return <div>React.PureComponent</div>;
  }
}

class RComponentWithState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ilya"
    };
  }
  render() {
    return <div>State.name: {this.state.name}</div>;
  }
}

const Sandbox = () => {
  return (
    <div className="App">
      <FComponent />
      <RComponent />
      <RPureComponent />
      <RComponentWithState />
      <SvgImage width={50} height={50}/>
    </div>
  );
};
export default Sandbox;
