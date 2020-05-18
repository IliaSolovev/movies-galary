import React  from "react";
import ReactDOM from "react-dom";
import Sandbox from "./Sandbox";
import "./styles/main.scss";
class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        Привет, {this.props.name}
        <Sandbox/>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Саша" />,
  document.getElementsByClassName("container")[0]
);