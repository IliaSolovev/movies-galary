import React from "react";

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
  render() {
    return <div>State.name: ASd</div>;
  }
}

const Sandbox = () => {
  return (
    <div className="App">
      <FComponent />
      <RComponent />
      <RPureComponent />
      <RComponentWithState />
    </div>
  );
};
export default Sandbox;
